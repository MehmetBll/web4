const http = require("node:http");
const fs = require("node:fs");
const path = require("node:path");

const rootDir = __dirname;
const port = Number(process.env.PORT || 3000);

const mimeTypes = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon",
};

function readEnvFile() {
  const envPath = path.join(rootDir, ".env");
  if (!fs.existsSync(envPath)) return;

  const lines = fs.readFileSync(envPath, "utf8").split(/\r?\n/);
  lines.forEach((line) => {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) return;

    const separatorIndex = trimmed.indexOf("=");
    if (separatorIndex === -1) return;

    const key = trimmed.slice(0, separatorIndex).trim();
    const value = trimmed.slice(separatorIndex + 1).trim();
    if (!process.env[key]) process.env[key] = value;
  });
}

function sendJson(response, statusCode, payload) {
  response.writeHead(statusCode, {
    "Content-Type": "application/json; charset=utf-8",
    "Cache-Control": "no-store",
  });
  response.end(JSON.stringify(payload));
}

function sendFile(response, requestUrl) {
  const cleanPath = decodeURIComponent(requestUrl.split("?")[0]);
  const requestedPath = cleanPath === "/" ? "/index.html" : cleanPath;
  const filePath = path.resolve(rootDir, `.${requestedPath}`);

  if (!filePath.startsWith(rootDir)) {
    response.writeHead(403);
    response.end("Forbidden");
    return;
  }

  fs.readFile(filePath, (error, content) => {
    if (error) {
      response.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
      response.end("Dosya bulunamadı.");
      return;
    }

    const extension = path.extname(filePath).toLowerCase();
    response.writeHead(200, {
      "Content-Type": mimeTypes[extension] || "application/octet-stream",
    });
    response.end(content);
  });
}

function parseStaffIds() {
  return new Set(
    (process.env.DISCORD_STAFF_USER_IDS || "")
      .split(",")
      .map((id) => id.trim())
      .filter(Boolean),
  );
}

function fivemEndpoint() {
  const cfxCode = process.env.FIVEM_CFX_CODE;
  if (cfxCode) {
    return `https://servers-frontend.fivem.net/api/servers/single/${encodeURIComponent(cfxCode)}`;
  }

  const endpoint = process.env.FIVEM_ENDPOINT;
  if (endpoint) return `http://${endpoint.replace(/^https?:\/\//, "")}/players.json`;

  return null;
}

async function getFiveMStatus() {
  const endpoint = fivemEndpoint();
  if (!endpoint) {
    return {
      online: false,
      players: 0,
      maxPlayers: 0,
      message: "FIVEM_CFX_CODE veya FIVEM_ENDPOINT .env içinde tanımlanmalı.",
    };
  }

  try {
    const response = await fetch(endpoint, {
      headers: { "User-Agent": "NovaRoleplayStatus/1.0" },
    });
    if (!response.ok) throw new Error(`FiveM HTTP ${response.status}`);

    const data = await response.json();
    if (Array.isArray(data)) {
      return {
        online: true,
        players: data.length,
        maxPlayers: Number(process.env.FIVEM_MAX_PLAYERS || 0),
      };
    }

    const serverData = data?.Data || {};
    return {
      online: true,
      players: Number(serverData.clients || 0),
      maxPlayers: Number(serverData.sv_maxclients || 0),
      hostname: serverData.hostname || "",
    };
  } catch (error) {
    return {
      online: false,
      players: 0,
      maxPlayers: 0,
      message: "FiveM verisi alınamadı. CFX kodunu veya IP:port bilgisini kontrol et.",
    };
  }
}

async function getDiscordStatus() {
  const guildId = process.env.DISCORD_GUILD_ID;
  if (!guildId) {
    return {
      online: false,
      onlineMembers: 0,
      activeStaff: 0,
      message: "DISCORD_GUILD_ID .env içinde tanımlanmalı.",
    };
  }

  try {
    const response = await fetch(`https://discord.com/api/guilds/${guildId}/widget.json`, {
      headers: { "User-Agent": "NovaRoleplayStatus/1.0" },
    });
    if (!response.ok) throw new Error(`Discord HTTP ${response.status}`);

    const data = await response.json();
    const members = Array.isArray(data.members) ? data.members : [];
    const staffIds = parseStaffIds();
    const activeStaff = staffIds.size
      ? members.filter((member) => staffIds.has(member.id)).length
      : 0;

    return {
      online: true,
      onlineMembers: Number(data.presence_count || members.length || 0),
      activeStaff,
      staffTrackingEnabled: staffIds.size > 0,
    };
  } catch (error) {
    return {
      online: false,
      onlineMembers: 0,
      activeStaff: 0,
      message: "Discord widget verisi alınamadı. Sunucu widget ayarını açman gerekiyor.",
    };
  }
}

async function getStatus() {
  const [fivem, discord] = await Promise.all([getFiveMStatus(), getDiscordStatus()]);
  return {
    updatedAt: new Date().toISOString(),
    fivem,
    discord,
  };
}

readEnvFile();

const server = http.createServer(async (request, response) => {
  if (request.url.startsWith("/api/status")) {
    try {
      sendJson(response, 200, await getStatus());
    } catch (error) {
      sendJson(response, 500, { error: "Canlı durum alınamadı." });
    }
    return;
  }

  sendFile(response, request.url);
});

server.listen(port, () => {
  console.log(`Site hazır: http://localhost:${port}`);
});

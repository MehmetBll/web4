// ================================================================
// SİTE ÖZELLEŞTİRME ALANI
// Sunucu adını, linkleri, kategori isimlerini, alt sayfa içeriklerini
// ve bölüm metinlerini bu nesneden değiştirebilirsin.
// ================================================================
const siteConfig = {
  siteName: "Nova Roleplay", // BURAYI DEĞİŞTİR: Sunucu / site adı
  siteShort: "N", // BURAYI DEĞİŞTİR: Logo kutusunda görünen kısa harf
  discordUrl: "https://discord.gg/GdDaabaHZ", // BURAYI DEĞİŞTİR: Discord davet linki
  donateUrl: "https://discord.gg/gVpPHPXHS", // BURAYI DEĞİŞTİR: DONATE Discord linki
  applicationChannels: {
    lspd: "https://discord.com/channels/1439035577109446870/1477676061805510707",
    ems: "https://discord.com/channels/1439035577109446870/1450887591548293213",
    lsdoj: "https://discord.com/channels/1439035577109446870/1442879305586573343",
  },
  liveStatus: {
    // GitHub Pages icin Node.js gerekmez. Bu degerleri doldurman yeterli.
    // CFX kodu ornek: cfx.re/join/abc123 adresindeki "abc123".
    fivemCfxCode: "",
    // CFX kodu yoksa sunucu endpointi yazabilirsin: "127.0.0.1:30120".
    // Not: Direkt IP endpointlerinde tarayici CORS engeli olabilir; CFX kodu daha sagliklidir.
    fivemEndpoint: "",
    fivemMaxPlayers: 128,
    discordGuildId: "1439035577109446870",
    // Aktif yetkili sayimi icin yetkili Discord kullanici ID'lerini buraya ekle.
    staffUserIds: [
      "680429618532188273",
      "319867578686111744",
      "689766089567109158",
      

    ],
  },

  hero: {
    kicker: "Non-Whitelist Roleplay Sunucusu",
    title: "Nova Roleplay",
    copy:
      "Hikâye odaklı ekonomi, meslek, illegal ve sosyal rol kategorileriyle dengeli bir RP deneyimi.",
  },

  server: {
    status: "Aktif",
    slot: "--",
    platform: "FiveM",
  },

  highlights: [
    {
      label: "Aktif Oyuncu",
      value: "350+",
      text: "Şehirde her gün farklı rol akışlarını besleyen topluluk.",
    },
    {
      label: "Kategori",
      value: "8",
      text: "Tanıtım, duyuru, başvuru, illegal, donate ve destek bölümleri tek yerde.",
    },
    {
      label: "Destek",
      value: "7/24",
      text: "Discord üzerinden ticket ve yetkili yönlendirmesi.",
    },
    {
      label: "Ekonomi",
      value: "Dengeli",
      text: "Üretim, ticaret, meslek ve risk odaklı kazanç sistemi.",
    },
  ],

  // KATEGORİ ÖZELLEŞTİRME:
  // slug alt sayfa linkidir: kategori.html?kategori=slug
  // details alanı kategori alt sayfasında gösterilir.
  categories: [
    {
      type: "Genel",
      slug: "tanitim",
      icon: "landmark",
      title: "Sunucu Tanıtımı",
      text: "Şehir hikâyesi, başlangıç rehberi, ekonomi mantığı ve temel bilgiler.",
      tags: ["Yeni Oyuncu", "Rehber"],
      details: {
        title: "Sunucu Tanıtımı",
        intro:
          "Bu bölümde sunucunun genel yapısı, şehir atmosferi, ekonomi dengesi ve yeni oyuncuların ilk adımları anlatılır.",
        items: [
          "Sunucu konsepti ve rol kalitesi beklentileri",
          "Yeni oyuncular için başlangıç akışı",
          "Ekonomi, meslek ve topluluk düzeni",
          "Discord kanalları ve destek sistemi",
        ],
        actionText: "Discord'a Katıl",
        actionUrl: "discordUrl",
      },
    },
    {
      type: "Genel",
      slug: "duyurular",
      icon: "megaphone",
      title: "Duyurular",
      text: "Güncellemeler, bakım saatleri, etkinlikler ve önemli topluluk haberleri.",
      tags: ["Güncel", "Etkinlik"],
      details: {
        title: "Duyurular",
        intro:
          "Sunucuya ait güncellemeler, etkinlik planları, bakım duyuruları ve önemli kararlar bu alanda listelenir.",
        items: [
          "Haftalık güncelleme ve bakım notları",
          "Etkinlik, turnuva ve şehir içi organizasyonlar",
          "Kural değişiklikleri ve yönetim kararları",
          "Oyunculara özel önemli bilgilendirmeler",
        ],
        actionText: "Duyuruları Discord'da Gör",
        actionUrl: "discordUrl",
      },
    },
    {
      type: "Genel",
      slug: "kurallar",
      icon: "shield-check",
      title: "Kurallar",
      text: "Rol kalitesi, combat, illegal ve topluluk kuralları için merkezi alan.",
      tags: ["Zorunlu", "Güncel"],
      details: {
        title: "Kurallar",
        intro:
          "Kurallar bölümü roleplay kalitesini korumak için temel davranış, çatışma, illegal rol ve iletişim standartlarını açıklar.",
        items: [
          "Meta, power ve fail RP yasaktır",
          "OOC tartışmalar ticket üzerinden ilerler",
          "Çatışma rolleri sebep-sonuç ilişkisiyle oynanır",
          "İllegal roller kanıt, risk ve takip mantığıyla yürür",
        ],
        actionText: "Destek Aç",
        actionUrl: "discordUrl",
      },
    },
    {
      type: "Başvuru",
      slug: "sunucuya-katilim",
      icon: "log-in",
      title: "Sunucuya Katılım",
      text: "Whitelist olmadan Discord'a katıl, kuralları oku ve role başla.",
      tags: ["Non-Whitelist", "Discord"],
      details: {
        title: "Sunucuya Katılım",
        intro:
          "Bu sunucu non-whitelist yapıda çalışır. Oyuna başlamak için Discord'a katılman, kuralları okuman ve gerekli bağlantı bilgilerini takip etmen yeterlidir.",
        items: [
          "Discord sunucusuna katıl",
          "Kurallar ve duyurular kanallarını oku",
          "Sunucu bağlantı bilgilerini takip et",
          "Karakterini oluşturup role başla",
        ],
        actionText: "Discord'a Katıl",
        actionUrl: "discordUrl",
      },
    },
    {
      type: "Başvuru",
      slug: "ekip-basvurusu",
      icon: "badge-check",
      title: "Ekip Başvurusu",
      text: "LSPD, EMS, mekanik, avukatlık ve diğer meslek ekipleri için başvuru.",
      tags: ["Meslek", "Discord"],
      details: {
        title: "Ekip Başvurusu",
        intro:
          "Ekip başvuruları kamu, sağlık, hukuk ve özel oluşum rollerine katılmak isteyen oyuncular içindir. İlgili Discord kanalından başvuru detaylarını takip edebilirsin.",
        items: [
          "Başvurmak istediğin ekibi seç",
          "İlgili Discord kanalına git",
          "Kanalda belirtilen başvuru formatını takip et",
          "Yetkili ekibin Discord üzerinden dönüşünü bekle",
        ],
        actionText: "Discord Sunucusuna Katıl",
        actionUrl: "discordUrl",
        actionLinks: [
          {
            text: "LSPD Başvuru",
            url: "applicationChannels.lspd",
            icon: "shield",
          },
          {
            text: "EMS Başvuru",
            url: "applicationChannels.ems",
            icon: "heart-pulse",
          },
          {
            text: "LSDOJ Başvuru",
            url: "applicationChannels.lsdoj",
            icon: "scale",
          },
        ],
      },
    },
    {
      type: "Rol",
      slug: "illegal-roller",
      icon: "siren",
      title: "İllegal Roller",
      text: "Risk, strateji ve hikâye dengesine dayalı illegal rol kategorileri.",
      tags: ["Çete", "Operasyon"],
      details: {
        title: "İllegal Roller",
        intro:
          "İllegal roller yüksek riskli, planlı ve hikâye odaklı aksiyonlar için tasarlanmıştır.",
        items: [
          "Çete, örgüt ve bağımsız illegal karakter rolleri",
          "Kanıt, takip ve operasyon dengesi",
          "Risk almadan kalıcı kazanç elde edilememe mantığı",
          "Legal ekiplerle karşılıklı rol üretme düzeni",
        ],
        actionText: "Detayları Discord'da Sor",
        actionUrl: "discordUrl",
      },
    },
    {
      type: "Topluluk",
      slug: "ekip-ve-yetkililer",
      icon: "users",
      title: "Ekip ve Yetkililer",
      text: "Yönetim, moderatör, destek ve rehber kadrolarının bulunduğu bölüm.",
      tags: ["Destek", "Ticket"],
      details: {
        title: "Ekip ve Yetkililer",
        intro:
          "Yetkili ekip oyuncu deneyimini takip eder, destek taleplerini yönetir ve sunucu düzenini korur.",
        items: [
          "Kurucu ve yönetim ekibi",
          "Admin, moderator ve support rolleri",
          "Ticket yanıt süreci",
          "Yeni oyuncu rehberliği",
        ],
        actionText: "Yetkililere Ulaş",
        actionUrl: "discordUrl",
      },
    },
    {
      type: "Topluluk",
      slug: "donate",
      icon: "shopping-bag",
      title: "DONATE",
      text: "Sunucu destek paketleri ve bağış seçenekleri için DONATE alanı.",
      tags: ["Donate", "Destek"],
      details: {
        title: "DONATE",
        intro:
          "DONATE bölümü sunucuya destek olmak isteyen oyuncular için hazırlanmıştır. Paket ve bağış detaylarına Discord üzerinden ulaşabilirsin.",
        items: [
          "Destek ve bağış paketlerini incele",
          "Teslimat ve paket detaylarını Discord'dan öğren",
          "Satın alma sonrası destek talebi oluştur",
          "Sunucu katkı seçeneklerini görüntüle",
        ],
        actionText: "DONATE Discord'una Git",
        actionUrl: "donateUrl",
      },
    },
  ],

  application: {
    copy:
      "Sunucu non-whitelist olduğu için oyuna başlamak için Discord'a katılman, kuralları okuman ve bağlantı bilgilerini takip etmen yeterlidir. Departman başvuruları ilgili Discord kanallarından yapılır.",
    steps: ["Discord'a katıl", "Kuralları ve duyuruları oku", "Sunucu bağlantı bilgilerini takip et"],
  },

  rules: [
    {
      label: "Rol Kalitesi",
      title: "Karakter motivasyonu net olsun.",
      text: "Her aksiyonun karakter hikâyesiyle ve şehir mantığıyla uyumlu olması beklenir.",
    },
    {
      label: "Fair Play",
      title: "Oyun dışı bilgi role taşınmaz.",
      text: "Meta, power ve fail RP durumları topluluk deneyimini bozduğu için yaptırıma tabidir.",
    },
    {
      label: "İllegal",
      title: "Risk almadan kazanç olmaz.",
      text: "İllegal roller plan, kanıt, takip ve sonuç zinciriyle oynanır.",
    },
    {
      label: "İletişim",
      title: "Sorunlar ticket ile ilerler.",
      text: "Anlık tartışmalar yerine Discord destek kanallarından kayıtlı ilerleme tercih edilir.",
    },
  ],

  team: [
    { name: "Kurucu Adı", role: "Kurucu", note: "Genel yönetim ve vizyon" },
    { name: "Admin Adı", role: "Head Admin", note: "Yetkili koordinasyonu" },
    { name: "Destek Adı", role: "Support Lead", note: "Ticket ve oyuncu destek" },
    { name: "Developer Adı", role: "Developer", note: "Script ve teknik altyapı" },
  ],
};

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => [...document.querySelectorAll(selector)];

function setText(selector, value) {
  const element = $(selector);
  if (element) element.textContent = value;
}

function setLink(selector, url) {
  const element = $(selector);
  if (element) element.href = url;
}

function getConfigUrl(keyOrUrl) {
  if (!keyOrUrl) return "#";
  return keyOrUrl.split(".").reduce((value, key) => value?.[key], siteConfig) || keyOrUrl;
}

function categoryUrl(item) {
  return `kategori.html?kategori=${encodeURIComponent(item.slug)}`;
}

function renderHighlights() {
  const container = $("[data-highlights]");
  if (!container) return;

  container.innerHTML = siteConfig.highlights
    .map(
      (item) => `
        <article class="stat-card">
          <span>${item.label}</span>
          <strong>${item.value}</strong>
          <p>${item.text}</p>
        </article>
      `,
    )
    .join("");
}

function categoryTemplate(item) {
  return `
    <a class="category-card" id="kategori-${item.slug}" data-type="${item.type}" href="${categoryUrl(item)}">
      <div>
        <div class="card-icon"><i data-lucide="${item.icon}" aria-hidden="true"></i></div>
        <h3>${item.title}</h3>
        <p>${item.text}</p>
      </div>
      <div class="card-meta">
        ${item.tags.map((tag) => `<span class="badge">${tag}</span>`).join("")}
      </div>
    </a>
  `;
}

function renderCategories(activeType = "Tümü") {
  const tabs = $("[data-category-tabs]");
  const grid = $("[data-category-grid]");
  if (!tabs || !grid) return;

  const types = ["Tümü", ...new Set(siteConfig.categories.map((item) => item.type))];
  const categories =
    activeType === "Tümü"
      ? siteConfig.categories
      : siteConfig.categories.filter((item) => item.type === activeType);

  tabs.innerHTML = types
    .map(
      (type) => `
        <button class="tab-button ${type === activeType ? "is-active" : ""}" type="button" data-type="${type}">
          ${type}
        </button>
      `,
    )
    .join("");

  grid.innerHTML = categories.map(categoryTemplate).join("");

  tabs.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", () => {
      renderCategories(button.dataset.type);
    });
  });

  if (window.lucide) window.lucide.createIcons();
}

function renderSidebarCategories() {
  const container = $("[data-sidebar-categories]");
  if (!container) return;

  const currentSlug = new URLSearchParams(window.location.search).get("kategori");

  container.innerHTML = siteConfig.categories
    .map(
      (item) => `
        <a class="side-category-button ${item.slug === currentSlug ? "is-active" : ""}" href="${categoryUrl(item)}">
          <i data-lucide="${item.icon}" aria-hidden="true"></i>
          ${item.title}
        </a>
      `,
    )
    .join("");
}

function renderApplication() {
  const steps = $("[data-application-steps]");
  if (!steps) return;

  setText("[data-application-copy]", siteConfig.application.copy);
  steps.innerHTML = siteConfig.application.steps
    .map((step, index) => `<li><b>${index + 1}</b><span>${step}</span></li>`)
    .join("");
}

function renderRules() {
  const container = $("[data-rules]");
  if (!container) return;

  container.innerHTML = siteConfig.rules
    .map(
      (rule) => `
        <article class="rule-card">
          <span>${rule.label}</span>
          <h3>${rule.title}</h3>
          <p>${rule.text}</p>
        </article>
      `,
    )
    .join("");
}

function renderTeam() {
  const container = $("[data-team]");
  if (!container) return;

  container.innerHTML = siteConfig.team
    .map(
      (person) => `
        <article class="team-card">
          <div class="team-avatar">${person.name.charAt(0)}</div>
          <h3>${person.name}</h3>
          <span>${person.role}</span>
          <p>${person.note}</p>
        </article>
      `,
    )
    .join("");
}

function setLiveText(selector, value) {
  setText(selector, value === undefined || value === null ? "--" : String(value));
}

function renderLiveStatus(data) {
  const fivemPlayers = data?.fivem?.online ? data.fivem.players : "--";
  const discordOnline = data?.discord?.online ? data.discord.onlineMembers : "--";
  const activeStaff = data?.discord?.online ? data.discord.activeStaff : "--";

  setLiveText("[data-fivem-players]", fivemPlayers);
  setLiveText("[data-discord-online]", discordOnline);
  setLiveText("[data-live-fivem]", fivemPlayers);
  setLiveText("[data-live-discord]", discordOnline);
  setLiveText("[data-live-staff]", activeStaff);

  setText(
    "[data-live-fivem-note]",
    data?.fivem?.online
      ? `${data.fivem.maxPlayers || "?"} slot içinden anlık oyuncu sayısı.`
      : data?.fivem?.message || "FiveM API bağlantısı bekleniyor.",
  );
  setText(
    "[data-live-discord-note]",
    data?.discord?.online
      ? "Discord widget üzerinden görünen aktif üye sayısı."
      : data?.discord?.message || "Discord widget bağlantısı bekleniyor.",
  );
  setText(
    "[data-live-staff-note]",
    data?.discord?.online
      ? "Widget üzerinde görünen yetkili ID listesine göre hesaplanır."
      : "Yetkili ID listesi ve Discord widget ayarı bekleniyor.",
  );
}

function fivemStatusUrl() {
  const { fivemCfxCode, fivemEndpoint } = siteConfig.liveStatus;

  if (fivemCfxCode) {
    return `https://servers-frontend.fivem.net/api/servers/single/${encodeURIComponent(fivemCfxCode)}`;
  }

  if (fivemEndpoint) {
    return `http://${fivemEndpoint.replace(/^https?:\/\//, "")}/players.json`;
  }

  return "";
}

async function fetchFiveMStatus() {
  const url = fivemStatusUrl();
  if (!url) {
    return {
      online: false,
      players: 0,
      maxPlayers: siteConfig.liveStatus.fivemMaxPlayers,
      message: "FiveM CFX kodunu app.js içindeki liveStatus alanına yaz.",
    };
  }

  try {
    const response = await fetch(url, { cache: "no-store" });
    if (!response.ok) throw new Error("FiveM verisi alınamadı");

    const data = await response.json();
    if (Array.isArray(data)) {
      return {
        online: true,
        players: data.length,
        maxPlayers: siteConfig.liveStatus.fivemMaxPlayers,
      };
    }

    const serverData = data?.Data || {};
    return {
      online: true,
      players: Number(serverData.clients || 0),
      maxPlayers: Number(serverData.sv_maxclients || siteConfig.liveStatus.fivemMaxPlayers),
    };
  } catch (error) {
    return {
      online: false,
      players: 0,
      maxPlayers: siteConfig.liveStatus.fivemMaxPlayers,
      message: "FiveM verisi alınamadı. CFX kodunu veya CORS durumunu kontrol et.",
    };
  }
}

async function fetchDiscordStatus() {
  const { discordGuildId, staffUserIds } = siteConfig.liveStatus;
  if (!discordGuildId) {
    return {
      online: false,
      onlineMembers: 0,
      activeStaff: 0,
      message: "Discord sunucu ID'sini app.js içindeki liveStatus alanına yaz.",
    };
  }

  try {
    const response = await fetch(
      `https://discord.com/api/guilds/${discordGuildId}/widget.json`,
      { cache: "no-store" },
    );
    if (!response.ok) throw new Error("Discord widget verisi alınamadı");

    const data = await response.json();
    const members = Array.isArray(data.members) ? data.members : [];
    const staffIds = new Set(staffUserIds.map(String));
    const activeStaff = staffIds.size
      ? members.filter((member) => staffIds.has(String(member.id))).length
      : 0;

    return {
      online: true,
      onlineMembers: Number(data.presence_count || members.length || 0),
      activeStaff,
    };
  } catch (error) {
    return {
      online: false,
      onlineMembers: 0,
      activeStaff: 0,
      message: "Discord widget verisi alınamadı. Discord sunucusunda Widget açık olmalı.",
    };
  }
}

async function loadLiveStatus() {
  if (!$("[data-live-fivem]")) return;

  const [fivem, discord] = await Promise.all([fetchFiveMStatus(), fetchDiscordStatus()]);
  renderLiveStatus({ fivem, discord });
}

function renderCategoryDetail() {
  const detailRoot = $("[data-category-detail]");
  if (!detailRoot) return;

  const params = new URLSearchParams(window.location.search);
  const slug = params.get("kategori") || siteConfig.categories[0].slug;
  const category =
    siteConfig.categories.find((item) => item.slug === slug) || siteConfig.categories[0];
  const details = category.details;

  document.title = `${details.title} | ${siteConfig.siteName}`;
  setText("[data-detail-kicker]", category.type);
  setText("[data-detail-title]", details.title);
  setText("[data-detail-copy]", details.intro);
  setText("[data-detail-type]", category.type);
  setText("[data-detail-summary]", category.text);
  setLink("[data-detail-action]", getConfigUrl(details.actionUrl));
  setText("[data-detail-action-text]", details.actionText);

  const icon = $("[data-detail-icon]");
  if (icon) icon.setAttribute("data-lucide", category.icon);

  const tagContainer = $("[data-detail-tags]");
  if (tagContainer) {
    tagContainer.innerHTML = category.tags
      .map((tag) => `<span class="badge">${tag}</span>`)
      .join("");
  }

  const itemContainer = $("[data-detail-items]");
  if (itemContainer) {
    itemContainer.innerHTML = details.items
      .map(
        (item, index) => `
          <li>
            <b>${index + 1}</b>
            <span>${item}</span>
          </li>
        `,
      )
      .join("");
  }

  const actionLinksContainer = $("[data-detail-action-links]");
  if (actionLinksContainer) {
    actionLinksContainer.innerHTML = (details.actionLinks || [])
      .map(
        (link) => `
          <a class="button secondary" href="${getConfigUrl(link.url)}">
            <i data-lucide="${link.icon || "external-link"}" aria-hidden="true"></i>
            ${link.text}
          </a>
        `,
      )
      .join("");

    actionLinksContainer.hidden = !details.actionLinks?.length;
  }

  const relatedContainer = $("[data-related-categories]");
  if (relatedContainer) {
    relatedContainer.innerHTML = siteConfig.categories
      .filter((item) => item.slug !== category.slug)
      .slice(0, 4)
      .map(categoryTemplate)
      .join("");
  }
}

function hydrateStaticContent() {
  if (!$("[data-category-detail]")) document.title = siteConfig.siteName;
  setText("[data-site-name]", siteConfig.siteName);
  setText("[data-site-short]", siteConfig.siteShort);
  setText("[data-footer-name]", siteConfig.siteName);
  setText("[data-hero-kicker]", siteConfig.hero.kicker);
  setText("[data-hero-title]", siteConfig.hero.title);
  setText("[data-hero-copy]", siteConfig.hero.copy);
  setText("[data-server-status]", siteConfig.server.status);
  setText("[data-server-slot]", siteConfig.server.slot);
  setText("[data-server-platform]", siteConfig.server.platform);
  setLink("[data-discord-link]", siteConfig.discordUrl);
  setLink("[data-discord-link-footer]", siteConfig.discordUrl);
}

function bindNavigation() {
  const header = $("[data-header]");
  const nav = $(".nav");
  const sideBar = $(".side-bar");
  const menuButton = $("[data-menu-button]");

  if (menuButton && sideBar) {
    menuButton.addEventListener("click", () => {
      sideBar.classList.toggle("is-open");
    });
  }

  $$(".nav a, .side-link").forEach((link) => {
    link.addEventListener("click", () => {
      if (nav) nav.classList.remove("is-open");
      if (sideBar) sideBar.classList.remove("is-open");
    });
  });

  if (header) {
    window.addEventListener("scroll", () => {
      header.classList.toggle("is-scrolled", window.scrollY > 12);
    });
  }
}

window.addEventListener("DOMContentLoaded", () => {
  hydrateStaticContent();
  renderSidebarCategories();
  renderHighlights();
  renderCategories();
  renderApplication();
  renderRules();
  renderTeam();
  renderCategoryDetail();
  loadLiveStatus();
  window.setInterval(loadLiveStatus, 60000);
  bindNavigation();

  if (window.lucide) window.lucide.createIcons();
});

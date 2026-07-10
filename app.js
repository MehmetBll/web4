// ================================================================
// SİTE ÖZELLEŞTİRME ALANI
// Sunucu adını, linkleri, kategori isimlerini, alt sayfa içeriklerini
// ve bölüm metinlerini bu nesneden değiştirebilirsin.
// ================================================================
const siteConfig = {
  // [DÜZENLE] Ana site bilgileri
  siteName: "Nova Roleplay", // [DÜZENLE] Sunucu / site adı
  siteShort: "N", // [DÜZENLE] Logo kutusunda görünen kısa harf
  discordUrl: "https://discord.gg/GdDaabaHZ", // [DÜZENLE] Discord davet linki
  donateUrl: "https://discord.gg/gVpPHPXHS", // [DÜZENLE] DONATE Discord linki
  applicationChannels: {
    lspd: "https://discord.com/channels/1439035577109446870/1477676061805510707",
    ems: "https://discord.com/channels/1439035577109446870/1450887591548293213",
    lsdoj: "https://discord.com/channels/1439035577109446870/1442879305586573343",
  },
  liveStatus: {
    // [DÜZENLE] FiveM canlı durum için CFX kodu veya sunucu adresi
    // GitHub Pages icin Node.js gerekmez. Bu degerleri doldurman yeterli.
    // CFX kodu ornek: cfx.re/join/abc123 adresindeki "abc123".
    fivemCfxCode: "", // [DÜZENLE] FiveM sunucu CFX kodu
    // CFX kodu yoksa sunucu endpointi yazabilirsin: "127.0.0.1:30120".
    // Not: Direkt IP endpointlerinde tarayici CORS engeli olabilir; CFX kodu daha sagliklidir.
    fivemEndpoint: "", // [DÜZENLE] FiveM endpoint (varsa)
    fivemMaxPlayers: 128, // [DÜZENLE] Sunucu maksimum slot sayısı
    discordGuildId: "1439035577109446870", // [DÜZENLE] Discord sunucu ID
    // [DÜZENLE] Aktif yetkili sayimi icin yetkili Discord kullanici ID'lerini buraya ekle.
    staffUserIds: [
      "680429618532188273",
      "319867578686111744",
      "689766089567109158",
      

    ],
  },

  hero: {
    // [DÜZENLE] Ana sayfa başlık metinleri
    kicker: "Non-Whitelist Roleplay Sunucusu", // [DÜZENLE] Üst başlık metni
    title: "Nova Roleplay", // [DÜZENLE] Ana başlık
    copy:
      "Hikâye odaklı ekonomi, meslek, illegal ve sosyal rol kategorileriyle dengeli bir RP deneyimi.", // [DÜZENLE] Hero açıklaması
  },

  server: {
    // [DÜZENLE] Sunucu üst bilgi kutusu metinleri
    status: "Aktif", // [DÜZENLE] Sunucu durumu
    slot: "--", // [DÜZENLE] Slot veya oyuncu değeri
    platform: "FiveM", // [DÜZENLE] Platform adı
  },

  // [DÜZENLE] Ana sayfa üst istatistik kartları
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

  // [DÜZENLE] Kategori listesi ve detay sayfası içerikleri
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
        // [DÜZENLE] Donate bölümündeki ana kartlar ve alt araç kartları
        subcategories: [
          {
            title: "Super Car",
            image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1200&q=80",
            text: "Lüks ve yüksek performanslı araç paketleriyle öne çıkan seçenekler.",
            icon: "car-front",
            accent: "#ff7b54",
            tags: ["VIP", "Premium"],
            items: [
              {
                title: "Lamborghini Aventador",
                image: "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=900&q=80",
                text: "Yüksek performans ve dikkat çekici tasarım.",
                icon: "car-front",
                accent: "#ff7b54",
                tags: ["VIP"],
              },
              {
                title: "Ferrari Roma",
                image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=900&q=80",
                text: "Şık ve güçlü spor otomobil deneyimi.",
                icon: "car",
                accent: "#ff5a66",
                tags: ["Spor"],
              },
            ],
          },
          {
            title: "Sport Car",
            image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80",
            text: "Sürüş hissi odaklı spor modeller ve premium erişim paketleri.",
            icon: "car",
            accent: "#ff5a66",
            tags: ["Spor", "Hız"],
            items: [
              {
                title: "BMW M4",
                image: "https://images.unsplash.com/photo-1553440569-bcc63803a83d?auto=format&fit=crop&w=900&q=80",
                text: "Sürüş stabilitesi ve agresif dinamikler.",
                icon: "car",
                accent: "#ff5a66",
                tags: ["Spor"],
              },
              {
                title: "Porsche 911",
                image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=900&q=80",
                text: "Klasik spor otomobil hissi ve güçlü performans.",
                icon: "car",
                accent: "#4f8cff",
                tags: ["Spor"],
              },
            ],
          },
          {
            title: "Offroad Car",
            image: "https://images.unsplash.com/photo-1579097648137-4b19188fdb4e?q=80&w=1200&auto=format&fit=crop",
            text: "Arazi ve sert zemin deneyimi için dayanıklı araç seçenekleri.",
            icon: "truck",
            accent: "#8e6b3d",
            tags: ["Arazi", "Dayanıklı"],
            items: [
              {
                title: "Jeep Wrangler",
                image: "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&w=900&q=80",
                text: "Zorlu arazilerde kontrol ve güven.",
                icon: "truck",
                accent: "#8e6b3d",
                tags: ["Arazi"],
              },
              {
                title: "Land Rover Defender",
                image: "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=900&q=80",
                text: "Dayanıklı ve rahat arazi deneyimi.",
                icon: "truck",
                accent: "#6b7280",
                tags: ["Offroad"],
              },
            ],
          },
          {
            title: "JDM Car",
            image: "https://images.unsplash.com/photo-1553440569-bcc63803a83d?auto=format&fit=crop&w=1200&q=80",
            text: "JDM kültürünü yansıtan ikonik ve özel araç paketleri.",
            icon: "car",
            accent: "#4f8cff",
            tags: ["JDM", "Koleksiyon"],
            items: [
              {
                title: "Nissan Skyline",
                image: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=900&q=80",
                text: "Klasik JDM hissi ve güçlü performans.",
                icon: "car",
                accent: "#4f8cff",
                tags: ["JDM"],
              },
              {
                title: "Toyota Supra",
                image: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?auto=format&fit=crop&w=900&q=80",
                text: "Ikonik JDM motora sahip premium model.",
                icon: "car",
                accent: "#8b5cf6",
                tags: ["JDM"],
              },
            ],
          },
          {
            title: "Donate Motor",
            image: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=1200&q=80",
            text: "Motor tutkunları için hızlı ve dikkat çekici paket seçenekleri.",
            icon: "bike",
            accent: "#ef8f3b",
            tags: ["Motor", "Hız"],
            items: [
              {
                title: "Ducati Panigale",
                image: "https://images.unsplash.com/photo-1511994298241-608e28f14fde?auto=format&fit=crop&w=900&q=80",
                text: "Yüksek performanslı spor motor deneyimi.",
                icon: "bike",
                accent: "#ef8f3b",
                tags: ["Motor"],
              },
              {
                title: "Harley-Davidson",
                image: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=900&q=80",
                text: "Klasik ve güçlü uzun yol motoru.",
                icon: "bike",
                accent: "#ff2e4d",
                tags: ["Motor"],
              },
            ],
          },
          {
            title: "Legal İşletme",
            image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
            text: "Yasal ve sürdürülebilir işletme modelleri için destek paketi.",
            icon: "building-2",
            accent: "#4ecdc4",
            tags: ["Legal", "İşletme"],
            items: [
              {
                title: "İşletme Paketi",
                image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=80",
                text: "Profesyonel işletme kurulum desteği.",
                icon: "building-2",
                accent: "#4ecdc4",
                tags: ["Legal"],
              },
              {
                title: "Ticaret Standı",
                image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=900&q=80",
                text: "Gelişmiş satış ve gelir sistemi.",
                icon: "store",
                accent: "#10b981",
                tags: ["İşletme"],
              },
            ],
          },
          {
            title: "İllegal Meslek",
            image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1200&q=80",
            text: "Risk ve gizlilik odaklı meslek paketleri için özel seçenekler.",
            icon: "briefcase-business",
            accent: "#8b5cf6",
            tags: ["İllegal", "Meslek"],
            items: [
              {
                title: "Operasyon Paketi",
                image: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=900&q=80",
                text: "Özel operasyon ve gizlilik araçları.",
                icon: "briefcase-business",
                accent: "#8b5cf6",
                tags: ["İllegal"],
              },
              {
                title: "Meslek Ekipmanı",
                image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=900&q=80",
                text: "İş birlikleri ve gizli operasyona destek.",
                icon: "briefcase-business",
                accent: "#6d28d9",
                tags: ["Meslek"],
              },
            ],
          },
          {
            title: "Bağış Paketi",
            image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1200&q=80",
            text: "Temel destek ve bonus içerikleri barındıran başlangıç paketleri.",
            icon: "gift",
            accent: "#ff2e4d",
            tags: ["Paket", "Bonus"],
            items: [
              {
                title: "Başlangıç Paketi",
                image: "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=900&q=80",
                text: "Uygun fiyatlı destek ve bonus içerikleri.",
                icon: "gift",
                accent: "#ff2e4d",
                tags: ["Paket"],
              },
              {
                title: "Premium Bonus",
                image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=900&q=80",
                text: "Üst seviye bonus ve erişim avantajları.",
                icon: "gift",
                accent: "#ef4444",
                tags: ["Bonus"],
              },
            ],
          },
        ],
        actionText: "DONATE Discord'una Git",
        actionUrl: "donateUrl",
      },
    },
  ],

  // [DÜZENLE] Katılım bölümü metinleri
  application: {
    copy:
      "Sunucu non-whitelist olduğu için oyuna başlamak için Discord'a katılman, kuralları okuman ve bağlantı bilgilerini takip etmen yeterlidir. Departman başvuruları ilgili Discord kanallarından yapılır.",
    steps: ["Discord'a katıl", "Kuralları ve duyuruları oku", "Sunucu bağlantı bilgilerini takip et"],
  },

  // [DÜZENLE] Kurallar bölümünün kart içerikleri
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

  // [DÜZENLE] Ekip bölümündeki kişi kartları
  team: [
    { name: "Kurucu Adı", role: "Kurucu", note: "Genel yönetim ve vizyon" },
    { name: "Admin Adı", role: "Head Admin", note: "Yetkili koordinasyonu" },
    { name: "Destek Adı", role: "Support Lead", note: "Ticket ve oyuncu destek" },
    { name: "Developer Adı", role: "Developer", note: "Script ve teknik altyapı" },
  ],
};

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => [...document.querySelectorAll(selector)];
const ADMIN_SECRET = "nova2026"; // [DÜZENLE] Donate kart ekleme için gizli admin anahtarı
const DONATE_STORAGE_KEY = "nova-donate-subcategories"; // [DÜZENLE] Kaydedilen donate kartlarının localStorage anahtarı

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

function getStoredDonateSubcategories(defaultItems = []) {
  try {
    const stored = window.localStorage.getItem(DONATE_STORAGE_KEY);
    if (!stored) return defaultItems;
    const parsed = JSON.parse(stored);
    return Array.isArray(parsed) ? parsed : defaultItems;
  } catch {
    return defaultItems;
  }
}

function saveStoredDonateSubcategories(items) {
  try {
    window.localStorage.setItem(DONATE_STORAGE_KEY, JSON.stringify(items));
  } catch {
    // localStorage kullanılamıyorsa sessizce devam et
  }
}

function isAdminMode() {
  return new URLSearchParams(window.location.search).get("admin") === ADMIN_SECRET;
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
  const details = {
    ...category.details,
    subcategories: getStoredDonateSubcategories(category.details.subcategories || []),
  };

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

  const galleryBlock = $("[data-detail-gallery-block]");
  const galleryContainer = $("[data-detail-gallery]");
  const detailPanel = $("[data-detail-panel]");
  if (galleryBlock && galleryContainer) {
    const subcategories = details.subcategories || [];
    galleryContainer.innerHTML = subcategories
      .map((item, index) => `
        <button class="detail-gallery-card detail-gallery-card--parent" type="button" style="--card-accent: ${item.accent || "var(--accent)"};" data-gallery-toggle="${index}" aria-expanded="false">
          ${item.image ? `<img class="detail-gallery-image detail-gallery-image--parent" src="${item.image}" alt="${item.title}" loading="lazy" />` : `<div class="card-icon"><i data-lucide="${item.icon || "sparkles"}" aria-hidden="true"></i></div>`}
          <div class="detail-gallery-body">
            <h3>${item.title}</h3>
            <p>${item.text}</p>
            <div class="card-meta">
              ${(item.tags || []).map((tag) => `<span class="badge">${tag}</span>`).join("")}
            </div>
          </div>
          <div class="detail-gallery-footer">
            <span class="detail-gallery-pill">${(item.items || []).length} araç</span>
            <span class="detail-gallery-pill detail-gallery-pill--muted">Detaya git</span>
          </div>
        </button>
      `)
      .join("");

    galleryContainer.querySelectorAll("[data-gallery-toggle]").forEach((button) => {
      button.addEventListener("click", () => {
        const targetIndex = Number(button.getAttribute("data-gallery-toggle"));
        const selectedItem = subcategories[targetIndex];
        if (!selectedItem || !detailPanel) return;

        detailPanel.hidden = false;
        detailPanel.innerHTML = `
          <div class="detail-panel-header">
            <div class="detail-panel-title">
              <h3>${selectedItem.title}</h3>
              <p>${selectedItem.text}</p>
            </div>
            <button class="detail-panel-close" type="button" data-panel-close>Kapat</button>
          </div>
          <div class="detail-panel-grid">
            ${(selectedItem.items || [])
              .map(
                (child) => `
                  <article class="detail-panel-card">
                    ${child.image ? `<img src="${child.image}" alt="${child.title}" loading="lazy" />` : ""}
                    <h4>${child.title}</h4>
                    <p>${child.text}</p>
                    <div class="card-meta">
                      ${(child.tags || []).map((tag) => `<span class="badge">${tag}</span>`).join("")}
                    </div>
                  </article>
                `,
              )
              .join("")}
          </div>
        `;

        const closeButton = detailPanel.querySelector("[data-panel-close]");
        if (closeButton) {
          closeButton.addEventListener("click", () => {
            detailPanel.hidden = true;
            detailPanel.innerHTML = "";
          });
        }
      });
    });

    galleryBlock.hidden = !subcategories.length;
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

  const adminPanel = $("[data-admin-panel]");
  if (adminPanel) {
    adminPanel.hidden = !(category.slug === "donate" && isAdminMode());
  }

  const relatedContainer = $("[data-related-categories]");
  if (relatedContainer) {
    relatedContainer.innerHTML = siteConfig.categories
      .filter((item) => item.slug !== category.slug)
      .slice(0, 4)
      .map(categoryTemplate)
      .join("");
  }

  if (window.lucide) window.lucide.createIcons();
}

function bindDonateAdminForm() {
  const form = $("[data-donate-admin-form]");
  const status = $("[data-admin-status]");
  if (!form || form.dataset.bound === "true") return;

  form.dataset.bound = "true";
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const title = form.querySelector("[name='card-title']").value.trim();
    const image = form.querySelector("[name='card-image']").value.trim();
    const text = form.querySelector("[name='card-text']").value.trim();
    const icon = form.querySelector("[name='card-icon']").value.trim() || "sparkles";
    const accent = form.querySelector("[name='card-accent']").value || "#ff5a66";
    const tags = form.querySelector("[name='card-tags']")
      .value.split(",")
      .map((tag) => tag.trim())
      .filter(Boolean);

    if (!title || !text) {
      if (status) status.textContent = "Başlık ve açıklama zorunludur.";
      return;
    }

    const newCard = { title, image, text, icon, accent, tags };
    const currentCards = getStoredDonateSubcategories(siteConfig.categories.find((item) => item.slug === "donate")?.details?.subcategories || []);
    currentCards.push(newCard);
    saveStoredDonateSubcategories(currentCards);
    form.reset();
    form.querySelector("[name='card-accent']").value = "#ff5a66";

    if (status) status.textContent = "Kart eklendi. Sayfa yenilendiğinde görünecek.";
    renderCategoryDetail();
  });
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
  bindDonateAdminForm();
  loadLiveStatus();
  window.setInterval(loadLiveStatus, 60000);
  bindNavigation();

  if (window.lucide) window.lucide.createIcons();
});

// =====================================================
//  Datos de proyectos — edita aquí para agregar o cambiar
// =====================================================
const GH = "https://github.com/sowiexsker894/";

const featured = [
  {
    name: "Glosscanner",
    badge: { es: "Fundadora · En producción", en: "Founder · Live" },
    desc: {
      es: "Metabuscador de productos y servicios de belleza: compara opciones en un solo lugar. Incluye un panel de administración hecho en Next.js y React.",
      en: "Beauty products & services metasearch engine that compares options in one place. Includes an admin dashboard built with Next.js and React.",
    },
    tags: ["TypeScript", "Next.js", "React"],
    live: "https://www.glosscanner.com",
    repo: GH + "Glosscanner_admin",
    repoLabel: { es: "Repo del admin", en: "Admin repo" },
    image: "./glosscannerdev.png?v=20261119",
    gradient: "linear-gradient(135deg, #ff5ca8, #ff9a5c)",
  },
  {
    name: "Nicostanza",
    badge: { es: "En producción", en: "Live" },
    desc: {
      es: "Blog y plataforma de escritura bilingüe para compartir ensayos y contenido de reflexión, con dominio propio.",
      en: "Bilingual writing platform and blog for essays and long-form content, on its own domain.",
    },
    tags: ["TypeScript", "Web app", "Content"],
    live: "https://nico-stanza.com",
    repo: null,
    image: "./nicostanzadev.png?v=20261119",
    gradient: "linear-gradient(135deg, #7c5cff, #5cc8ff)",
  },
  {
    name: "SaludLink",
    badge: { es: "Full stack", en: "Full stack" },
    desc: {
      es: "SPA para gestionar citas médicas. Frontend en Angular 21 + Angular Material que consume una API REST en Java con autenticación JWT.",
      en: "Medical appointment SPA. Angular 21 + Angular Material frontend consuming a Java REST API with JWT authentication.",
    },
    tags: ["Angular", "TypeScript", "Java", "JWT"],
    live: "https://saludlink-frontend.vercel.app",
    repo: GH + "saludlink-front-ofi",
    image: "./saludlinkdev.png?v=20261119",
    gradient: "linear-gradient(135deg, #22c39a, #3b82f6)",
  },
  {
    name: "Quantum Rush",
    badge: { es: "Videojuego educativo", en: "Educational game" },
    desc: {
      es: "Videojuego web donde acompañas al robot NOVA a resolver emergencias aprendiendo estadística, machine learning y computación cuántica.",
      en: "Web game where you help the robot NOVA solve emergencies while learning statistics, machine learning and quantum computing.",
    },
    tags: ["JavaScript", "Python", "Game"],
    live: "https://quantum-rush-ten.vercel.app",
    repo: GH + "Quantum-Rush",
    image: "./quantumdev.png?v=20261119",
    gradient: "linear-gradient(135deg, #1e1b4b, #7c5cff)",
  },
];

const others = [
  {
    name: "Poethsphere 2.0",
    cat: "web",
    desc: { es: "App para publicar y leer poemas de todo el mundo.", en: "App to publish and read poems from around the world." },
    tags: ["TypeScript"],
    repo: null,
  },
  {
    name: "Aldimi Assist IA",
    cat: "ai",
    desc: {
      es: "Asistente con IA que automatiza la captura de datos no estructurados (documentos y lenguaje natural).",
      en: "AI assistant that automates capture of unstructured data (documents and natural language).",
    },
    tags: ["Python", "NLP"],
    repo: GH + "aldimi-assist-ia",
  },
  {
    name: "Chest X-Ray Classification",
    cat: "ai",
    desc: { es: "Deep learning para detectar neumonía en radiografías de tórax.", en: "Deep learning to detect pneumonia in chest X-rays." },
    tags: ["Python", "Deep Learning"],
    repo: GH + "deep-learning-chest-xray-classification",
  },
  {
    name: "Outfits desde el conectoma",
    cat: "ai",
    desc: {
      es: "Transfer learning desde el conectoma del Giant Fiber System para predecir compatibilidad de outfits.",
      en: "Transfer learning from the Giant Fiber System connectome to predict outfit compatibility.",
    },
    tags: ["Python", "ML"],
    repo: GH + "Predicci-n-de-compatibilidad-de-outfits-desde-el-conectoma-del-Giant-Fiber-System",
  },
  {
    name: "K-Means concurrente en Go",
    cat: "data",
    desc: {
      es: "Zonificación de riesgo de accidentes de tránsito con K-Means paralelo en Go.",
      en: "Traffic-accident risk zoning with parallel K-Means in Go.",
    },
    tags: ["Go", "Concurrencia"],
    repo: GH + "Zonificaci-n-y-riesgos-de-accidentes-de-transito-Kmeans-",
  },
];

const categories = [
  { id: "all", es: "Todos", en: "All" },
  { id: "web", es: "Web", en: "Web" },
  { id: "ai", es: "IA / ML", en: "AI / ML" },
  { id: "data", es: "Datos", en: "Data" },
];

// =====================================================
//  Traducciones de textos fijos
// =====================================================
const i18n = {
  en: {
    skip: "Skip to content",
    "nav.projects": "Projects", "nav.stack": "Stack", "nav.about": "About", "nav.contact": "Contact",
    "hero.eyebrow": "Hi, I'm",
    "hero.subtitle": "Computer Science student at UPC. I build real web products with TypeScript, React, Next.js and Angular — and add data and AI when they make the difference.",
    "hero.cta": "View projects",
    "hero.stat1": "products in production", "hero.stat2": "repositories", "hero.stat3": "English",
    "projects.title": "Featured projects", "projects.more": "More projects",
    "stack.front": "Frontend", "stack.back": "Backend & data", "stack.tools": "Tools",
    "about.title": "About me",
    "about.p1": "I study Computer Science at UPC (Lima) and did an exchange semester at SRH University Heidelberg, Germany. I'm the founder of Glosscanner, a beauty services and products metasearch engine that is already live.",
    "about.p2": "I like taking a product from idea to deploy: designing the interface, connecting it to APIs and polishing the details that make a site feel fast and clear. My background in data analysis and machine learning helps me build data-driven interfaces.",
    "about.f1": "Computer Science · UPC", "about.f2": "Exchange · SRH Heidelberg", "about.f3": "Founder of Glosscanner",
    "about.f4": "Native Spanish · C1 English", "about.f5": "Bilingual writer at Nicostanza",
    "contact.title": "Let's talk",
    "contact.text": "I'm looking for my next role as a Frontend Developer. If you have an opening or a project, reach out.",
    "contact.copy": "Copy email",
    footer: "Handmade with HTML, CSS and JavaScript",
  },
  es: {}, // se llena automáticamente con el texto original del HTML
};

const ui = {
  es: { live: "Ver en vivo", code: "Código", private: "Código privado", copied: "¡Email copiado!", lang: "EN" },
  en: { live: "Live site", code: "Code", private: "Private code", copied: "Email copied!", lang: "ES" },
};

// =====================================================
//  Render
// =====================================================
let lang = "es";
let currentFilter = "all";
try { lang = localStorage.getItem("lang") || "es"; } catch (e) {}

const $ = (s) => document.querySelector(s);
const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const arrow = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M7 17 17 7M8 7h9v9"/></svg>';
const ghIcon = '<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.7-1.6-2.7-.3-5.5-1.3-5.5-6 0-1.2.5-2.3 1.2-3.1-.1-.4-.5-1.6.1-3.2 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0C17.3 4.7 18.3 5 18.3 5c.7 1.6.2 2.8.1 3.2.8.8 1.2 1.9 1.2 3.1 0 4.7-2.8 5.7-5.5 6 .4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A12 12 0 0 0 12 .5z"/></svg>';
const lockIcon = '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="4" y="11" width="16" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/></svg>';

function tagsHTML(tags) {
  return `<ul class="tags">${tags.map((t) => `<li>${esc(t)}</li>`).join("")}</ul>`;
}

function renderFeatured() {
  const t = ui[lang];
  $("#featuredGrid").innerHTML = featured
    .map((p) => {
      const preview = p.image
        ? `<img src="${esc(p.image)}" alt="Captura de ${esc(p.name)}" loading="lazy" />`
        : `<span class="fcard__initial" aria-hidden="true">${esc(p.name.slice(0, 2))}</span>`;
      const repo = p.repo
        ? `<a class="link-pill" href="${esc(p.repo)}" target="_blank" rel="noopener">${ghIcon} ${esc(p.repoLabel ? p.repoLabel[lang] : t.code)}</a>`
        : `<span class="link-pill link-pill--muted">${lockIcon} ${t.private}</span>`;
      return `
        <article class="fcard reveal">
          <a class="fcard__preview" href="${esc(p.live)}" target="_blank" rel="noopener" style="--g:${p.gradient}" aria-label="${esc(p.name)} — ${t.live}">
            ${preview}
            <span class="fcard__badge">${esc(p.badge[lang])}</span>
          </a>
          <div class="fcard__body">
            <h3 class="fcard__title">${esc(p.name)}</h3>
            <p class="fcard__desc">${esc(p.desc[lang])}</p>
            ${tagsHTML(p.tags)}
            <div class="fcard__links">
              <a class="link-pill" href="${esc(p.live)}" target="_blank" rel="noopener">${t.live} ${arrow}</a>
              ${repo}
            </div>
          </div>
        </article>`;
    })
    .join("");
}

function renderFilters() {
  $("#filters").innerHTML = categories
    .map((c) => `<button class="filter${c.id === currentFilter ? " active" : ""}" data-filter="${c.id}" aria-pressed="${c.id === currentFilter}">${c[lang]}</button>`)
    .join("");
}

function renderOthers() {
  const t = ui[lang];
  $("#otherGrid").innerHTML = others
    .map((p) => {
      const link = p.repo
        ? `<a href="${esc(p.repo)}" target="_blank" rel="noopener" aria-label="${t.code}: ${esc(p.name)}">${ghIcon}</a>`
        : `<span title="${t.private}">${lockIcon}</span>`;
      const hidden = currentFilter !== "all" && p.cat !== currentFilter ? " hidden" : "";
      return `
        <article class="card reveal visible"${hidden}>
          <div class="card__top"><span class="mono">&lt;/&gt;</span>${link}</div>
          <h4 class="card__title">${esc(p.name)}</h4>
          <p class="card__desc">${esc(p.desc[lang])}</p>
          ${tagsHTML(p.tags)}
        </article>`;
    })
    .join("");
}

function applyStaticTranslations() {
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.dataset.i18n;
    if (!(key in i18n.es)) i18n.es[key] = el.textContent.trim(); // guarda el original en español
    el.textContent = i18n[lang][key] ?? i18n.es[key];
  });
  document.documentElement.lang = lang;
  $("#langToggle").textContent = ui[lang].lang;
  $("#langToggle").setAttribute("aria-label", lang === "es" ? "Switch to English" : "Cambiar a español");
}

function renderAll() {
  applyStaticTranslations();
  renderFeatured();
  renderFilters();
  renderOthers();
  observeReveals();
}

// =====================================================
//  Interacciones
// =====================================================
$("#filters").addEventListener("click", (e) => {
  const btn = e.target.closest(".filter");
  if (!btn) return;
  currentFilter = btn.dataset.filter;
  renderFilters();
  renderOthers();
});

$("#langToggle").addEventListener("click", () => {
  lang = lang === "es" ? "en" : "es";
  try { localStorage.setItem("lang", lang); } catch (e) {}
  renderAll();
});

$("#themeToggle").addEventListener("click", () => {
  const root = document.documentElement;
  const isLight = root.dataset.theme
    ? root.dataset.theme === "light"
    : window.matchMedia("(prefers-color-scheme: light)").matches;
  root.dataset.theme = isLight ? "dark" : "light";
  try { localStorage.setItem("theme", root.dataset.theme); } catch (e) {}
});

function toast(msg) {
  const el = $("#toast");
  el.textContent = msg;
  el.classList.add("show");
  setTimeout(() => el.classList.remove("show"), 2000);
}

$("#copyEmail").addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText("sihuinchamireya@gmail.com");
    toast(ui[lang].copied);
  } catch (e) {
    window.location.href = "mailto:sihuinchamireya@gmail.com";
  }
});

window.addEventListener("scroll", () => {
  $("#nav").classList.toggle("scrolled", window.scrollY > 10);
}, { passive: true });

let io;
function observeReveals() {
  if (!("IntersectionObserver" in window)) {
    document.querySelectorAll(".reveal").forEach((el) => el.classList.add("visible"));
    return;
  }
  io?.disconnect();
  io = new IntersectionObserver((entries) => {
    entries.forEach((en) => {
      if (en.isIntersecting) { en.target.classList.add("visible"); io.unobserve(en.target); }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll(".reveal:not(.visible)").forEach((el) => io.observe(el));
}

$("#year").textContent = new Date().getFullYear();
renderAll();

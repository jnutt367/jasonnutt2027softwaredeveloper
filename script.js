/* ============================================================
   SITE CONFIG — edit this one object to personalize the site.
   Every unknown is marked TODO:. Components below read from
   here, so you never have to hunt through the markup.
   ============================================================ */
const SITE = {
  // ---- Identity ----
  name: "Jason Nutt", // TODO: confirm spelling
  photo: "images/jason.jpg", // polished headshot
  photoPixar: "images/jason-pixar.jpg", // Pixar-style portrait

  // ---- Contact & links (replace every TODO: with your real URL) ----
  email: "jnutt367@gmail.com",
  githubUrl: "https://github.com/jnutt367",
  youtubeUrl: "https://www.youtube.com/channel/UC1ryMv3ldYCOgshChVrqZNQ",
  facebookUrl: "https://www.facebook.com/DiscipleofChristJasonNutt",
  patreonUrl: "TODO: your Patreon URL",
  buyMeACoffeeUrl: "https://buymeacoffee.com/jnutt367m", // confirmed
  truvineAppUrl: "https://jesus-love-revealed.vercel.app/", // live — formerly "Jesus Love Revealed"

  // ---- Channel stats (TODO: fill in when ready) ----
  subscriberCount: "647",
  videoCount: "343",

  // ---- Hero ----
  heroEyebrow: "Jason Nutt — Software Developer & Creator",
  heroTitleLead: "I build for the web.",
  heroTitleAccent: "I create for the Kingdom.",
  heroSub:
    "Software developer by craft, founder of TruVINE by calling — a faith-based community helping believers abide in Christ.",
  heroPrimaryCta: { label: "View my work", href: "#projects" },
  heroSecondaryCta: { label: "Watch TruVINE", href: "YOUTUBE" }, // "YOUTUBE" = SITE.youtubeUrl
  heroWhisper: "\u201cAbide in me\u2026\u201d — John 15:5",

  // ---- About ----
  aboutParagraphs: [
    "By day, I'm a Tier 1 customer service representative at Federal Student Aid, where I help borrowers understand their federal student loans — patience and clarity are the whole job. But building is my craft: I'm a software developer working with JavaScript, React, and Next.js, and I care about clean code, honest work, and software that actually serves people.",
    "Outside of work I founded TruVINE — my YouTube channel, formerly called \u201cJesus Love Revealed\u201d — a faith-based community that is an extension of my faith in Jesus. Through Scripture Shorts, chapter-by-chapter readings, and my own testimony, I get to encourage believers to abide in Christ. Code by craft, faith by calling — that's the whole story.",
  ],

  // ---- Skills (edit freely — add/remove cards here) ----
  skillsSub: "The tools I reach for every day.",
  skills: [
    { name: "JavaScript", blurb: "Modern ES6+ — the language I think in." },
    { name: "React", blurb: "Component-driven UI, hooks, state done right." },
    { name: "Next.js", blurb: "App Router, SSR, and full-stack React." },
    { name: "HTML5 & CSS3", blurb: "Semantic markup, responsive layouts." },
    { name: "Tailwind CSS", blurb: "Utility-first styling, design systems." },
    { name: "Node.js", blurb: "APIs and server-side JavaScript." },
  ],

  // ---- Projects ----
  projectsSub: "A few things I've built or am building.",
  projects: [
    {
      title: "TruVine App",
      desc: "A community and demo app for the TruVINE audience — formerly “Jesus Love Revealed,” now live — with Testimonials, Trivia, and a Timeline of the journey. Built to serve the people I create for.",
      tags: ["React", "Next.js"],
      linkLabel: "View demo",
      linkUrl: "TRUVINE_APP", // "TRUVINE_APP" = SITE.truvineAppUrl
    },
    {
      title: "This Portfolio",
      desc: "Designed and built from scratch in two flavors — Next.js + Tailwind and plain HTML/CSS/JS — to prove the stack, not just list it.",
      tags: ["Next.js", "Tailwind CSS", "JavaScript"],
      linkLabel: null, // you're looking at it
      linkUrl: null,
    },
    {
      title: "Word of God Risen",
      desc: "A faith-focused web app centered on the Word of God — live and growing.",
      tags: ["Web App", "Faith"],
      linkLabel: "Visit site",
      linkUrl: "https://wordofgod.vercel.app/",
    },
    {
      title: "Abide — Daily Rhythm Tracker",
      desc: "Daily rhythm tracker with streaks, week charts, and a verse of the day. Currently in the works — being built twice: Next.js + vanilla JS.",
      tags: ["Next.js", "React", "JavaScript"],
      linkLabel: "In progress",
      linkUrl: null,
    },
  ],

  // ---- TruVINE (creator section) ----
  truvineMission:
    "TruVINE — my YouTube channel, formerly called \u201cJesus Love Revealed\u201d — exists to help believers abide in Christ: one verse, one honest conversation at a time.",
  series: [
    { name: "Scripture Shorts", note: "60-second encouragement" },
    { name: "Revelation: Chapter by Chapter", note: "read-along series" },
    { name: "Scripture with Gavin", note: "collab series" },
    { name: "Abide in Christ", note: "John 15 series" },
    { name: "TruVINE Farm Family Parables", note: "watch now" },
    { name: "My Testimony", note: "my story" },
  ],

  // ---- TruVINE Farm Family Parables (published Shorts) ----
  farmParablesEyebrow: "Watch now",
  farmParablesTitle: "TruVINE Farm Family Parables",
  farmParablesSub:
    "Pixar-style farm devotionals with Grandpa Teddy — already out in the field.",
  farmParables: [
    {
      title: "Come to Me, All Who Are Weary",
      verse: "Matthew 11:28",
      url: "https://youtube.com/shorts/rXmTfq_cpnw",
      img: "https://i.ytimg.com/vi/rXmTfq_cpnw/hqdefault.jpg",
      blurb:
        "For the weary and burdened — He promises to walk beside us and renew our strength.",
    },
    {
      title: "Trust the Lord for the Harvest",
      verse: "Hosea 10:12",
      url: "https://youtube.com/shorts/eli8bGWBZ9c",
      img: "https://i.ytimg.com/vi/eli8bGWBZ9c/hqdefault.jpg",
      blurb:
        "Sow righteousness, reap righteousness — what you plant in a day matters.",
    },
    {
      title: "God Will Give You Rest",
      verse: "Matthew 11:28",
      url: "https://youtube.com/shorts/kIzxE55YYbE",
      img: "https://i.ytimg.com/vi/kIzxE55YYbE/hqdefault.jpg",
      blurb:
        "Lay your burdens down — He's not ashamed of your tears or your exhaustion.",
    },
  ],

  // ---- Story (testimony — brief & dignified; delete section if preferred) ----
  storyLines: [
    "Eight years sober by the grace of God. Alcohol once owned my life — Jesus set me free, and He never let go.",
    "If He did it for me, He can do it for you. Don't give up.",
  ],
  storyVerse: "\u201cIf the Son sets you free, you will be free indeed.\u201d — John 8:36",

  // ---- Contact ----
  contactTitle: "Let's talk.",
  contactSub:
    "A project, a collaboration, or just a conversation about faith and code — my inbox is open.",
  contactCtaLabel: "Send me an email",

  // ---- Footer ----
  footerVerse: "Abide in Him. — John 15:5",
};

/* ============================================================
   Below this line: rendering logic. You shouldn't need to
   edit anything down here — just the SITE object above.
   ============================================================ */

const $ = (sel) => document.querySelector(sel);
const isTodo = (v) => typeof v === "string" && /TODO/i.test(v);
const esc = (s) =>
  String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

// Resolve shorthand link keys ("YOUTUBE", "TRUVINE_APP") to real config URLs.
function resolveUrl(ref) {
  if (ref === "YOUTUBE") return SITE.youtubeUrl;
  if (ref === "TRUVINE_APP") return SITE.truvineAppUrl;
  return ref;
}

/* ---------- Inline SVG icons (no emoji) ---------- */
const svgOpen = (filled) =>
  `<svg viewBox="0 0 24 24" aria-hidden="true" ${filled ? 'fill="currentColor"' : 'fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"'}>`;
const ICONS = {
  youtube: svgOpen(true) + '<rect x="2" y="5" width="20" height="14" rx="4"/><polygon points="10,9.5 15.5,12 10,14.5" fill="#0c1f16"/></svg>',
  facebook: svgOpen(true) + '<path d="M13.5 21v-7h2.4l.4-3h-2.8V9.1c0-.9.3-1.5 1.6-1.5h1.3V4.9c-.3 0-1.2-.1-2.2-.1-2.2 0-3.7 1.3-3.7 3.8V11H8v3h2.5v7h3z"/></svg>',
  github: svgOpen(true) + '<path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>',
  patreon: svgOpen(true) + '<circle cx="7.5" cy="12" r="4"/><rect x="13.5" y="4" width="3.5" height="16"/></svg>',
  coffee: svgOpen(false) + '<path d="M17 9h1a3 3 0 0 1 0 6h-1"/><path d="M3 9h14v5a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9z"/><path d="M7 2v2M11 2v2M15 2v2"/></svg>',
  mail: svgOpen(false) + '<rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 6L2 7"/></svg>',
  arrow: svgOpen(false) + '<path d="M5 12h14M13 6l6 6-6 6"/></svg>',
};

/* ---------- Small builders ---------- */
// A link chip; TODO urls render visibly dashed so he remembers to fill them in.
function chip(label, url, icon) {
  const todo = isTodo(url);
  const href = todo ? "#" : url;
  return `<a class="chip${todo ? " is-todo" : ""}" href="${esc(href)}"${todo ? ' title="TODO: add your URL in the SITE config"' : ' target="_blank" rel="noopener"'}>${ICONS[icon] || ""}<span>${esc(label)}${todo ? ' <span class="todo-flag">TODO</span>' : ""}</span></a>`;
}

/* ---------- Populate ---------- */
function render() {
  // Hero
  $("#hero-eyebrow").textContent = SITE.heroEyebrow;
  $("#hero-title").innerHTML = `${esc(SITE.heroTitleLead)}<br><span class="accent">${esc(SITE.heroTitleAccent)}</span>`;
  $("#hero-sub").textContent = SITE.heroSub;
  const yt = resolveUrl(SITE.heroSecondaryCta.href);
  $("#hero-ctas").innerHTML =
    `<a class="btn" href="${esc(SITE.heroPrimaryCta.href)}">${esc(SITE.heroPrimaryCta.label)}</a>` +
    (isTodo(yt)
      ? `<a class="btn btn-ghost is-todo" href="#" title="TODO: add your YouTube URL in the SITE config">${esc(SITE.heroSecondaryCta.label)} <span class="todo-flag">TODO</span></a>`
      : `<a class="btn btn-ghost" href="${esc(yt)}" target="_blank" rel="noopener">${esc(SITE.heroSecondaryCta.label)}</a>`);
  $("#hero-whisper").textContent = SITE.heroWhisper;

  // About
  $("#about-photo").src = SITE.photo;
  $("#about-photo-pixar").src = SITE.photoPixar;
  $("#about-copy").innerHTML = SITE.aboutParagraphs.map((p) => `<p>${esc(p)}</p>`).join("");

  // Skills
  $("#skills-sub").textContent = SITE.skillsSub;
  $("#skills-grid").innerHTML = SITE.skills
    .map((s) => `<article class="card reveal"><h3>${esc(s.name)}</h3><p>${esc(s.blurb)}</p></article>`)
    .join("");

  // Projects
  $("#projects-sub").textContent = SITE.projectsSub;
  $("#projects-grid").innerHTML = SITE.projects
    .map((p) => {
      const url = p.linkUrl ? resolveUrl(p.linkUrl) : null;
      const link = url
        ? isTodo(url)
          ? `<span class="card-link is-todo" title="TODO: add this project's URL in the SITE config" style="opacity:.6">${esc(p.linkLabel)} <span class="todo-flag">TODO</span></span>`
          : `<a class="card-link" href="${esc(url)}" target="_blank" rel="noopener">${esc(p.linkLabel)} ${ICONS.arrow}</a>`
        : p.linkLabel
          ? `<span class="card-link" style="opacity:.6">${esc(p.linkLabel)}</span>`
          : "";
      return `<article class="card reveal"><h3>${esc(p.title)}${p.todo ? '<span class="todo-flag">TODO</span>' : ""}</h3><p>${esc(p.desc)}</p><div class="tags">${p.tags.map((t) => `<span class="tag">${esc(t)}</span>`).join("")}</div>${link}</article>`;
    })
    .join("");

  // TruVINE
  $("#truvine-mission").textContent = SITE.truvineMission;
  $("#farm-title").textContent = SITE.farmParablesTitle;
  $("#farm-sub").textContent = SITE.farmParablesSub;
  $("#farm-grid").innerHTML = SITE.farmParables.map((f) => `
    <a class="farm-card reveal" href="${f.url}" target="_blank" rel="noopener noreferrer">
      <img src="${f.img}" alt="" loading="lazy" />
      <div class="farm-card-body">
        <h4>${esc(f.title)}</h4>
        <p class="farm-verse">${esc(f.verse)}</p>
        <p>${esc(f.blurb)}</p>
        <span class="farm-watch">Watch on YouTube →</span>
      </div>
    </a>`).join("");
  $("#series-list").innerHTML = SITE.series
    .map((s) => `<li>${esc(s.name)}${s.note ? `<span class="series-note">${esc(s.note)}</span>` : ""}</li>`)
    .join("");
  $("#stats-list").innerHTML =
    `<div class="stat"><dt>Subscribers</dt><dd>${esc(SITE.subscriberCount)}</dd></div>` +
    `<div class="stat"><dt>Videos</dt><dd>${esc(SITE.videoCount)}</dd></div>`;
  $("#truvine-links").innerHTML =
    chip("YouTube", SITE.youtubeUrl, "youtube") +
    chip("Facebook", SITE.facebookUrl, "facebook") +
    chip("Patreon", SITE.patreonUrl, "patreon") +
    chip("Buy Me a Coffee", SITE.buyMeACoffeeUrl, "coffee");

  // Story
  $("#story-copy").innerHTML = SITE.storyLines.map((l) => `<p>${esc(l)}</p>`).join("");
  $("#story-verse").textContent = SITE.storyVerse;

  // Contact
  $("#contact-title").textContent = SITE.contactTitle;
  $("#contact-sub").textContent = SITE.contactSub;
  $("#contact-ctas").innerHTML = isTodo(SITE.email)
    ? `<a class="btn is-todo" href="#" title="TODO: add your email in the SITE config" style="opacity:.75">${esc(SITE.contactCtaLabel)} <span class="todo-flag">TODO</span></a>`
    : `<a class="btn" href="mailto:${esc(SITE.email)}">${esc(SITE.contactCtaLabel)}</a>`;
  $("#contact-socials").innerHTML =
    chip("GitHub", SITE.githubUrl, "github") +
    chip("YouTube", SITE.youtubeUrl, "youtube") +
    chip("Email", isTodo(SITE.email) ? SITE.email : "mailto:" + SITE.email, "mail");

  // Footer
  $("#footer-verse").textContent = SITE.footerVerse;
  $("#footer-copy").textContent = `\u00A9 ${new Date().getFullYear()} ${SITE.name}. Built with faith and JavaScript.`;

  document.title = `${SITE.name} — Software Developer & Creator of TruVINE`;
}

/* ---------- Mobile nav ---------- */
function initNav() {
  const toggle = $("#nav-toggle");
  const links = $("#nav-links");
  toggle.addEventListener("click", () => {
    const open = links.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(open));
  });
  links.querySelectorAll("a").forEach((a) =>
    a.addEventListener("click", () => {
      links.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    })
  );
}

/* ---------- Reveal on scroll ---------- */
function initReveal() {
  const els = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window)) {
    els.forEach((el) => el.classList.add("visible"));
    return;
  }
  const io = new IntersectionObserver(
    (entries) => entries.forEach((e) => e.isIntersecting && (e.target.classList.add("visible"), io.unobserve(e.target))),
    { threshold: 0.12 }
  );
  els.forEach((el) => io.observe(el));
}

render();
initNav();
initReveal();

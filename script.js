/* =========================================================
   BACKBENCHNEXUS — interactions
   ========================================================= */

// ---------- DATA: tech stack (20+ languages/tools) ----------
const STACK = [
  { name: "Java",        cat: "languages", count: 18 },
  { name: "Python",      cat: "languages", count: 34 },
  { name: "JavaScript",  cat: "languages", count: 41 },
  { name: "TypeScript",  cat: "languages", count: 27 },
  { name: "C++",         cat: "languages", count: 9 },
  { name: "C#",          cat: "languages", count: 11 },
  { name: "Go",          cat: "languages", count: 8 },
  { name: "Rust",        cat: "languages", count: 4 },
  { name: "PHP",         cat: "languages", count: 7 },
  { name: "Kotlin",      cat: "languages", count: 6 },
  { name: "Swift",       cat: "languages", count: 5 },
  { name: "SQL",         cat: "languages", count: 38 },

  { name: "React",       cat: "frontend", count: 29 },
  { name: "Angular",     cat: "frontend", count: 14 },
  { name: "Vue.js",      cat: "frontend", count: 12 },
  { name: "Next.js",     cat: "frontend", count: 17 },
  { name: "Tailwind",    cat: "frontend", count: 24 },

  { name: "Node.js",     cat: "backend", count: 26 },
  { name: "Django",      cat: "backend", count: 15 },
  { name: "Spring Boot", cat: "backend", count: 13 },
  { name: "ASP.NET",     cat: "backend", count: 8 },
  { name: ".NET Core",   cat: "backend", count: 9 },
  { name: "GraphQL",     cat: "backend", count: 10 },

  { name: "TensorFlow",  cat: "data", count: 11 },
  { name: "PyTorch",     cat: "data", count: 14 },
  { name: "scikit-learn",cat: "data", count: 19 },
  { name: "Pandas",      cat: "data", count: 22 },
  { name: "Power BI",    cat: "data", count: 9 },
  { name: "Apache Spark",cat: "data", count: 6 },

  { name: "AWS",         cat: "infra", count: 31 },
  { name: "Azure",       cat: "infra", count: 12 },
  { name: "Docker",      cat: "infra", count: 28 },
  { name: "Kubernetes",  cat: "infra", count: 10 },
  { name: "MongoDB",     cat: "infra", count: 17 },
  { name: "PostgreSQL",  cat: "infra", count: 25 },
];

// ---------- DATA: projects ----------
const PROJECTS = [
  {
    id: "p1",
    image: "./images/img1.png",
    cat: "web",
    catLabel: "Web Development",
    title: "Orbital Commerce Platform",
    desc: "A multi-vendor e-commerce platform handling catalog, checkout, and order routing for 40+ active sellers.",
    tags: ["React", "Node.js", "PostgreSQL", "Stripe", "AWS"],
    overview: "Built a multi-tenant storefront and seller dashboard from scratch, replacing a spreadsheet-driven workflow. Each vendor gets isolated inventory management while customers browse a unified catalog with live stock sync.",
    challenges: [
      "Designed a tenant-isolation strategy in PostgreSQL using row-level security instead of separate databases, cutting infra cost significantly",
      "Built a checkout flow that handles split payments across multiple vendors in a single order",
      "Implemented optimistic UI updates so stock changes reflect instantly without full page reloads"
    ],
    architecture: "React + Redux frontend, Node.js/Express API layer, PostgreSQL with row-level security for multi-tenancy, Redis for session and cart caching, deployed on AWS ECS with CloudFront CDN.",
    metrics: [
      { num: "40+", label: "ACTIVE VENDORS" },
      { num: "99.9%", label: "UPTIME" },
      { num: "-33%", label: "CART ABANDONMENT" }
    ]
  },
  {
    id: "p2",
    image: "images/img2.png",
    cat: "aiml",
    catLabel: "AI / ML",
    title: "Demand Forecasting Engine",
    desc: "A time-series forecasting model predicting weekly inventory needs across 200+ SKUs for a logistics client.",
    tags: ["Python", "PyTorch", "Pandas", "Apache Spark", "Docker"],
    overview: "Replaced manual spreadsheet forecasting with an ML pipeline combining historical sales, seasonality, and external signals like local events. Forecasts feed directly into the client's purchasing workflow.",
    challenges: [
      "Engineered features from 3 years of sparse, inconsistently logged sales data before any modeling could start",
      "Compared LSTM, Prophet, and gradient-boosted tree approaches, settling on an ensemble for accuracy and explainability",
      "Built a retraining pipeline that runs weekly without manual intervention, with drift monitoring to flag degraded accuracy"
    ],
    architecture: "Python ETL on Apache Spark for feature engineering, PyTorch LSTM + XGBoost ensemble, model registry with versioning, served via a FastAPI endpoint, containerized with Docker and scheduled on a weekly cron.",
    metrics: [
      { num: "200+", label: "SKUs FORECASTED" },
      { num: "22%", label: "FORECAST ERROR ↓" },
      { num: "1 wk", label: "RETRAIN CYCLE" }
    ]
  },
  {
    id: "p3",
    image: "images/img3.png",
    cat: "data",
    catLabel: "Data Analytics",
    title: "Revenue Intelligence Dashboard",
    desc: "A live analytics dashboard unifying sales, support, and product usage data for a SaaS client's leadership team.",
    tags: ["SQL", "Python", "Power BI", "Apache Spark", "Azure"],
    overview: "Consolidated five disconnected data sources into a single warehouse, then built dashboards leadership actually opens daily instead of waiting on a monthly export from the data team.",
    challenges: [
      "Reconciled mismatched customer IDs across CRM, billing, and product analytics systems before any reporting was possible",
      "Built incremental ETL jobs instead of full reloads, cutting nightly pipeline runtime from hours to minutes",
      "Designed row-level access so regional managers only see their own territory's numbers"
    ],
    architecture: "Azure Data Factory for orchestration, SQL-based warehouse on Azure Synapse, Python for transformation logic, Power BI for the executive-facing dashboard layer with row-level security.",
    metrics: [
      { num: "5", label: "SOURCES UNIFIED" },
      { num: "6hr → 40m", label: "PIPELINE RUNTIME" },
      { num: "Daily", label: "REFRESH CYCLE" }
    ]
  },
  {
    id: "p4",
    image: "images/img4.png",
    cat: "systems",
    catLabel: "Systems & Backend",
    title: "Claims Processing Microservices",
    desc: "A microservices backend processing insurance claims end-to-end, replacing a legacy monolith for a fintech client.",
    tags: ["Java", "Spring Boot", "Kubernetes", "Kafka", "PostgreSQL"],
    overview: "Decomposed a decade-old monolith into independently deployable services for intake, validation, fraud-flagging, and payout — without stopping claims processing during the migration.",
    challenges: [
      "Ran the legacy monolith and new services side-by-side for three months using a strangler-fig pattern to migrate traffic gradually",
      "Built an event-driven pipeline with Kafka so services stay decoupled and can be scaled independently under load spikes",
      "Added a fraud-flagging service that runs async without blocking standard claim approval times"
    ],
    architecture: "Java/Spring Boot services, Kafka for inter-service events, PostgreSQL per service (database-per-service pattern), deployed on Kubernetes with horizontal pod autoscaling.",
    metrics: [
      { num: "0", label: "DOWNTIME DURING MIGRATION" },
      { num: "4x", label: "THROUGHPUT AT PEAK" },
      { num: "6", label: "INDEPENDENT SERVICES" }
    ]
  },
  {
    id: "p5",
    image: "images/img5.png",
    cat: "web",
    catLabel: "Web Development",
    title: "ClinicSync Patient Portal",
    desc: "A HIPAA-aware appointment and records portal for a multi-location healthcare provider.",
    tags: ["Angular", "C#", "ASP.NET", "SQL Server", "Azure"],
    overview: "Gave patients self-service booking, document upload, and secure messaging with their care team, while giving front-desk staff a unified view across all clinic locations.",
    challenges: [
      "Implemented field-level encryption for medical records to meet compliance requirements without slowing down query performance",
      "Built a scheduling engine that handles overlapping provider availability across multiple time zones and locations",
      "Designed an audit trail logging every record access, required for compliance review"
    ],
    architecture: "Angular frontend, ASP.NET Core API, SQL Server with field-level encryption for sensitive data, hosted on Azure App Service with Azure AD B2C for patient authentication.",
    metrics: [
      { num: "12", label: "CLINIC LOCATIONS" },
      { num: "-45%", label: "FRONT-DESK CALL VOLUME" },
      { num: "100%", label: "AUDIT COVERAGE" }
    ]
  },
  {
    id: "p6",
    image: "images/img6.png",
    cat: "aiml",
    catLabel: "AI / ML",
    title: "Document Intelligence Pipeline",
    desc: "An NLP system extracting structured data from scanned contracts and invoices for a legal-tech client.",
    tags: ["Python", "spaCy", "HuggingFace", "TensorFlow", "Docker"],
    overview: "Automated a manual data-entry process where staff retyped figures from scanned PDFs into spreadsheets. The pipeline now extracts key fields directly from documents with a human review step only for low-confidence cases.",
    challenges: [
      "Combined OCR with a fine-tuned transformer model to handle inconsistent scan quality and varied document layouts",
      "Trained a custom NER model to recognize contract-specific fields not covered by off-the-shelf models",
      "Added a confidence-scoring layer that routes uncertain extractions to a human reviewer instead of failing silently"
    ],
    architecture: "Tesseract OCR for text extraction, fine-tuned HuggingFace transformer for field-level NER, spaCy for preprocessing, TensorFlow Serving for inference, all containerized and orchestrated with Docker Compose.",
    metrics: [
      { num: "91%", label: "AUTO-EXTRACTION ACCURACY" },
      { num: "-70%", label: "MANUAL DATA ENTRY" },
      { num: "3.2s", label: "AVG. PROCESSING TIME" }
    ]
  },
  {
    id: "p7",
    image: "images/img8.png",
    cat: "data",
    catLabel: "Data Analytics",
    title: "Churn Prediction & Retention Suite",
    desc: "A churn-scoring model and retention dashboard for a subscription business with 50k+ active users.",
    tags: ["Python", "scikit-learn", "SQL", "Power BI", "AWS"],
    overview: "Built a scoring system that flags at-risk subscribers weeks before they cancel, paired with a dashboard the customer success team uses to prioritize outreach.",
    challenges: [
      "Tested multiple churn-definition windows with the client before modeling, since 'churn' meant different things to different stakeholders",
      "Balanced model precision against recall carefully, since false positives meant wasted outreach but false negatives meant lost revenue",
      "Built a feature store so the same churn signals power both the model and the dashboard without duplicate logic"
    ],
    architecture: "SQL-based feature store on AWS Redshift, scikit-learn gradient-boosted classifier retrained monthly, scores surfaced through a Power BI dashboard with drill-down to individual accounts.",
    metrics: [
      { num: "50k+", label: "USERS SCORED" },
      { num: "0.84", label: "MODEL AUC" },
      { num: "18%", label: "CHURN REDUCTION" }
    ]
  },
  {
    id: "p8",
    image: "images/img7.png",
    cat: "systems",
    catLabel: "Systems & Backend",
    title: "Realtime Fleet Tracking API",
    desc: "A location-streaming backend tracking 1,000+ delivery vehicles in real time for a logistics platform.",
    tags: ["Go", "Redis", "MongoDB", "Kafka", "Kubernetes"],
    overview: "Replaced a polling-based location system with a streaming architecture, cutting location lag from minutes to seconds across the client's entire delivery fleet.",
    challenges: [
      "Rewrote the ingestion layer in Go to handle high-frequency GPS pings from thousands of devices without falling behind",
      "Used Redis geospatial indexes for fast proximity queries like 'nearest available driver'",
      "Designed for graceful degradation so a regional outage doesn't take down tracking for the rest of the fleet"
    ],
    architecture: "Go-based ingestion service consuming Kafka streams, Redis for geospatial queries and caching, MongoDB for historical trip storage, deployed on Kubernetes across multiple regions.",
    metrics: [
      { num: "1,000+", label: "VEHICLES TRACKED" },
      { num: "<2s", label: "LOCATION LAG" },
      { num: "99.95%", label: "SERVICE UPTIME" }
    ]
  }
];

// ---------- Category thumbnail motifs (inline SVG, no external requests) ----------
// Palette hooks into your existing CSS custom properties if present, with
// safe fallbacks so this still renders correctly if those vars aren't defined.
const THUMB_ACCENT = {
  web:     "var(--coral, #ff6b5e)",
  aiml:    "var(--accent, #7c6cff)",
  data:    "var(--accent-2, #4dd9c0)",
  systems: "var(--accent, #7c6cff)"
};

function thumbSVG(cat) {
  const accent = THUMB_ACCENT[cat] || "var(--accent, #7c6cff)";
  const gridId = `grid-${cat}`;
  const glowId = `glow-${cat}`;

  const base = `
    <defs>
      <pattern id="${gridId}" width="28" height="28" patternUnits="userSpaceOnUse">
        <path d="M 28 0 L 0 0 0 28" fill="none" stroke="rgba(255,255,255,0.05)" stroke-width="1"/>
      </pattern>
      <radialGradient id="${glowId}" cx="50%" cy="35%" r="75%">
        <stop offset="0%" stop-color="${accent}" stop-opacity="0.28"/>
        <stop offset="100%" stop-color="${accent}" stop-opacity="0"/>
      </radialGradient>
    </defs>
    <rect width="100%" height="100%" fill="url(#${gridId})"/>
    <rect width="100%" height="100%" fill="url(#${glowId})"/>
  `;

  const motifs = {
    // Web: browser chrome + connected page nodes
    web: `
      <g transform="translate(40,26)" opacity="0.95">
        <rect x="0" y="0" width="220" height="130" rx="10" fill="none" stroke="${accent}" stroke-width="1.6" opacity="0.55"/>
        <rect x="0" y="0" width="220" height="24" rx="10" fill="${accent}" opacity="0.12"/>
        <circle cx="14" cy="12" r="3" fill="${accent}" opacity="0.7"/>
        <circle cx="26" cy="12" r="3" fill="${accent}" opacity="0.45"/>
        <circle cx="38" cy="12" r="3" fill="${accent}" opacity="0.3"/>
        <line x1="18" y1="52" x2="90" y2="52" stroke="${accent}" stroke-width="1.4" opacity="0.5"/>
        <line x1="18" y1="68" x2="150" y2="68" stroke="rgba(255,255,255,0.18)" stroke-width="1.2"/>
        <line x1="18" y1="84" x2="120" y2="84" stroke="rgba(255,255,255,0.12)" stroke-width="1.2"/>
        <rect x="18" y="98" width="60" height="18" rx="4" fill="${accent}" opacity="0.35"/>
        <g class="thumb-pulse">
          <circle cx="180" cy="60" r="4" fill="${accent}"/>
          <circle cx="150" cy="95" r="3" fill="${accent}" opacity="0.7"/>
          <line x1="180" y1="60" x2="150" y2="95" stroke="${accent}" stroke-width="1" opacity="0.4"/>
        </g>
      </g>
    `,
    // AI/ML: neural network graph
    aiml: `
      <g transform="translate(40,20)" opacity="0.95">
        ${[[10,70],[10,30],[10,110]].map(([x,y]) => `<circle cx="${x}" cy="${y}" r="4.5" fill="${accent}" opacity="0.6"/>`).join("")}
        ${[[100,20],[100,55],[100,90],[100,125]].map(([x,y]) => `<circle cx="${x}" cy="${y}" r="4.5" fill="${accent}" opacity="0.85" class="thumb-pulse"/>`).join("")}
        ${[[190,45],[190,95]].map(([x,y]) => `<circle cx="${x}" cy="${y}" r="5.5" fill="${accent}"/>`).join("")}
        ${[[10,70],[10,30],[10,110]].flatMap(([x1,y1]) =>
          [[100,20],[100,55],[100,90],[100,125]].map(([x2,y2]) =>
            `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${accent}" stroke-width="0.6" opacity="0.18"/>`
          )
        ).join("")}
        ${[[100,20],[100,55],[100,90],[100,125]].flatMap(([x1,y1]) =>
          [[190,45],[190,95]].map(([x2,y2]) =>
            `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${accent}" stroke-width="0.8" opacity="0.3"/>`
          )
        ).join("")}
      </g>
    `,
    // Data: animated bar chart with trend line
    data: `
      <g transform="translate(46,30)" opacity="0.95">
        <line x1="0" y1="110" x2="230" y2="110" stroke="rgba(255,255,255,0.18)" stroke-width="1.2"/>
        ${[18,46,20,58,34,72,52].map((h,i) => `<rect x="${i*32}" y="${110-h}" width="18" height="${h}" rx="2" fill="${accent}" opacity="${0.25 + i*0.09}"/>`).join("")}
        <polyline points="9,86 41,64 73,90 105,52 137,76 169,38 201,58" fill="none" stroke="${accent}" stroke-width="2" opacity="0.85" class="thumb-pulse"/>
        <circle cx="169" cy="38" r="4" fill="${accent}"/>
      </g>
    `,
    // Systems: hex microservice cluster
    systems: `
      <g transform="translate(60,26)" opacity="0.95">
        ${(() => {
          const hex = (cx, cy, r) => {
            const pts = Array.from({length:6}, (_,i) => {
              const a = Math.PI/180 * (60*i - 30);
              return `${(cx + r*Math.cos(a)).toFixed(1)},${(cy + r*Math.sin(a)).toFixed(1)}`;
            }).join(" ");
            return pts;
          };
          const nodes = [[30,20],[100,10],[170,30],[30,90],[100,100],[170,85]];
          const lines = [[0,1],[1,2],[0,3],[1,4],[2,5],[3,4],[4,5]];
          const lineSVG = lines.map(([a,b]) => {
            const [x1,y1] = nodes[a], [x2,y2] = nodes[b];
            return `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${accent}" stroke-width="1" opacity="0.28"/>`;
          }).join("");
          const nodeSVG = nodes.map(([x,y],i) =>
            `<polygon points="${hex(x,y,16)}" fill="${accent}" opacity="${i % 2 === 0 ? 0.28 : 0.16}" stroke="${accent}" stroke-width="1" class="${i===1 ? 'thumb-pulse' : ''}"/>`
          ).join("");
          return lineSVG + nodeSVG;
        })()}
      </g>
    `
  };

  return `<svg viewBox="0 0 300 170" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">${base}${motifs[cat] || motifs.systems}</svg>`;
}

// ---------- Render: Stack Matrix ----------
const stackMatrixEl = document.getElementById("stackMatrix");
const matrixTabs = document.querySelectorAll(".matrix-tab");

function renderStack(filterCat) {
  stackMatrixEl.innerHTML = "";
  STACK.forEach(item => {
    const match = filterCat === "all" || item.cat === filterCat;
    const chip = document.createElement("div");
    chip.className = "stack-chip" + (match ? "" : " dim");
    chip.innerHTML = `<span class="stack-name">${item.name}</span><span class="stack-count">${item.count} projects</span>`;
    chip.addEventListener("click", () => {
      const map = { frontend: "web", backend: "systems", data: "aiml" };
      const target = map[item.cat] || "all";
      setProjectFilter(target);
      document.getElementById("work").scrollIntoView({ behavior: "smooth" });
    });
    stackMatrixEl.appendChild(chip);
  });
}
renderStack("all");

matrixTabs.forEach(tab => {
  tab.addEventListener("click", () => {
    matrixTabs.forEach(t => t.classList.remove("active"));
    tab.classList.add("active");
    renderStack(tab.dataset.cat);
  });
});

// ---------- Render: Project Grid ----------
const projectGrid = document.getElementById("projectGrid");
const filterBtns = document.querySelectorAll(".filter-btn");

function buildProjectCard(p) {
  const card = document.createElement("article");
  card.className = "project-card";
  card.dataset.cat = p.cat;

  card.innerHTML = `
    <div class="project-thumb" data-cat="${p.cat}">
      <img src="${p.image}" alt="${p.title}" loading="lazy" data-fallback-cat="${p.cat}">
    </div>
    <div class="project-body">
      <span class="project-cat">${p.catLabel}</span>
      <h3>${p.title}</h3>
      <p class="desc">${p.desc}</p>
      <div class="tag-row">
        ${p.tags.map(t => `<span class="tag">${t}</span>`).join("")}
      </div>
      <div class="project-foot">
        <button class="detail-toggle" aria-expanded="false">
          View technical details
          <span class="chev">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><path d="M6 9l6 6 6-6"/></svg>
          </span>
        </button>
        <div class="project-links">
          <a href="#" aria-label="Live demo (edit link)" title="Live demo">
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15 15 0 010 20 15 15 0 010-20z"/></svg>
          </a>
          <a href="#" aria-label="Source code (edit link)" title="Source code">
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0018 4.77 5.07 5.07 0 0017.91 1S16.73.65 14 2.48a13.38 13.38 0 00-7 0C4.27.65 3.09 1 3.09 1A5.07 5.07 0 003 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 007 18.13V22"/></svg>
          </a>
        </div>
      </div>
    </div>
    <div class="project-detail">
      <div class="project-detail-inner">
        <div class="detail-block">
          <span class="dlabel">Overview</span>
          <p>${p.overview}</p>
        </div>
        <div class="detail-block">
          <span class="dlabel">Engineering challenges solved</span>
          <ul>${p.challenges.map(c => `<li>${c}</li>`).join("")}</ul>
        </div>
        <div class="detail-block">
          <span class="dlabel">Architecture</span>
          <p>${p.architecture}</p>
        </div>
        <div class="metric-row">
          ${p.metrics.map(m => `<div><div class="m-num">${m.num}</div><div class="m-label">${m.label}</div></div>`).join("")}
        </div>
      </div>
    </div>
  `;

  const thumbImg = card.querySelector(".project-thumb img");
  thumbImg.addEventListener("error", () => {
    const wrap = document.createElement("div");
    wrap.className = "thumb-fallback";
    wrap.innerHTML = thumbSVG(thumbImg.dataset.fallbackCat);
    thumbImg.replaceWith(wrap);
  }, { once: true });

  const toggleBtn = card.querySelector(".detail-toggle");
  toggleBtn.addEventListener("click", () => {
    const isOpen = card.classList.contains("expanded");
    document.querySelectorAll(".project-card.expanded").forEach(c => {
      if (c !== card) {
        c.classList.remove("expanded");
        c.querySelector(".detail-toggle").setAttribute("aria-expanded", "false");
        c.querySelector(".detail-toggle").innerHTML = `View technical details <span class="chev"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><path d="M6 9l6 6 6-6"/></svg></span>`;
      }
    });
    card.classList.toggle("expanded");
    toggleBtn.setAttribute("aria-expanded", String(!isOpen));
    toggleBtn.innerHTML = isOpen
      ? `View technical details <span class="chev"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><path d="M6 9l6 6 6-6"/></svg></span>`
      : `Hide technical details <span class="chev"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><path d="M6 9l6 6 6-6"/></svg></span>`;
  });

  return card;
}

function renderProjects() {
  projectGrid.innerHTML = "";
  PROJECTS.forEach(p => projectGrid.appendChild(buildProjectCard(p)));
}
renderProjects();

function setProjectFilter(filter) {
  filterBtns.forEach(b => b.classList.toggle("active", b.dataset.filter === filter));
  document.querySelectorAll(".project-card").forEach(card => {
    const match = filter === "all" || card.dataset.cat === filter;
    card.classList.toggle("is-hidden", !match);
  });
}

filterBtns.forEach(btn => {
  btn.addEventListener("click", () => setProjectFilter(btn.dataset.filter));
});

// ---------- Mobile nav drawer ----------
const navToggle = document.getElementById("navToggle");
const mobileDrawer = document.getElementById("mobileDrawer");
navToggle.addEventListener("click", () => {
  const open = mobileDrawer.classList.toggle("show");
  navToggle.setAttribute("aria-expanded", String(open));
});
mobileDrawer.querySelectorAll("a").forEach(a => {
  a.addEventListener("click", () => mobileDrawer.classList.remove("show"));
});

// ---------- Reveal on scroll ----------
const revealEls = document.querySelectorAll(".reveal");
const io = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("in");
      io.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
revealEls.forEach(el => io.observe(el));

// ---------- Back to top ----------
const toTopBtn = document.getElementById("toTop");
window.addEventListener("scroll", () => {
  toTopBtn.classList.toggle("show", window.scrollY > 600);
});
toTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// ---------- Contact form (demo submission) ----------
const contactForm = document.getElementById("contactForm");
const formMsg = document.getElementById("formMsg");
contactForm.addEventListener("submit", (e) => {
  e.preventDefault();
  formMsg.classList.add("show");
  contactForm.reset();
  setTimeout(() => formMsg.classList.remove("show"), 6000);
});

// ---------- Animated hero counters ----------
function animateCount(el, target, suffixText, duration = 1100) {
  const start = 0;
  const startTime = performance.now();
  function step(now) {
    const progress = Math.min((now - startTime) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    const value = Math.round(start + (target - start) * eased);
    el.firstChild.textContent = value;
    if (progress < 1) requestAnimationFrame(step);
  }
  requestAnimationFrame(step);
}

document.querySelectorAll(".stat .num").forEach(el => {
  const text = el.textContent.trim();
  const target = parseInt(text.replace(/[^\d]/g, ""), 10);
  const suffixEl = el.querySelector(".suffix");
  const suffixText = suffixEl ? suffixEl.textContent : "";
  el.innerHTML = `0<span class="suffix">${suffixText}</span>`;
  if (!isNaN(target)) {
    setTimeout(() => animateCount(el, target, suffixText), 300);
  }
});




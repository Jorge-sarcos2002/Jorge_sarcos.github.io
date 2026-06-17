const toolkit = [
  "Python",
  "R",
  "Stata",
  "SQL",
  "Power BI",
  "Excel",
  "GitHub",
  "Econometrics",
  "Statistics",
  "Machine Learning",
  "Forecasting",
  "Data Visualization",
  "Policy Analysis",
  "Business Analytics"
];

const interests = [
  "Labour markets and informality",
  "Poverty, inequality and social mobility",
  "Development economics",
  "Education and human capital",
  "Gender economics",
  "Public policy evaluation",
  "Banking, credit access and financial systems",
  "Forecasting and economic risk"
];

const researchItems = [
  {
    type: "Working paper / applied research",
    title: "Labour Inactivity Profiles in Ecuador",
    description:
      "Applied research project using Principal Component Analysis and K-Means clustering to identify and characterize profiles of labour inactivity in Ecuador.",
    methods: ["PCA", "K-Means", "EDA", "Labour-market segmentation"],
    topics: ["Labour markets", "Inactivity", "Ecuador", "Public policy"],
    link: "https://github.com/Jorge-sarcos2002/Identificacion-Y-Caracterizacion-De-Perfiles-De-Inactividad-Laboral-En-Ecuador"
  },
  {
    type: "Econometric study",
    title: "School Attendance Logit Model",
    description:
      "Econometric project using ENEMDU 2024 to model the probability that children aged 5–17 attend school in Los Ríos, Ecuador.",
    methods: ["Logit", "Marginal effects", "ROC", "AUC", "F1-score"],
    topics: ["Education", "Poverty", "Child labour", "Ecuador"],
    link: "https://github.com/Jorge-sarcos2002/Logit-model-for-children-s-inassitance-"
  },
  {
    type: "Conference research",
    title: "International Gender Economics Conference 2025",
    description:
      "Academic research material related to an international gender economics conference.",
    methods: ["Applied economics", "Research communication", "Academic presentation"],
    topics: ["Gender economics", "Applied economics", "Research"],
    link: "https://github.com/Jorge-sarcos2002/Ponencia-en-Congreso-2025"
  },
  {
    type: "Research line",
    title: "Banking Competition, Credit Access and Financial Systems",
    description:
      "Current research line focused on banking competition, credit access, financial indicators and comparative analysis in Latin America.",
    methods: ["Financial indicators", "Econometric modeling", "Comparative analysis"],
    topics: ["Banking", "Credit access", "Financial systems", "Latin America"],
    link: "https://drive.google.com/drive/folders/1wXkK-IgRvXAWVgnreWHGs2NkHK7h-0pv?usp=drive_link"
  },
  {
    type: "Research archive",
    title: "Google Drive Research Collection",
    description:
      "Private/public research archive containing papers, technical documents and project materials. Replace this card with individual papers when file titles, abstracts and links are available.",
    methods: ["Research archive", "Technical reports", "Project documentation"],
    topics: ["Economics", "Econometrics", "Data science", "Policy"],
    link: "https://drive.google.com/drive/folders/1wXkK-IgRvXAWVgnreWHGs2NkHK7h-0pv?usp=drive_link"
  }
];

const projects = [
  {
    title: "Latente",
    description:
      "Applied economic intelligence initiative for Ecuador: briefs, indicators, economic analysis and quantitative storytelling.",
    methods: ["Economic indicators", "Policy analysis", "Data communication"],
    topics: ["Ecuador", "Economic intelligence", "Public policy"],
    link: "https://github.com/Jorge-sarcos2002/Latente"
  },
  {
    title: "Data Analytics Portfolio",
    description:
      "Collection of data analytics projects using Python, SQL and Power BI.",
    methods: ["Data cleaning", "Visualization", "Dashboards", "Business analytics"],
    topics: ["Python", "SQL", "Power BI", "BI"],
    link: "https://github.com/Jorge-sarcos2002/My_proyects_of_data"
  },
  {
    title: "Labour Inactivity Profiles in Ecuador",
    description:
      "Quantitative project using PCA and clustering to detect profiles of labour inactivity.",
    methods: ["PCA", "K-Means", "Segmentation"],
    topics: ["Labour", "Ecuador", "Public policy"],
    link: "https://github.com/Jorge-sarcos2002/Identificacion-Y-Caracterizacion-De-Perfiles-De-Inactividad-Laboral-En-Ecuador"
  },
  {
    title: "School Attendance Logit Model",
    description:
      "Logistic regression model for school attendance among children in Los Ríos using ENEMDU 2024.",
    methods: ["Logit", "Marginal effects", "AUC", "F1-score"],
    topics: ["Education", "Poverty", "Child labour"],
    link: "https://github.com/Jorge-sarcos2002/Logit-model-for-children-s-inassitance-"
  }
];

function createChip(text) {
  const span = document.createElement("span");
  span.className = "chip";
  span.textContent = text;
  return span;
}

function renderToolkit() {
  const container = document.getElementById("toolkit");
  toolkit.forEach(item => container.appendChild(createChip(item)));
}

function renderInterests() {
  const container = document.getElementById("interestChips");
  interests.forEach(item => container.appendChild(createChip(item)));
}

function createCard(item, className) {
  const article = document.createElement("article");
  article.className = `${className} reveal`;

  const methods = item.methods
    .map(method => `<span class="meta-pill">${method}</span>`)
    .join("");

  const topics = item.topics
    .map(topic => `<span class="meta-pill">${topic}</span>`)
    .join("");

  article.innerHTML = `
    ${item.type ? `<span class="card-label">${item.type}</span>` : ""}
    <h3>${item.title}</h3>
    <p>${item.description}</p>

    <div class="card-meta">
      ${methods}
    </div>

    <div class="card-meta">
      ${topics}
    </div>

    <a class="card-link" href="${item.link}" target="_blank" rel="noopener">
      View material →
    </a>
  `;

  return article;
}

function renderResearch() {
  const container = document.getElementById("researchGrid");
  researchItems.forEach(item => container.appendChild(createCard(item, "research-card")));
}

function renderProjects() {
  const container = document.getElementById("projectsGrid");
  projects.forEach(item => container.appendChild(createCard(item, "project-card")));
}

function setupReveal() {
  const elements = document.querySelectorAll(".reveal");

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    { threshold: 0.12 }
  );

  elements.forEach(element => observer.observe(element));
}

function setupNavbar() {
  const navbar = document.getElementById("navbar");
  const backToTop = document.getElementById("backToTop");

  window.addEventListener("scroll", () => {
    const isScrolled = window.scrollY > 40;
    navbar.classList.toggle("scrolled", isScrolled);
    backToTop.classList.toggle("visible", window.scrollY > 600);
  });

  backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  renderToolkit();
  renderInterests();
  renderResearch();
  renderProjects();
  setupReveal();
  setupNavbar();
});

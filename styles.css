:root {
  --bg: #020617;
  --bg-2: #0b1220;
  --card: rgba(15, 23, 42, 0.76);
  --card-2: rgba(30, 41, 59, 0.72);
  --text: #e5e7eb;
  --muted: #94a3b8;
  --line: rgba(148, 163, 184, 0.18);
  --blue: #38bdf8;
  --blue-2: #1e3a8a;
  --green: #0f766e;
  --white: #ffffff;
  --shadow: 0 24px 80px rgba(0, 0, 0, 0.35);
  --radius: 24px;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: "Inter", sans-serif;
  background: var(--bg);
  color: var(--text);
  line-height: 1.7;
  overflow-x: hidden;
}

a {
  color: inherit;
  text-decoration: none;
}

.page-bg {
  position: fixed;
  inset: 0;
  z-index: -2;
  background:
    radial-gradient(circle at 10% 20%, rgba(56, 189, 248, 0.16), transparent 30%),
    radial-gradient(circle at 90% 10%, rgba(15, 118, 110, 0.14), transparent 32%),
    radial-gradient(circle at 50% 100%, rgba(30, 58, 138, 0.20), transparent 38%),
    #020617;
}

.page-bg::after {
  content: "";
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(148, 163, 184, 0.05) 1px, transparent 1px),
    linear-gradient(90deg, rgba(148, 163, 184, 0.05) 1px, transparent 1px);
  background-size: 48px 48px;
  mask-image: linear-gradient(to bottom, black, transparent 80%);
}

.navbar {
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: min(1180px, calc(100% - 32px));
  z-index: 20;
  margin-top: 16px;
  padding: 14px 18px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid var(--line);
  border-radius: 999px;
  background: rgba(2, 6, 23, 0.70);
  backdrop-filter: blur(18px);
  transition: all 0.25s ease;
}

.navbar.scrolled {
  background: rgba(2, 6, 23, 0.92);
  box-shadow: var(--shadow);
}

.brand {
  width: 42px;
  height: 42px;
  border-radius: 999px;
  display: grid;
  place-items: center;
  font-weight: 800;
  background: linear-gradient(135deg, var(--blue), var(--green));
  color: #020617;
}

.nav-links {
  display: flex;
  gap: 22px;
  color: var(--muted);
  font-size: 0.94rem;
}

.nav-links a:hover {
  color: var(--blue);
}

.nav-cta {
  padding: 10px 16px;
  border-radius: 999px;
  background: rgba(56, 189, 248, 0.10);
  color: var(--blue);
  border: 1px solid rgba(56, 189, 248, 0.28);
  font-weight: 700;
  font-size: 0.9rem;
}

.section {
  width: min(1180px, calc(100% - 32px));
  margin: 0 auto;
  padding: 110px 0;
}

.hero {
  min-height: 100vh;
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 48px;
  align-items: center;
  padding-top: 150px;
}

.eyebrow {
  color: var(--blue);
  text-transform: uppercase;
  letter-spacing: 0.16em;
  font-size: 0.78rem;
  font-weight: 800;
  margin-bottom: 16px;
}

h1,
h2,
h3 {
  font-family: "Space Grotesk", sans-serif;
  letter-spacing: -0.04em;
}

h1 {
  font-size: clamp(3rem, 7vw, 5.9rem);
  line-height: 0.96;
  margin-bottom: 24px;
}

h1 span {
  display: block;
  margin-top: 18px;
  color: var(--blue);
  font-size: clamp(1.2rem, 2vw, 1.8rem);
  line-height: 1.25;
  letter-spacing: -0.02em;
}

.hero-description {
  max-width: 720px;
  color: var(--muted);
  font-size: 1.2rem;
  margin-bottom: 34px;
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  margin-bottom: 34px;
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 48px;
  padding: 0 20px;
  border-radius: 999px;
  font-weight: 800;
  border: 1px solid var(--line);
  transition: transform 0.2s ease, background 0.2s ease, border-color 0.2s ease;
}

.btn:hover {
  transform: translateY(-2px);
}

.btn.primary {
  color: #020617;
  background: linear-gradient(135deg, var(--blue), #5eead4);
}

.btn.secondary {
  color: var(--text);
  background: rgba(56, 189, 248, 0.10);
  border-color: rgba(56, 189, 248, 0.28);
}

.btn.ghost {
  color: var(--text);
  background: rgba(15, 23, 42, 0.6);
}

.hero-stats {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 14px;
}

.hero-stats div,
.glass-card,
.about-panel,
.project-card,
.research-card,
.collaboration-card,
.terminal {
  background: linear-gradient(180deg, var(--card), rgba(15, 23, 42, 0.45));
  border: 1px solid var(--line);
  border-radius: var(--radius);
  box-shadow: var(--shadow);
}

.hero-stats div {
  padding: 18px;
}

.hero-stats strong {
  display: block;
  color: var(--white);
}

.hero-stats span {
  color: var(--muted);
  font-size: 0.9rem;
}

.terminal {
  overflow: hidden;
}

.terminal-dots {
  display: flex;
  gap: 8px;
  padding: 18px;
  border-bottom: 1px solid var(--line);
}

.terminal-dots span {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: var(--muted);
}

.terminal-dots span:nth-child(1) { background: #f87171; }
.terminal-dots span:nth-child(2) { background: #fbbf24; }
.terminal-dots span:nth-child(3) { background: #34d399; }

pre {
  overflow-x: auto;
  padding: 24px;
  color: #bae6fd;
  font-size: 0.92rem;
}

.section-header {
  max-width: 820px;
  margin-bottom: 42px;
}

.section-header h2 {
  font-size: clamp(2.2rem, 4vw, 3.8rem);
  line-height: 1;
  margin-bottom: 18px;
}

.section-header p {
  color: var(--muted);
}

.about-grid {
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 28px;
}

.about-text {
  color: var(--muted);
  font-size: 1.05rem;
}

.about-text p + p {
  margin-top: 20px;
}

.about-text strong {
  color: var(--text);
}

.about-panel {
  padding: 30px;
}

.about-panel h3 {
  font-size: 1.5rem;
  margin-bottom: 18px;
}

.about-panel ul {
  padding-left: 20px;
  color: var(--muted);
}

.about-panel li + li {
  margin-top: 12px;
}

.expertise-grid,
.projects-grid,
.research-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 22px;
}

.glass-card,
.project-card,
.research-card {
  padding: 28px;
  transition: transform 0.25s ease, border-color 0.25s ease;
}

.glass-card:hover,
.project-card:hover,
.research-card:hover {
  transform: translateY(-6px);
  border-color: rgba(56, 189, 248, 0.45);
}

.glass-card h3,
.project-card h3,
.research-card h3 {
  font-size: 1.45rem;
  margin-bottom: 12px;
}

.glass-card p,
.project-card p,
.research-card p {
  color: var(--muted);
}

.toolkit,
.chips {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 28px;
}

.chip {
  padding: 10px 14px;
  border-radius: 999px;
  background: rgba(56, 189, 248, 0.08);
  border: 1px solid rgba(56, 189, 248, 0.18);
  color: #bae6fd;
  font-weight: 700;
  font-size: 0.92rem;
}

.card-meta {
  margin: 18px 0;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.meta-pill {
  padding: 7px 10px;
  border-radius: 999px;
  background: rgba(15, 118, 110, 0.14);
  border: 1px solid rgba(15, 118, 110, 0.28);
  color: #99f6e4;
  font-size: 0.78rem;
  font-weight: 800;
}

.card-link {
  display: inline-flex;
  margin-top: 18px;
  color: var(--blue);
  font-weight: 900;
}

.card-label {
  display: inline-flex;
  margin-bottom: 14px;
  color: #99f6e4;
  font-size: 0.78rem;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: 0.14em;
}

.collaboration {
  padding-bottom: 60px;
}

.collaboration-card {
  padding: clamp(28px, 5vw, 58px);
  background:
    linear-gradient(135deg, rgba(56, 189, 248, 0.12), rgba(15, 118, 110, 0.12)),
    rgba(15, 23, 42, 0.78);
}

.collaboration-card h2 {
  font-size: clamp(2rem, 4vw, 4rem);
  line-height: 1;
  margin-bottom: 18px;
}

.collaboration-card p {
  color: var(--muted);
  max-width: 820px;
  margin-bottom: 28px;
}

.footer {
  border-top: 1px solid var(--line);
  padding: 26px 16px;
  text-align: center;
  color: var(--muted);
}

.back-to-top {
  position: fixed;
  right: 22px;
  bottom: 22px;
  width: 46px;
  height: 46px;
  border-radius: 999px;
  border: 1px solid var(--line);
  background: rgba(2, 6, 23, 0.85);
  color: var(--blue);
  font-size: 1.2rem;
  cursor: pointer;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.2s ease, transform 0.2s ease;
}

.back-to-top.visible {
  opacity: 1;
  pointer-events: auto;
}

.back-to-top:hover {
  transform: translateY(-3px);
}

.reveal {
  opacity: 0;
  transform: translateY(26px);
  transition: opacity 0.7s ease, transform 0.7s ease;
}

.reveal.visible {
  opacity: 1;
  transform: translateY(0);
}

@media (max-width: 900px) {
  .hero,
  .about-grid {
    grid-template-columns: 1fr;
  }

  .hero-stats,
  .expertise-grid,
  .projects-grid,
  .research-grid {
    grid-template-columns: 1fr;
  }

  .nav-links,
  .nav-cta {
    display: none;
  }

  .section {
    padding: 82px 0;
  }

  .hero {
    padding-top: 130px;
  }
}

import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    number: "01",
    title: "IdentityCore",
    eyebrow: "Independent product · In active development · Private source",
    description:
      "A multi-tenant digital identity infrastructure platform for secure, auditable identity verification. I am designing the system around privacy, tenant isolation, policy-driven decisions, and stable APIs.",
    contribution:
      "Product architecture, Django and FastAPI services, identity workflows, developer tooling, and Next.js portals.",
    stack: ["Django", "FastAPI", "PostgreSQL", "Next.js", "Docker"],
    accent: "project-lime",
  },
  {
    number: "02",
    title: "Nterco",
    eyebrow: "Backend APIs · Live product · Private source",
    description:
      "A professional networking and community platform built for African workers to connect, grow their careers, and access opportunities.",
    contribution:
      "Engineered the Django backend and API platform across authentication, social feeds, organizations, events, payments, mentorship, analytics, and real-time messaging.",
    stack: ["Django REST Framework", "PostgreSQL", "Redis", "WebSockets"],
    href: "https://nterco.com",
    linkLabel: "Visit Nterco",
    accent: "project-blue",
  },
  {
    number: "03",
    title: "VoteEasy",
    eyebrow: "Full-stack product · Live",
    description:
      "An online platform for secure elections, award programs, nominations, and event ticketing—bringing several event workflows into one focused product.",
    contribution:
      "End-to-end product engineering across the voting experience, event management, and production web application.",
    stack: ["TypeScript", "Next.js", "Product engineering"],
    href: "https://voteeasy.net",
    linkLabel: "Visit VoteEasy",
    accent: "project-orange",
  },
  {
    number: "04",
    title: "AcciFree",
    eyebrow: "Flutter + Django · Product prototype",
    description:
      "A road-safety ecosystem for driver onboarding, public driver lookup, QR-based identification, ratings, incident reporting, and operational risk monitoring.",
    contribution:
      "Built the Flutter mobile application and Django REST API, including role-based workflows, evidence uploads, location capture, analytics, deep links, and release automation.",
    stack: ["Flutter", "Django REST Framework", "PostgreSQL", "Mobile APIs"],
    linkLabel: "Private product prototype",
    accent: "project-violet",
  },
  {
    number: "05",
    title: "African Open Science Hardware",
    eyebrow: "Open science platform · Live",
    description:
      "A community platform connecting African makers, researchers, and innovators through open science hardware projects, events, shared resources, and opportunities to collaborate.",
    contribution:
      "Led the end-to-end website development, translating AfricaOSH's mission into a clear, responsive experience that makes its community, initiatives, and knowledge easier to discover.",
    stack: ["Web development", "Content architecture", "Responsive UI"],
    href: "https://africaosh.com",
    linkLabel: "Visit AfricaOSH",
    accent: "project-cyan",
  },
  {
    number: "06",
    title: "Creativity Group",
    eyebrow: "Full-stack organization platform · Live",
    description:
      "A digital platform for a Ghanaian innovation and maker community empowering young Africans through technology, STEM, engineering, and entrepreneurship.",
    contribution:
      "Delivered the full platform across a Next.js experience and Django backend, structuring the organization’s programs, initiatives, and community story for the web.",
    stack: ["Next.js", "TypeScript", "Django", "REST APIs"],
    href: "https://creativitygroup.org",
    linkLabel: "Visit Creativity Group",
    accent: "project-lime",
  },
  {
    number: "07",
    title: "Africa Makerspace Network",
    eyebrow: "Community platform · Live",
    description:
      "A digital home for a pan-African community of makerspaces, creators, and innovators, with programs, reports, events, stories, and membership pathways.",
    contribution:
      "Website engineering and content-led experience for a network operating across 11+ African countries.",
    stack: ["Web development", "CMS", "Responsive UI"],
    href: "https://africamakerspace.net",
    linkLabel: "Visit the platform",
    accent: "project-orange",
  },
  {
    number: "08",
    title: "Kumasi Hive",
    eyebrow: "Organization website · Live",
    description:
      "A modern web presence for Kumasi Hive, presenting its technology, innovation, startup support, and community programs with clearer pathways for visitors.",
    contribution:
      "Website development, information structure, responsive implementation, and ongoing technical support.",
    stack: ["Frontend", "Responsive UI", "Web operations"],
    href: "https://www.kumasihive.com",
    linkLabel: "Visit Kumasi Hive",
    accent: "project-violet",
  },
  {
    number: "09",
    title: "Hive Institute of Technology",
    eyebrow: "Learning platform · Live",
    description:
      "A course platform presenting practical, industry-oriented training in emerging technologies from the Hive Institute of Technology in Kumasi.",
    contribution:
      "Built the digital experience and supporting application structure for discovering programs and engaging with the institute’s training offering.",
    stack: ["Next.js", "Web development", "Responsive UI"],
    href: "https://hit.kumasihive.com",
    linkLabel: "Visit HiT",
    accent: "project-blue",
  },
  {
    number: "10",
    title: "Kumasi Hive Biolab",
    eyebrow: "Science organization website · Live",
    description:
      "A dedicated web presence for Kumasi Hive’s biology laboratory and its work at the intersection of science, learning, experimentation, and innovation.",
    contribution:
      "Developed the organization website and content experience to make the lab’s purpose, activities, and opportunities accessible online.",
    stack: ["Django", "Web development", "Responsive UI"],
    href: "https://biolab.kumasihive.com",
    linkLabel: "Visit Hive Biolab",
    accent: "project-violet",
  },
  {
    number: "11",
    title: "Weloret Research Hub",
    eyebrow: "Research platform · Live",
    description:
      "An all-in-one research platform bringing together articles, events, curated resources, funding opportunities, and professional training.",
    contribution:
      "Full-stack platform development focused on making research opportunities easier to discover and manage.",
    stack: ["Full-stack", "Content platform", "Web development"],
    href: "https://weloret.com",
    linkLabel: "Visit Weloret",
    accent: "project-cyan",
  },
];

const capabilities = [
  {
    number: "01",
    title: "Backend & APIs",
    text: "Django, Django REST Framework, FastAPI, PostgreSQL, GraphQL, background jobs, and maintainable service boundaries.",
  },
  {
    number: "02",
    title: "Product Engineering",
    text: "Next.js, React, TypeScript, responsive interfaces, product workflows, and pragmatic delivery from idea to deployment.",
  },
  {
    number: "03",
    title: "Security by Design",
    text: "Identity systems, RBAC, tenant isolation, audit trails, secure defaults, threat-aware architecture, and verification workflows.",
  },
];

const experience = [
  {
    period: "2024 — 2026",
    company: "Kumasi Hive",
    role: "Software Developer",
    text: "Building and maintaining digital products while supporting the technology needs of programs, startups, and partner organizations.",
  },
  {
    period: "2023 — Present",
    company: "Independent",
    role: "Full-stack Engineer",
    text: "Designing and delivering web platforms, APIs, and technical solutions for organizations and growing teams.",
  },
  {
    period: "2022 — 2023",
    company: "University of Cape Coast",
    role: "IT Support Specialist",
    text: "Supported users and infrastructure for the College of Distance Education, with attention to reliability and network security.",
  },
];

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

export default function Page() {
  return (
    <main id="top">
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>
      <nav className="site-nav" aria-label="Primary navigation">
        <Link href="#top" className="wordmark" aria-label="Owusu Ansah, home">
          OA<span>.</span>
        </Link>
        <div className="nav-links">
          <Link href="#work">Work</Link>
          <Link href="#about">About</Link>
          <Link href="#experience">Experience</Link>
        </div>
        <Link href="mailto:owusuansahkwadwo24@gmail.com" className="nav-cta">
          Let&apos;s talk <Arrow />
        </Link>
      </nav>

      <header className="hero" id="main-content" tabIndex="-1">
        <div className="hero-copy">
          <p className="kicker">
            <span className="status-dot" />
            Based in Kumasi, Ghana · Available for select work
          </p>
          <h1>
            I build secure
            <br />
            digital products
            <br />
            <em>that earn trust.</em>
          </h1>
          <p className="hero-summary">
            I&apos;m Owusu Ansah, a backend and full-stack engineer working
            across APIs, digital identity, and thoughtful web experiences.
          </p>
          <div className="hero-actions">
            <Link href="#work" className="button button-dark">
              View selected work <span aria-hidden="true">↓</span>
            </Link>
            <Link
              href="https://github.com/quarj0"
              target="_blank"
              rel="noreferrer"
              className="text-link"
            >
              GitHub <Arrow />
            </Link>
          </div>
        </div>
        <div className="hero-visual" aria-label="Portrait of Owusu Ansah">
          <div className="portrait-frame">
            <Image
              src="/pic3.webp"
              alt="Owusu Ansah"
              fill
              sizes="(max-width: 900px) 90vw, 38vw"
              className="portrait"
              priority
            />
          </div>
          <p className="portrait-note">
            <span>Engineer</span>
            <span>Security-minded</span>
            <span>Problem solver</span>
          </p>
        </div>
      </header>

      <section className="intro-strip" aria-label="Professional summary">
        <p>Software built with clarity.</p>
        <p>Security considered from day one.</p>
        <p>Technology that serves real people.</p>
      </section>

      <section className="section work-section" id="work">
        <div className="section-heading">
          <div>
            <p className="section-label">Selected work</p>
            <h2>Products with purpose.</h2>
          </div>
          <p>
            A selection of platforms, APIs, and web experiences built for
            communities, organizations, and emerging products.
          </p>
        </div>

        <div className="projects-list">
          {projects.map((project) => (
            <article
              className={`project ${project.accent}`}
              key={project.title}
            >
              <div className="project-number">{project.number}</div>
              <div className="project-main">
                <p className="project-eyebrow">{project.eyebrow}</p>
                <h3>{project.title}</h3>
                <p className="project-description">{project.description}</p>
              </div>
              <div className="project-detail">
                <p className="detail-label">My contribution</p>
                <p>{project.contribution}</p>
                <ul
                  className="tag-list"
                  aria-label={`${project.title} technologies`}
                >
                  {project.stack.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                {project.href ? (
                  <Link
                    href={project.href}
                    target="_blank"
                    rel="noreferrer"
                    className="project-link"
                  >
                    {project.linkLabel} <Arrow />
                  </Link>
                ) : (
                  <p className="project-private">
                    Private source · Case study available on request
                  </p>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section about-section" id="about">
        <div className="about-lead">
          <p className="section-label">How I work</p>
          <h2>
            The best software feels
            <br />
            <em>considered.</em>
          </h2>
        </div>
        <div className="about-copy">
          <p className="large-copy">
            I care about the system behind the screen: clean architecture,
            reliable APIs, sensible security decisions, and interfaces that
            respect the people using them.
          </p>
          <p>
            My work sits at the intersection of product engineering and
            cybersecurity. That perspective helps me ask better questions early,
            reduce avoidable risk, and build products that can grow without
            becoming fragile.
          </p>
        </div>
      </section>

      <section className="section capabilities-section">
        <p className="section-label">Core capabilities</p>
        <div className="capabilities-grid">
          {capabilities.map((capability) => (
            <article key={capability.title}>
              <span>{capability.number}</span>
              <h3>{capability.title}</h3>
              <p>{capability.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section experience-section" id="experience">
        <div className="section-heading">
          <div>
            <p className="section-label">Experience</p>
            <h2>Where I&apos;ve contributed.</h2>
          </div>
          <Link href="/certifications" className="text-link">
            View certifications <Arrow />
          </Link>
        </div>
        <div className="experience-list">
          {experience.map((item) => (
            <article key={`${item.company}-${item.period}`}>
              <p className="experience-period">{item.period}</p>
              <div>
                <h3>{item.company}</h3>
                <p className="experience-role">{item.role}</p>
              </div>
              <p className="experience-description">{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="contact-section" id="contact">
        <p className="section-label">Start a conversation</p>
        <h2>
          Have a meaningful problem
          <br />
          <em>worth solving?</em>
        </h2>
        <Link
          href="mailto:owusuansahkwadwo24@gmail.com"
          className="contact-email"
        >
          owusuansahkwadwo24@gmail.com <Arrow />
        </Link>
        <div className="contact-footer">
          <p>Owusu Ansah · Backend & Full-stack Engineer</p>
          <div>
            <Link
              href="https://github.com/quarj0"
              target="_blank"
              rel="noreferrer"
            >
              GitHub <Arrow />
            </Link>
            <Link
              href="https://linkedin.com/in/quarjo"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn <Arrow />
            </Link>
          </div>
          <p>© {new Date().getFullYear()}</p>
        </div>
      </section>
    </main>
  );
}

import Link from "next/link";

const certifications = [
  ["IBM", "Cybersecurity Analyst Professional Certificate"],
  ["IBM", "Cyber Threat Intelligence"],
  ["IBM", "Penetration Testing, Incident Response & Forensics"],
  ["IBM", "Cybersecurity Compliance Framework & System Administration"],
  ["IBM", "Cybersecurity Capstone"],
  ["ISC2", "Security Principles"],
  ["CyberTeq", "Capture the Flag Challenge"],
];

export const metadata = {
  title: "Certifications — Owusu Ansah",
  description:
    "Cybersecurity training and professional certifications completed by Owusu Ansah.",
  alternates: {
    canonical: "/certifications",
  },
};

export default function CertificationsPage() {
  return (
    <main className="credentials-page">
      <a className="skip-link" href="#credentials-content">
        Skip to main content
      </a>
      <nav className="credentials-nav">
        <Link href="/" className="wordmark" aria-label="Owusu Ansah, home">
          OA<span>.</span>
        </Link>
        <Link href="/#experience" className="text-link">
          Back to portfolio <span aria-hidden="true">↗</span>
        </Link>
      </nav>
      <header id="credentials-content" tabIndex="-1">
        <p className="section-label">Continuous learning</p>
        <h1>
          Certifications &<br />
          <em>security training.</em>
        </h1>
        <p>
          Formal learning that complements hands-on work across software
          engineering, infrastructure, and secure product development.
        </p>
      </header>
      <section className="credentials-list" aria-label="Certifications">
        {certifications.map(([issuer, title], index) => (
          <article key={title}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <h2>{title}</h2>
            <p>{issuer}</p>
          </article>
        ))}
      </section>
      <footer>
        <Link href="/#contact" className="button button-dark">
          Start a conversation <span aria-hidden="true">↗</span>
        </Link>
      </footer>
    </main>
  );
}

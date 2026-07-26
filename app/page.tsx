const education = [
  {
    period: "2022 — 2025",
    title: "M.Sc. in Your Field",
    place: "Your University",
    detail: "Add your concentration, advisor, or one useful line of context.",
  },
  {
    period: "2018 — 2022",
    title: "B.Sc. in Your Field",
    place: "Your University",
    detail: "",
  },
];

const experience = [
  {
    period: "2025 — Present",
    title: "Your Current Role",
    place: "Company or Organization · City",
    detail:
      "Describe the work you do, the problems you solve, and the impact you care about.",
  },
  {
    period: "2023 — 2025",
    title: "Previous Role",
    place: "Company or Organization · City",
    detail:
      "Summarize the most relevant part of this experience in one concise sentence.",
  },
];

const work = [
  {
    year: "2026",
    title: "A Selected Project",
    description:
      "A short explanation of the project, your contribution, and why it matters.",
    tag: "Product · Design · Engineering",
  },
  {
    year: "2025",
    title: "Another Piece of Work",
    description:
      "Use this space for a research project, open-source contribution, case study, or product.",
    tag: "Research · Open Source",
  },
  {
    year: "2024",
    title: "An Earlier Project",
    description:
      "Keep each entry compact. A link can be added to the title whenever the work is public.",
    tag: "Independent Project",
  },
];

export default function Home() {
  return (
    <div className="page-shell">
      <header>
        <nav aria-label="Primary navigation">
          <a className="nav-name" href="#top">
            YOUR NAME
          </a>
          <div className="nav-menu">
            <a href="#about">About</a>
            <a href="#work">Work</a>
          </div>
        </nav>

        <div className="contact-bar" id="top">
          <span>
            <span aria-hidden="true">📍</span> China
          </span>
          <a href="mailto:hello@example.com">
            <span aria-hidden="true">✉</span> hello@example.com
          </a>
          <a href="https://scholar.google.com/">Google Scholar</a>
          <a href="https://github.com/">GitHub</a>
        </div>
      </header>

      <main>
        <section id="about">
          <h1 className="section-title">Introduction</h1>
          <div className="introduction">
            <p>
              I work at the intersection of technology, design, and real-world
              problem solving. I care about clear thinking, useful products,
              and building things that remain simple as they grow.
            </p>

            <div className="focus-grid">
              <article>
                <strong>Thoughtful Product Work</strong>
                <p>
                  Turning ambiguous ideas into focused experiences that are
                  useful, calm, and easy to understand.
                </p>
              </article>
              <article>
                <strong>Engineering &amp; Systems</strong>
                <p>
                  Building reliable software with an emphasis on maintainable
                  foundations and practical trade-offs.
                </p>
              </article>
              <article>
                <strong>Research &amp; Exploration</strong>
                <p>
                  Learning in public, testing new ideas, and translating
                  technical possibilities into meaningful outcomes.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section>
          <h2 className="section-title">Education</h2>
          <ul className="entry-list">
            {education.map((item) => (
              <li className="entry" key={item.period}>
                <div className="entry-meta">{item.period}</div>
                <div className="entry-main">
                  <div className="entry-title">{item.title}</div>
                  <div className="entry-subtitle">{item.place}</div>
                  {item.detail && <p>{item.detail}</p>}
                </div>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="section-title">Experience</h2>
          <ul className="entry-list">
            {experience.map((item) => (
              <li className="entry" key={item.period}>
                <div className="entry-meta">{item.period}</div>
                <div className="entry-main">
                  <div className="entry-title">{item.title}</div>
                  <div className="entry-subtitle">{item.place}</div>
                  <p>{item.detail}</p>
                </div>
              </li>
            ))}
          </ul>
        </section>

        <section id="work">
          <h2 className="section-title">Selected Work</h2>
          <ul className="entry-list">
            {work.map((item) => (
              <li className="entry work-entry" key={item.title}>
                <div className="entry-meta">{item.year}</div>
                <div className="entry-main">
                  <div className="entry-title">{item.title}</div>
                  <p>{item.description}</p>
                  <div className="work-tag">{item.tag}</div>
                </div>
              </li>
            ))}
          </ul>
        </section>

        <div className="compact-grid">
          <section>
            <h2>Awards</h2>
            <ul>
              <li>
                Add a meaningful award or distinction
                <span>Organization · 2025</span>
              </li>
              <li>
                Add another achievement
                <span>Organization · 2024</span>
              </li>
            </ul>
          </section>
          <section>
            <h2>Skills</h2>
            <ul>
              <li>
                Product &amp; strategy
                <span>Research, prototyping, communication</span>
              </li>
              <li>
                Engineering
                <span>Replace with your preferred tools</span>
              </li>
            </ul>
          </section>
        </div>
      </main>

      <footer>Last updated: July 2026 · © 2026 Your Name</footer>
    </div>
  );
}

import { PassionGallery } from "../components/passion-gallery";

const github = "https://github.com/cbshezi5";
const linkedin = "https://www.linkedin.com/in/cebolenkosi-shezi-17a6b9221/";
const resume = "./Cebolenkosi-Shezi-Resume.pdf";
const projects: {
  n: string;
  name: string;
  type: string;
  featured?: boolean;
  description: string;
  tags: string[];
  detail?: string;
  href?: string;
}[] = [
  {
    n: "01",
    name: "Fraud Management System",
    type: "Professional work: Fraud Risk Management",
    featured: true,
    description:
      "Turning Tazama into a fraud-management product. Users analyse fraud reports, dispute or confirm risk assessments, and manage configuration through Rule Manager.",
    tags: [
      "Fraud analysis",
      "Risk assessment",
      "Rule Manager",
      "Angular",
      "Angular: Plugin Arch",
      "Sybrin",
    ],
    detail:
      "At Sybrin, I contributed to the productization of Tazama as the Fraud Management System, bringing fraud-report analysis, risk-assessment review and configuration management into user-facing workflows.",
  },
  {
    n: "02",
    name: "Tazama Monitoring Service",
    type: "Professional work: Fraud Risk Management",
    description:
      "Checking the stability of Tazama and making dropped cases visible through detection and reporting.",
    tags: [
      "Service stability",
      "Dropped cases",
      "Reporting",
      "JobVClaim",
      "Worker",
      "Sybrin",
    ],
    detail:
      "Developed as part of the Tazama product work, the monitoring service checks system stability, identifies cases that were dropped and reports them for investigation.",
  },
  {
    n: "03",
    name: "Tazama",
    type: "Professional work: Open-source contribution",
    description:
      "Fraud detection where reliability matters. Contributing to a fraud-risk engine that processes ISO-standard financial messages.",
    tags: [
      "TypeScript",
      "Fraud risk",
      "Performance",
      "Microservices",
      "Sybrin",
    ],
    detail:
      "My contribution spans feature development, maintenance, benchmarking and reliability improvements, working alongside the open-source community through my role at Sybrin.",
  },
  {
    n: "04",
    name: "Enterprise rule management",
    type: "Professional work: Hyper-Automation",
    description:
      "Making complex business rules easier to navigate, edit and maintain through a unified application.",
    tags: ["Angular", "Financial Workflows", "SQL", "Sybrin"],
    detail:
      "Recent work includes schema-aware editors, workflow navigation, search, validation and concurrency checks over existing rule configurations. Internal implementation details remain private.",
  },
  {
    n: "05",
    name: "Integrated Workflows",
    type: "Professional work: Hyper-Automation",
    description:
      "Bank based solution for workflow of every day bank operations like Account opening, Remittances and RTLoans .",
    tags: [
      "JavaScript",
      "Scheduling",
      "Web",
      "Client Support",
      "Bank Systems",
      "Product",
      "Sybrin",
    ],
    detail:
      "Banking workflows covering account opening, remittances and RTLoans, with a focus on everyday operations and client support.",
  },
  {
    n: "06",
    name: "Nowl",
    type: "Private: In development",
    description:
      "A mobile social location based for spots around you that u can visit Now Location.",
    tags: [
      "React Native",
      "Supabase",
      "LiveKit",
      "Passion Project",
      "AI-Integrations",
    ],
    detail:
      "A side project covering profiles, photo and video posts, feeds, live lobbies and broadcast rooms. Recent development focuses on Android builds, map integration and the mobile experience.",
  },
];

const passionProjects = [
  {
    name: "Spade",
    slug: "spade",
    headline: "Social Media Application.",
    description:
      "A social app concept bringing discovery, a shared feed and personal conversations into one experience.",
    screens: [
      {
        image: "01.jpg",
        title: "Discover people",
        caption:
          "Browse profiles and react to people you want to connect with.",
        width: 1080,
        height: 2280,
      },
      {
        image: "02.jpg",
        title: "Find your space",
        caption:
          "Explore discovery modes and account options from the navigation drawer.",
        width: 1080,
        height: 2280,
      },
      {
        image: "06.jpg",
        title: "Make it personal",
        caption: "View a profile, connections and matching activity.",
        width: 1080,
        height: 2280,
      },
      {
        image: "03.jpg",
        title: "Join the feed",
        caption:
          "Share updates and interact with posts through likes and comments.",
        width: 1080,
        height: 2280,
      },
      {
        image: "05.jpg",
        title: "Follow the activity",
        caption: "See mentions, post updates and connection requests together.",
        width: 1080,
        height: 2280,
      },
      {
        image: "04.jpg",
        title: "Start a conversation",
        caption: "Move from discovery into a one-to-one chat.",
        width: 1080,
        height: 2280,
      },
      {
        image: "07.jpg",
        title: "Keep it going",
        caption: "Compose a reply without leaving the conversation.",
        width: 1080,
        height: 2280,
      },
    ],
  },
  {
    name: "Bus Point",
    slug: "bus-point",
    headline: "Student Transport App.",
    description:
      "A student transport app that connects campus routes, available departures, booking and boarding checks.",
    screens: [
      {
        image: "01.jpg",
        title: "Create an account",
        caption: "Start registration with an account password.",
        width: 1080,
        height: 2280,
      },
      {
        image: "04.jpg",
        title: "Sign in",
        caption: "Access the app with a staff or student number.",
        width: 1080,
        height: 2280,
      },
      {
        image: "08.jpg",
        title: "Recover from an error",
        caption: "Inline feedback makes an incorrect password visible.",
        width: 1080,
        height: 2280,
      },
      {
        image: "09.jpg",
        title: "Choose your route",
        caption: "Select a campus for your journey.",
        width: 1080,
        height: 2280,
      },
      {
        image: "06.jpg",
        title: "Find a departure",
        caption: "Browse time slots, available spaces and departure status.",
        width: 1080,
        height: 2280,
      },
      {
        image: "02.jpg",
        title: "Confirm the booking",
        caption: "Review the route and departure before confirming.",
        width: 1080,
        height: 2280,
      },
      {
        image: "07.jpg",
        title: "Keep track of trips",
        caption: "Review active, used and expired bookings.",
        width: 1080,
        height: 2280,
      },
      {
        image: "05.jpg",
        title: "Get ready to board",
        caption: "Open the trip QR code for the driver to scan.",
        width: 1080,
        height: 2280,
      },
      {
        image: "03.jpg",
        title: "Start the driver journey",
        caption: "See the assigned route before beginning the trip.",
        width: 1080,
        height: 2280,
      },
      {
        image: "13.jpg",
        title: "Check admission",
        caption: "Review the passenger and trip details at boarding.",
        width: 1080,
        height: 2280,
      },
      {
        image: "10.jpg",
        title: "Manage your account",
        caption: "Access profile and trip options from the home screen.",
        width: 1080,
        height: 2280,
      },
      {
        image: "11.jpg",
        title: "Update your details",
        caption: "Edit and save profile information.",
        width: 1080,
        height: 2280,
      },
      {
        image: "12.jpg",
        title: "Confirm account changes",
        caption: "An explicit confirmation guards the account deletion action.",
        width: 1080,
        height: 2280,
      },
    ],
  },
  {
    name: "Fleetly",
    slug: "fleetly",
    headline: "A taxi booking concept.",
    description:
      "A taxi booking concept exploring map-based pickup, trip preferences and ride selection.",
    screens: [
      {
        image: "02.jpg",
        title: "Find your starting point",
        caption: "Begin with location search or your current position.",
        width: 1080,
        height: 2280,
      },
      {
        image: "01.jpg",
        title: "Set the journey",
        caption: "Enter departure and destination on the map.",
        width: 1080,
        height: 2280,
      },
      {
        image: "03.jpg",
        title: "Shape the trip",
        caption: "Choose a drop-off and explore saved or recent trips.",
        width: 1080,
        height: 2280,
      },
      {
        image: "06.jpg",
        title: "Add your preferences",
        caption: "Adjust trip options such as music or being in a hurry.",
        width: 1080,
        height: 2280,
      },
      {
        image: "04.jpg",
        title: "Compare rides",
        caption: "See the route alongside vehicle options and displayed fares.",
        width: 1080,
        height: 2280,
      },
      {
        image: "05.jpg",
        title: "Manage the experience",
        caption:
          "Open payments, ride history, promotions and account settings.",
        width: 1080,
        height: 2280,
      },
    ],
  },
  {
    name: "Purple Leaf",
    slug: "purple-leaf",
    headline: "A score calculator concept.",
    description:
      "An APS calculator concept helping matriculants explore tertiary courses and compare entry requirements.",
    screens: [
      {
        image: "01.jpg",
        title: "Add your subjects",
        caption: "Choose school subjects and their result levels.",
        width: 1080,
        height: 2280,
      },
      {
        image: "03.jpg",
        title: "Adjust your results",
        caption: "Set a subject level using the result selector.",
        width: 1080,
        height: 2280,
      },
      {
        image: "02.jpg",
        title: "See your APS",
        caption: "Review the calculated points and course-match count.",
        width: 1080,
        height: 2280,
      },
      {
        image: "04.jpg",
        title: "Explore courses",
        caption: "Browse courses with their displayed APS requirements.",
        width: 1080,
        height: 2280,
      },
      {
        image: "05.jpg",
        title: "Understand the gaps",
        caption: "Compare subject requirements in a lower-match course view.",
        width: 1080,
        height: 2280,
      },
      {
        image: "06.jpg",
        title: "Explore a closer match",
        caption:
          "Review another comparison, then use the apply or share options.",
        width: 1080,
        height: 2280,
      },
    ],
  },
];

export default function Home() {
  return (
    <>
      <a className="skip" href="#main">
        Skip to content
      </a>
      <header className="nav">
        <div className="wrap nav-inner">
          <a
            href="#main"
            aria-label="Cebolenkosi Shezi home"
            className="brand mono"
          >
            <span className="mint">&lt;</span>CS{""}
            <span className="mint">/&gt;</span>
          </a>
          <nav aria-label="Main navigation" className="nav-links">
            <a href="#work">Work</a>
            <a href="#passion">Passion</a>
            <a className="desktop" href="#experience">
              Experience
            </a>
            <a className="desktop" href="#about">
              About
            </a>
            <a href="#contact">Contact</a>
            <a className="nav-resume mono" href={resume} download>
              Resume ↓
            </a>
          </nav>
        </div>
      </header>
      <main id="main" className="wrap">
        <section className="hero" aria-labelledby="name">
          <div>
            <div className="location mono eyebrow">
              <span className="dot" />
              Gauteng, South Africa
            </div>
            <div className="mono mint eyebrow">
              4 years Full Stack developer
            </div>
            <h1 id="name">
              <span>Cebolenkosi</span>
              <span>
                Shezi
                <span className="mint" style={{ display: "inline" }}>
                  .
                </span>
              </span>
            </h1>
            <p className="intro">
              Intermediate Software Developer.
              <br />
              From financial systems to mobile experiences.
            </p>
            <p className="description">
              I build full-stack software with a focus on performance,
              reliability and the details that make it a pleasure to use.
            </p>
            <div className="actions">
              <a className="button primary" href="#work">
                Explore my work <span>↘</span>
              </a>
              <a className="button" href={resume} download>
                Download resume <span>↓</span>
              </a>
            </div>
          </div>
          <div className="editor">
            <div className="editor-bar">
              <i />
              <i />
              <i />
              <span className="mono">cebolenkosi.ts</span>
            </div>
            <div className="code mono" aria-label="Developer profile">
              <div>
                <span className="comment">
                  {"// A little about the developer"}
                </span>
              </div>
              <div>
                <span>
                  <span className="purple">const</span>{" "}
                  <span className="blue">developer</span> = {"{"}
                </span>
              </div>
              <div>
                <span>
                  &nbsp; name:{" "}
                  <span className="mint">&quot;Cebolenkosi Shezi&quot;</span>,
                </span>
              </div>
              <div>
                <span>
                  &nbsp; role:{" "}
                  <span className="mint">&quot;Software Developer&quot;</span>,
                </span>
              </div>
              <div>
                <span>
                  &nbsp; yearsExperience: <span className="blue">4</span>,
                </span>
              </div>
              <div>
                <span>&nbsp; focus: [</span>
              </div>
              <div>
                <span>
                  &nbsp;&nbsp; <span className="mint">&quot;Fintech&quot;</span>
                  ,
                </span>
              </div>
              <div>
                <span>
                  &nbsp;&nbsp;{" "}
                  <span className="mint">
                    &quot;Full-stack development&quot;
                  </span>
                  ,
                </span>
              </div>
              <div>
                <span>
                  &nbsp;&nbsp;{" "}
                  <span className="mint">&quot;Performance&quot;</span>
                </span>
              </div>
              <div>
                <span>&nbsp; ],</span>
              </div>
              <div>
                <span>
                  &nbsp; mindset:{" "}
                  <span className="mint">&quot;Keep improving&quot;</span>
                </span>
              </div>
              <div>
                <span>{"};"}</span>
              </div>
            </div>
            <div className="editor-foot mono">
              <span>⌁ main</span>
              <span>TypeScript · UTF-8</span>
            </div>
          </div>
        </section>
        <div className="expertise-strip mono">
          <span className="label">IN MY TOOLKIT</span>
          <span>TypeScript</span>
          <span className="slash">/</span>
          <span>Angular</span>
          <span className="slash">/</span>
          <span>React Native</span>
          <span className="slash">/</span>
          <span>C++</span>
          <span className="slash">/</span>
          <span>SQL</span>
          <span className="slash">/</span>
          <span>Docker</span>
        </div>
        <section className="content" id="work">
          <div className="section-heading">
            <div>
              <div className="mono eyebrow mint">01 / Selected work</div>
              <h2>Systems with a purpose.</h2>
            </div>
            <a
              className="text-link mono"
              href={github}
              target="_blank"
              rel="noreferrer"
            >
              Explore GitHub ↗
            </a>
          </div>
          <div className="project-grid">
            {projects.map((p) => (
              <article
                key={p.n}
                className={`project ${p.featured ? "featured" : ""}`}
              >
                <div className="project-top mono">
                  <span className="mint">{p.n} /</span>
                  <span className="badge">{p.type}</span>
                </div>
                <h3>{p.name}</h3>
                <p>{p.description}</p>
                <div className="tags mono">
                  {p.tags.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>
                {p.href ? (
                  <a
                    className="project-link mono"
                    href={p.href}
                    target="_blank"
                    rel="noreferrer"
                  >
                    View repository ↗
                  </a>
                ) : (
                  <details>
                    <summary className="mono">Project notes</summary>
                    <p>{p.detail}</p>
                  </details>
                )}
              </article>
            ))}
          </div>
          <section
            className="passion-section"
            id="passion"
            aria-labelledby="passion-title"
          >
            <div className="passion-heading">
              <div>
                <span className="mono mint eyebrow">
                  Off the clock / On the screen
                </span>
                <h3 id="passion-title">Built out of curiosity.</h3>
              </div>
              <p>
                Four passion projects. A closer look at the journeys inside each
                app.
              </p>
            </div>
            <PassionGallery projects={passionProjects} />
            <p className="passion-current">
              <span className="mint mono">Also building /</span>{" "}
              <strong>Venu</strong> — a private project focused on
              maintainability and developer experience.
            </p>
          </section>
        </section>
        <section className="content" id="experience">
          <div className="section-heading">
            <div>
              <div className="mono eyebrow mint">02 / Experience</div>
              <h2>Built through real work.</h2>
            </div>
          </div>
          <div className="experience-row">
            <div>
              <h3>Sybrin</h3>
              <div className="date mono">APR 2023 — PRESENT</div>
            </div>
            <div>
              <h4>Software Developer Intermediate</h4>
              <p>
                Contributing to Tazama and its productization as the Fraud
                Management System, alongside operational monitoring and internal
                applications.
              </p>
              <ul>
                <li>
                  Contribute features and maintenance to the Tazama open-source
                  fraud engine.
                </li>
                <li>
                  Build fraud-report analysis and workflows to dispute or
                  confirm risk assessments in the Fraud Management System.
                </li>
                <li>Support configuration management through Rule Manager.</li>
                <li>
                  Work on the Tazama Monitoring Service to check stability and
                  identify and report dropped cases.
                </li>
                <li>
                  Deliver frontend and backend capabilities alongside the
                  product team.
                </li>
                <li>
                  Profile bottlenecks, build benchmarks and validate
                  improvements.
                </li>
                <li>
                  Support containerised services, CI/CD workflows and Kubernetes
                  manifests.
                </li>
              </ul>
            </div>
          </div>
          <div className="experience-row">
            <div>
              <h3>ICEP</h3>
              <div className="date mono">JAN 2022 — JAN 2023</div>
            </div>
            <div>
              <h4>Software Developer Intern</h4>
              <p>
                Built Angular and Node.js web features with relational data
                stores, connected backend services to frontend flows, and
                developed testing and software delivery skills within a team.
              </p>
            </div>
          </div>
        </section>
        <section className="content" id="about">
          <div className="section-heading">
            <div>
              <div className="mono eyebrow mint">03 / About & toolkit</div>
              <h2>
                Curious by default.
                <br />
                Practical by design.
              </h2>
            </div>
          </div>
          <div className="skills-layout">
            <div>
              {[
                [
                  "01 / Development",
                  "TypeScript, JavaScript, Angular, React Native, Node.js and C++.",
                ],
                [
                  "02 / Data & performance",
                  "SQL Server, PostgreSQL, ArangoDB, Redis and Valkey. Profiling and repeatable benchmarks.",
                ],
                [
                  "03 / Delivery & testing",
                  "Docker, Podman, Kubernetes, GitHub Actions, Git, Postman, Newman and Bruno.",
                ],
              ].map(([a, b]) => (
                <div className="skill-row" key={a}>
                  <h3>{a}</h3>
                  <p>{b}</p>
                </div>
              ))}
            </div>
            <div className="education">
              <h3>
                A foundation in software.
                <br />
                Always learning from the build.
              </h3>
              <p>
                My work moves between enterprise systems and personal products.
                I care about maintainable code, measurable performance and an
                experience that feels considered.
              </p>
              <p className="small">
                <strong style={{ color: "#e1e9eb" }}>
                  National Diploma in Information Technology
                </strong>
                <br />
                Software Development
                <br />
                Tshwane University of Technology · 2022
              </p>
              <p className="small">
                <strong style={{ color: "#e1e9eb" }}>
                  AWS Academy Cloud Foundations
                </strong>
                <br />
                AWS Academy Graduate · 2022
              </p>
              <p className="small mono">English / isiZulu / Sepedi</p>
            </div>
          </div>
        </section>
        <section id="contact" className="contact">
          <div>
            <div className="eyebrow mono mint">04 / Get in touch</div>
            <h2>Let’s build something useful.</h2>
            <p>For engineering opportunities and project conversations.</p>
            <a className="email" href="mailto:cbshezi5@gmail.com">
              cbshezi5@gmail.com ↗
            </a>
          </div>
          <div>
            <div className="contact-actions">
              <a
                className="button"
                href={linkedin}
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn ↗
              </a>
              <a
                className="button"
                href={github}
                target="_blank"
                rel="noreferrer"
              >
                GitHub ↗
              </a>
            </div>
            <a className="project-link mono" href={resume} download>
              Download my resume ↓
            </a>
            <p className="resume-note mono">PDF · 2 pages</p>
          </div>
        </section>
      </main>
      <footer>
        <div className="wrap footer-inner mono">
          <span>© 2026 Cebolenkosi Shezi</span>
          <span>
            Gauteng, ZA <span className="mint"> / </span>{" "}
            <a href="#main">Back to top ↑</a>
          </span>
        </div>
      </footer>
    </>
  );
}

'use client'

const projects = [
  { name: 'orbit', language: 'typescript', description: 'a calm command center for tracking ideas, experiments, and launches', detail: 'A focused workspace for turning loose ideas into clear, shippable milestones.' },
  { name: 'relay', language: 'python', description: 'a tiny terminal tool for turning repetitive workflows into one clean command', detail: 'A fast command-line companion for repeatable workflows and daily automation.' },
  { name: 'canvas-kit', language: 'typescript', description: 'a focused collection of accessible primitives for expressive interfaces', detail: 'Small, composable building blocks for interfaces that feel considered.' },
  { name: 'papertrail', language: 'rust', description: 'a fast, local-first notebook for collecting thoughts without the noise', detail: 'A private writing space designed for speed, clarity, and offline-first notes.' },
]

export function ProjectsPage() {
  const accent = '#86efac'

  return (
    <div className="site-shell theme-dark" style={{ '--accent': accent } as React.CSSProperties}>
      <div className="matrix-bg" aria-hidden="true" />
      <main className="portfolio projects-page">
        <header className="topbar">
          <div className="identity">
            <a className="avatar" href="/" aria-label="Back to home"><img src="/profile.png" alt="Sunny Mall" /></a>
            <div>
              <a className="name" href="/">sunny mall</a>
              <div className="breadcrumbs"><a href="/">/home</a><span>/projects</span><span>{accent}</span></div>
            </div>
          </div>
          <a className="resume-button" href="/">back home <span aria-hidden="true">←</span></a>
        </header>

        <section className="section projects-index-section">
          <div className="section-heading"><h1>projects</h1></div>
          <p className="projects-intro">a collection of things i&apos;ve built, shaped, and learned from.</p>
          <div className="project-list project-list-page">
            {projects.map((project, index) => (
              <article className="project-row project-detail-row" key={project.name}>
                <div className="project-info"><h2>{project.name}</h2><p>{project.description}</p><small>{project.detail}</small></div>
                <span className="language">{project.language}</span>
              </article>
            ))}
          </div>
        </section>

        <section className="section contact-section project-contact">
          <div className="section-heading"><h2>contact</h2></div>
          <p>have a good idea or want to work together?</p>
          <a className="contact-link" href="mailto:sunnypratap859@gmail.com">sunnypratap859@gmail.com ↗</a>
          <a className="calendly-link" href="https://calendly.com/sunny-mall" target="_blank" rel="noreferrer">book a meeting <span>↗</span></a>
        </section>
        <footer>built with intention <span>·</span> © 2026 sunny mall</footer>
      </main>
    </div>
  )
}

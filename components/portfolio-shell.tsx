'use client'

import { useEffect, useState } from 'react'
const projects = [
  { name: 'orbit', language: 'typescript', description: 'a calm command center for tracking ideas, experiments, and launches' },
  { name: 'relay', language: 'python', description: 'a tiny terminal tool for turning repetitive workflows into one clean command' },
  { name: 'canvas-kit', language: 'typescript', description: 'a focused collection of accessible primitives for expressive interfaces' },
  { name: 'papertrail', language: 'rust', description: 'a fast, local-first notebook for collecting thoughts without the noise' },
]

function GithubMark({ size = 17 }: { size?: number }) {
  return <svg aria-hidden="true" width={size} height={size} viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.61-3.37-1.18-3.37-1.18-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.9 1.53 2.35 1.09 2.92.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02A9.6 9.6 0 0 1 12 7.96c.85 0 1.71.12 2.51.36 1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.69-4.57 4.93.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0 0 12 2Z" /></svg>
}

function DiscordMark({ size = 17 }: { size?: number }) {
  return <svg aria-hidden="true" width={size} height={size} viewBox="0 0 24 24" fill="currentColor"><path d="M18.9 5.2A16.2 16.2 0 0 0 15 4l-.5 1a14.3 14.3 0 0 0-5 0L9 4a16.2 16.2 0 0 0-3.9 1.2C2.6 8.8 1.9 12.3 2.2 15.8a16 16 0 0 0 4.8 2.4l1.2-1.6c-.7-.3-1.3-.7-1.9-1.1l.5-.4a11.5 11.5 0 0 0 10.4 0l.5.4c-.6.4-1.2.8-1.9 1.1l1.2 1.6a16 16 0 0 0 4.8-2.4c.4-4.1-.7-7.6-2.9-10.6ZM8.8 14.1c-.9 0-1.6-.8-1.6-1.8s.7-1.8 1.6-1.8 1.6.8 1.6 1.8-.7 1.8-1.6 1.8Zm6.4 0c-.9 0-1.6-.8-1.6-1.8s.7-1.8 1.6-1.8 1.6.8 1.6 1.8-.7 1.8-1.6 1.8Z" /></svg>
}

function LeetcodeMark({ size = 17 }: { size?: number }) {
  return <svg aria-hidden="true" width={size} height={size} viewBox="0 0 24 24" fill="currentColor"><path d="M13.2 2.2 5.7 9.7a6.05 6.05 0 0 0 0 8.6l2.8 2.8a6.05 6.05 0 0 0 8.6 0l4.1-4.1-1.4-1.4-4.1 4.1a4.05 4.05 0 0 1-5.8 0l-2.8-2.8a4.05 4.05 0 0 1 0-5.8l7.5-7.5a2.1 2.1 0 0 1 3 3l-7.2 7.2 1.4 1.4 7.2-7.2a4.1 4.1 0 0 0-5.8-5.8Z"/><path d="M10 12h9v2h-9z"/></svg>
}

function ClickableHeading({ children, level = 'h2' }: { children: string; level?: 'h1' | 'h2' }) {
  const [isRotating, setIsRotating] = useState(false)
  const Heading = level

  return <button className={`section-heading interactive-heading${isRotating ? ' is-rotating' : ''}`} type="button" onClick={() => { setIsRotating(false); requestAnimationFrame(() => setIsRotating(true)) }} onAnimationEnd={() => setIsRotating(false)} aria-label={`Rotate ${children} heading`}>
    <Heading>{children}</Heading>
  </button>
}

const socials = [
  { label: 'github', href: 'https://github.com/sunnyrockk', icon: GithubMark },
  { label: 'discord', href: 'https://discord.com', icon: DiscordMark },
  { label: 'leetcode', href: 'https://leetcode.com/u/Sunny_mall', icon: LeetcodeMark },
  { label: 'linkedin', href: 'https://www.linkedin.com', mark: 'in' },
  { label: 'x', href: 'https://x.com/SunnyPrata19874', mark: '𝕏' },
]

export function PortfolioShell() {
  const accents = ['#fdba74', '#c084fc', '#93c5fd', '#86efac', '#f9a8d4']
  const [accentIndex, setAccentIndex] = useState(0)
  const [hasHydrated, setHasHydrated] = useState(false)
  const accent = hasHydrated ? accents[accentIndex] : accents[0]
  const secondaryAccent = hasHydrated ? accents[(accentIndex + 1) % accents.length] : accents[1]
  const [activeView, setActiveView] = useState<'about' | 'projects' | 'contributions'>('about')
  const [mobileNavOpen, setMobileNavOpen] = useState(false)
  const [pointer, setPointer] = useState({ x: 50, y: 50 })

  useEffect(() => {
    setHasHydrated(true)
  }, [])

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    setPointer({ x: (event.clientX / window.innerWidth) * 100, y: (event.clientY / window.innerHeight) * 100 })
  }
  const showProjects = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault()
    setActiveView('projects')
  }
  const showAbout = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault()
    setActiveView('about')
  }
  const showContributions = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault()
    setActiveView('contributions')
    setMobileNavOpen(false)
  }
  const handleViewChange = (handler: (event: React.MouseEvent<HTMLAnchorElement>) => void) => (event: React.MouseEvent<HTMLAnchorElement>) => {
    handler(event)
    setMobileNavOpen(false)
  }

  return (
    <div className="site-shell theme-dark" onPointerMove={handlePointerMove} style={{ '--accent': accent, '--matrix-primary': accent, '--matrix-secondary': secondaryAccent, '--pointer-x': `${pointer.x}%`, '--pointer-y': `${pointer.y}%` } as React.CSSProperties}>
      <div className="matrix-bg" aria-hidden="true" />
      <main className="portfolio">
        <header className="topbar">
          <div className="identity">
            <a className="avatar" href="#about" aria-label="Go to about section">
              <img src="/profile.png" alt="Sunny Mall" />
            </a>
            <div>
              <a className="name" style={{ color: accent }} href="#about" onClick={showAbout}>sunny mall</a>
              <div className="breadcrumbs"><a className={activeView === 'about' ? 'active' : ''} href="/" onClick={showAbout}>/home</a><a className={activeView === 'projects' ? 'active' : ''} href="/projects" onClick={showProjects}>/projects</a><a className={`desktop-contribution${activeView === 'contributions' ? ' active' : ''}`} href="#opensource" onClick={handleViewChange(showContributions)}>/contribution</a><button style={{ color: accent }} className="accent-toggle" type="button" onClick={() => setAccentIndex((index) => (index + 1) % accents.length)} aria-label="Change accent color">{accent}</button></div>
            </div>
          </div>
          <div className="top-actions">
            <button className={`mobile-menu-toggle${mobileNavOpen ? ' is-open' : ''}`} type="button" onClick={() => setMobileNavOpen((open) => !open)} aria-expanded={mobileNavOpen} aria-controls="mobile-navigation">
              <span aria-hidden="true" />
              <span aria-hidden="true" />
              <span aria-hidden="true" />
              <span className="sr-only">{mobileNavOpen ? 'Close navigation' : 'Open navigation'}</span>
            </button>
            <nav className="socials" aria-label="Social links">
              {socials.map(({ label, href, icon: Icon, mark }) => <a key={label} href={href} aria-label={label} target={href.startsWith('http') ? '_blank' : undefined} rel="noreferrer">{Icon ? <Icon size={17} strokeWidth={1.8} /> : <span className="social-mark">{mark}</span>}</a>)}
            </nav>
            <div className="header-links">
              <a className="resume-button" href="/resume.pdf" target="_blank" rel="noreferrer">resume <span aria-hidden="true">→</span></a>
            </div>
          </div>
          <nav id="mobile-navigation" className={`mobile-navigation${mobileNavOpen ? ' is-open' : ''}`} aria-label="Mobile navigation">
            <a href="/" onClick={handleViewChange(showAbout)} className={activeView === 'about' ? 'active' : ''}>/home</a>
            <a href="/projects" onClick={handleViewChange(showProjects)} className={activeView === 'projects' ? 'active' : ''}>/projects</a>
            <a href="#opensource" onClick={handleViewChange(showContributions)} className={activeView === 'contributions' ? 'active' : ''}>/contribution</a>
          </nav>
        </header>

        {activeView === 'about' ? (
          <section key="about-view" id="about" className="section about-section home-section">
            <ClickableHeading level="h1">about</ClickableHeading>
            <div className="about-copy">
              <p>20 y/o cs undergrad.</p>
              <p>i build things i wish existed, and they often end up being useful to other people too.</p>
              <p>i work across the stack: web, and the occasional clis/tuis.</p>
              <p>most of what i make ends up open source.</p>
              <p>into linux, ricing my setup, and understanding how things work past the surface.</p>
              <div className="availability"><a href="mailto:sunnypratap859@gmail.com">open to work &lt;3</a><nav className="about-socials" aria-label="Social links">{socials.map(({ label, href, icon: Icon, mark }) => <a key={label} href={href} aria-label={label} target={href.startsWith('http') ? '_blank' : undefined} rel="noreferrer">{Icon ? <Icon size={25} strokeWidth={2.1} /> : <span className="social-mark">{mark}</span>}</a>)}</nav></div>
            </div>
          </section>
        ) : activeView === 'contributions' ? (
          <section key="contributions-view" id="opensource" className="section opensource-section about-replacement">
            <div className="section-heading project-heading"><h1>open source contributions</h1><a href="#about" onClick={showAbout}>back to about →</a></div>
            <a className="opensource-card" href="https://github.com/lingdojo/kana-dojo" target="_blank" rel="noreferrer">
              <div className="opensource-card-top"><h3 style={{ color: '#7dd3fc' }}>kana-dojo</h3><span className="public-badge">Public</span></div>
              <p className="forked-from">Forked from <u>lingdojo/kana-dojo</u></p>
              <p className="opensource-description">Aesthetic, minimalist platform for learning Japanese inspired by Duolingo and Monkeytype, built with Next.js and sponsored by Vercel. Beginner-friendly with plenty of good first issues - all contri...</p>
              <div className="opensource-meta"><span className="language-dot"></span><span>TypeScript</span><span className="star-mark">☆</span><span>1</span></div>
            </a>
          </section>
        ) : (
          <section key="projects-view" id="projects" className="section projects-section about-replacement">
            <div className="section-heading project-heading"><h1 style={{ color: accent }}>projects</h1><a href="#about" onClick={showAbout}>back to about →</a></div>
            <div className="project-list">
              {projects.map((project, index) => <a className="project-row" href="#opensource" key={project.name}><div className="project-info"><h3 className="project-name-light-blue">{project.name}</h3><p>{project.description}</p></div><span className="language">{project.language}</span></a>)}
            </div>
          </section>
        )}

        {activeView === 'about' && (
          <section className="section projects-section projects-preview home-section">
            <div className="section-heading project-heading"><h2 style={{ color: accent }}>projects</h2><a href="/projects" onClick={showProjects}>view all →</a></div>
            <div className="project-list">
              {projects.map((project, index) => <a className="project-row" href="#opensource" key={project.name}><div className="project-info"><h3 className="project-name-light-blue">{project.name}</h3><p>{project.description}</p></div><span className="language">{project.language}</span></a>)}
            </div>
          </section>
        )}

        {activeView === 'about' && (
          <section className="section opensource-section contributions-preview home-section">
            <div className="section-heading project-heading"><h2>contribution</h2><a href="#opensource" onClick={showContributions}>view all →</a></div>
            <a className="opensource-card" href="https://github.com/lingdojo/kana-dojo" target="_blank" rel="noreferrer">
              <div className="opensource-card-top"><h3 style={{ color: '#7dd3fc' }}>kana-dojo</h3><span className="public-badge">Public</span></div>
              <p className="forked-from">Forked from <u>lingdojo/kana-dojo</u></p>
              <p className="opensource-description">Aesthetic, minimalist platform for learning Japanese inspired by Duolingo and Monkeytype, built with Next.js and sponsored by Vercel.</p>
              <div className="opensource-meta"><span className="language-dot"></span><span>TypeScript</span><span className="star-mark">☆</span><span>1</span></div>
            </a>
          </section>
        )}

        {activeView === 'about' && <footer><span>© 2026 Sunny Mall</span><a href="https://github.com/sunnyrockk" target="_blank" rel="noreferrer">github.com/sunnyrockk</a></footer>}
      </main>
    </div>
  )
}

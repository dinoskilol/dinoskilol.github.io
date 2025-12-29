import './App.css'

import { useEffect, useMemo, useState } from 'react'
import { BookOpen, Code, ExternalLink, Feather, Github } from 'lucide-react'

import { fetchRecentQuartzNotes, type RecentNote } from './lib/quartzRss'

type ThemeId = 'dark' | 'light'

const THEMES: Array<{ id: ThemeId; label: string; href: string }> = [
  { id: 'dark', label: 'Dark', href: '/themes/dark.css' },
  { id: 'light', label: 'Light', href: '/themes/light.css' },
]

const PROJECTS = [
  {
    title: '/Dinonomicon',
    subtitle: 'Personal blog',
    tags: ['Web'],
    techs: ['Quartz', 'Obsidian', 'TypeScript'],
    color: '#a78bfa',
    links: {
      project: 'https://dinoskilol.github.io/Dinonomicon/',
      github: 'https://github.com/dinoskilol',
      docs: 'https://dinoskilol.github.io/Dinonomicon/',
    },
  },
  {
    title: '/Azubi-Tools',
    subtitle: 'Tools for Azubis',
    tags: ['Web', 'Tool'],
    techs: ['React', 'TypeScript', 'Vite'],
    color: '#a78bfa',
    links: {
      project: '#',
      github: '#',
      docs: '#',
    },
  },
  {
    title: '/Inventory-Manager',
    subtitle: 'Final project',
    tags: ['Web', 'Fullstack'],
    techs: ['C++', 'React', 'Typescript'],
    color: '#a78bfa',
    links: {
      project: '#',
      github: '#',
      docs: '#',
    },
  },
]


const QUARTZ_RSS_FEED_URL = 'https://dinoskilol.github.io/Dinonomicon/index.xml'

function formatPublishedAt(date: Date) {
  const time = date.getTime()
  if (!Number.isFinite(time)) return ''
  return date.toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: '2-digit' })
}

function applyTheme(themeId: ThemeId) {
  const theme = THEMES.find((t) => t.id === themeId)
  if (!theme) return

  const linkEl = document.getElementById('theme-stylesheet') as HTMLLinkElement | null
  if (!linkEl) return

  linkEl.href = theme.href
}

function App() {
  const [isThemeModalOpen, setIsThemeModalOpen] = useState(false)
  const [themeId, setThemeId] = useState<ThemeId>('dark')

  const [recentNotes, setRecentNotes] = useState<RecentNote[]>([])
  const [notesError, setNotesError] = useState<string | null>(null)
  const [isNotesLoading, setIsNotesLoading] = useState(false)

  const themeLabel = useMemo(
    () => THEMES.find((t) => t.id === themeId)?.label ?? 'Theme',
    [themeId],
  )

  function onThemeChange(nextThemeId: ThemeId) {
    setThemeId(nextThemeId)
    applyTheme(nextThemeId)
  }

  useEffect(() => {
    let isCancelled = false

    async function run() {
      if (!QUARTZ_RSS_FEED_URL) return

      setIsNotesLoading(true)
      setNotesError(null)

      try {
        const notes = await fetchRecentQuartzNotes(QUARTZ_RSS_FEED_URL)
        if (isCancelled) return
        setRecentNotes(notes.slice(0, 3))
      } catch (err) {
        if (isCancelled) return
        setNotesError(err instanceof Error ? err.message : 'Failed to load notes')
      } finally {
        if (isCancelled) return
        setIsNotesLoading(false)
      }
    }

    run()
    return () => {
      isCancelled = true
    }
  }, [])

  return (
    <div className="app">
      {/* Theme Button */}
      <button className="themeButton" type="button" onClick={() => setIsThemeModalOpen(true)}>
        {themeLabel}
      </button>

      {/* Main Content */}
      <main className="main">
        {/* Left: Projects + Blog */}
        <div className="rightCol">
          {/* Projects */}
          <section className="section">
            <h2 className="sectionTitle">
              <Code size={14} style={{ marginRight: '8px' }} />
              Projects
            </h2>
            <div className="projects">
              {PROJECTS.map((p) => (
                <article key={p.title} className="projectCard" style={{ '--card-accent': p.color } as React.CSSProperties}>
                  <div className="projectActions">
                    <a
                      className="projectAction"
                      href={p.links.project}
                      target="_blank"
                      rel="noreferrer"
                      aria-label="Project link"
                      title="Project"
                    >
                      <ExternalLink size={16} />
                    </a>
                    <a
                      className="projectAction"
                      href={p.links.github}
                      target="_blank"
                      rel="noreferrer"
                      aria-label="GitHub"
                      title="GitHub"
                    >
                      <Github size={16} />
                    </a>
                    <a
                      className="projectAction"
                      href={p.links.docs}
                      target="_blank"
                      rel="noreferrer"
                      aria-label="Documentation"
                      title="Documentation"
                    >
                      <BookOpen size={16} />
                    </a>
                  </div>
                  <div className="projectTags">
                    {p.tags.map((tag) => (
                      <span key={tag} className="projectTag">{tag}</span>
                    ))}
                  </div>
                  <div className="projectBottom">
                    <div className="projectTechs">
                      {p.techs.map((tech) => (
                        <span key={tech} className="techBadge">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="projectTitleRow">
                      <span className="projectName">{p.title}</span>
                      <span className="projectSubtitle">{p.subtitle}</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* Blog */}
          <section className="section">
            <h2 className="sectionTitle">
              <Feather size={14} style={{ marginRight: '8px' }} />
              Recent Posts
            </h2>
            <ul className="blogList">
              {!QUARTZ_RSS_FEED_URL ? (
                <li className="blogItem blogItemMuted">
                  <span className="blogTitle">Set your RSS feed URL in App.tsx</span>
                </li>
              ) : isNotesLoading ? (
                <li className="blogItem blogItemMuted">
                  <span className="blogTitle">Loading…</span>
                </li>
              ) : notesError ? (
                <li className="blogItem blogItemMuted">
                  <span className="blogTitle">{notesError}</span>
                </li>
              ) : recentNotes.length === 0 ? (
                <li className="blogItem blogItemMuted">
                  <span className="blogTitle">No posts found</span>
                </li>
              ) : (
                recentNotes.map((note) => (
                  <li key={note.url} className="blogItem">
                    <a className="blogLink" href={note.url} target="_blank" rel="noreferrer">
                      <span className="blogTitle">{note.title}</span>
                    </a>
                    <span className="blogDate">{formatPublishedAt(note.publishedAt)}</span>
                  </li>
                ))
              )}
            </ul>
          </section>
        </div>

        {/* Right: Hero */}
        <section className="hero">

          <h1 className="heroTitle">Hi, I'm Dino.</h1>
          <p className="heroSubtitle">Intern Software Developer</p>
          <p className="heroDesc">
            I build clean, reliable software with a focus on clarity, structure, and usability.
          </p>
          <div className="heroLinks">
            <a href="#" className="heroLink">GitHub</a>
            <a href="#" className="heroLink">LinkedIn</a>
            <a href="#" className="heroLink">Email</a>
          </div>
        </section>
      </main>

      {/* Theme Modal */}
      {isThemeModalOpen && (
        <div className="modalOverlay" role="dialog" aria-modal="true" aria-label="Theme settings" onClick={() => setIsThemeModalOpen(false)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <div className="modalHeader">
              <div className="modalTitle">Theme</div>
              <button className="iconButton" type="button" onClick={() => setIsThemeModalOpen(false)}>
                ✕
              </button>
            </div>
            <div className="modalBody">
              {THEMES.map((t) => (
                <label key={t.id} className="themeOption">
                  <input
                    type="radio"
                    name="theme"
                    value={t.id}
                    checked={themeId === t.id}
                    onChange={() => onThemeChange(t.id)}
                  />
                  <span>{t.label}</span>
                </label>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default App

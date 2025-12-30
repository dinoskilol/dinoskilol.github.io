import { useEffect, useMemo, useState } from 'react'

type FetchStatus = 'idle' | 'loading' | 'success' | 'error'

interface Props {
  username: string
}

interface GitHubCalendarOptions {
  tooltips?: boolean
  responsive?: boolean
  summary_text?: string
  cache?: number
  global_stats?: boolean
}

declare global {
  interface Window {
    GitHubCalendar?: (selector: string, username: string, options?: GitHubCalendarOptions) => void
  }
}

const SCRIPT_SRC = '/github-activity/github-calendar.js'
const CSS_SRC = '/github-activity/github-calendar.css'
const SCRIPT_ID = 'github-activity-calendar-script'
const CSS_ID = 'github-activity-calendar-css'

let scriptPromise: Promise<void> | null = null
let cssInjected = false

function ensureCssLoaded() {
  if (typeof document === 'undefined' || cssInjected) return
  if (document.getElementById(CSS_ID)) {
    cssInjected = true
    return
  }
  const link = document.createElement('link')
  link.rel = 'stylesheet'
  link.href = CSS_SRC
  link.id = CSS_ID
  document.head.appendChild(link)
  cssInjected = true
}

function loadScript() {
  if (typeof document === 'undefined') {
    return Promise.reject(new Error('Document is not defined'))
  }
  if (scriptPromise) return scriptPromise
  if (document.getElementById(SCRIPT_ID)) {
    scriptPromise = Promise.resolve()
    return scriptPromise
  }
  scriptPromise = new Promise((resolve, reject) => {
    const script = document.createElement('script')
    script.src = SCRIPT_SRC
    script.async = true
    script.defer = true
    script.id = SCRIPT_ID
    script.onload = () => resolve()
    script.onerror = () => reject(new Error('Failed to load GitHub calendar script'))
    document.body.appendChild(script)
  })
  return scriptPromise
}

export default function GithubActivityCalendar({ username }: Props) {
  const [status, setStatus] = useState<FetchStatus>('idle')
  const [error, setError] = useState<string | null>(null)
  const containerId = useMemo(() => `github-calendar-${username}`, [username])

  useEffect(() => {
    ensureCssLoaded()
    let cancelled = false
    setStatus('loading')
    setError(null)
    let observer: MutationObserver | null = null

    loadScript()
      .then(() => {
        if (cancelled) return
        const target = document.getElementById(containerId)
        if (!target) {
          throw new Error('Calendar container missing')
        }
        target.innerHTML = 'Loading contributions…'
        if (!window.GitHubCalendar) {
          throw new Error('GitHubCalendar is not available')
        }
        window.GitHubCalendar(`#${containerId}`, username, {
          responsive: true,
          tooltips: true,
          summary_text: '',
          cache: 3600,
          global_stats: false,
        })
        const cleanExtras = () => {
          if (!target) return
          const skipText = 'Skip to contributions year list'
          const anchors = Array.from(target.querySelectorAll<HTMLAnchorElement>('a'))
          const skipLink = anchors.find((el) => el.textContent?.trim() === skipText)
          if (skipLink) {
            skipLink.remove()
          }
          // Remove legend, footer, and specifically the weekday labels (.wday) and month labels
          target.querySelectorAll<Element>('.contrib-legend, .contrib-footer, .left.text-muted, .float-right, .calendar-graph legend, .wday, .month').forEach((node) => node.remove())
          // Force remove all text elements from the SVG to be absolutely sure
          target.querySelectorAll('svg text').forEach((node) => node.remove())
          // Force SVG to scale
          target.querySelectorAll('svg').forEach((svg) => {
            svg.setAttribute('width', '100%')
            svg.setAttribute('height', 'auto')
          })
          target.querySelectorAll<HTMLElement>('a, span, div').forEach((node) => {
            const text = node.textContent?.trim()
            if (!text) return
            if (['Less', 'More'].includes(text)) {
              node.remove()
            }
          })
        }
        cleanExtras()
        observer = new MutationObserver(cleanExtras)
        observer.observe(target, { childList: true, subtree: true })
        setStatus('success')
      })
      .catch((err) => {
        if (cancelled) return
        setError(err instanceof Error ? err.message : 'Failed to load GitHub activity')
        setStatus('error')
      })

    return () => {
      cancelled = true
      observer?.disconnect()
    }
  }, [username, containerId])

  const statusMessage =
    status === 'loading' || status === 'idle'
      ? 'Loading contributions…'
      : status === 'error'
      ? error ?? 'Failed to load contributions'
      : null

  return (
    <div className="githubCalendar">
      <div className="githubCalendarHeader">
      </div>
      <div className="githubCalendarContent">
        {statusMessage && <p className="githubCalendarStatus">{statusMessage}</p>}
        <div className="calendar" id={containerId} />
      </div>
    </div>
  )
}

import './App.css'

import { useMemo, useState } from 'react'

type ThemeId = 'dark' | 'light'

const THEMES: Array<{ id: ThemeId; label: string; href: string }> = [
  { id: 'dark', label: 'Dark', href: '/themes/dark.css' },
  { id: 'light', label: 'Light', href: '/themes/light.css' },
]

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

  const themeLabel = useMemo(
    () => THEMES.find((t) => t.id === themeId)?.label ?? 'Theme',
    [themeId],
  )

  function onThemeChange(nextThemeId: ThemeId) {
    setThemeId(nextThemeId)
    applyTheme(nextThemeId)
  }

  return (
    <>
      <div className="app">
        <button className="themeButton" type="button" onClick={() => setIsThemeModalOpen(true)}>
          Theme: {themeLabel}
        </button>

        {isThemeModalOpen ? (
          <div className="modalOverlay" role="dialog" aria-modal="true" aria-label="Theme settings">
            <div className="modal">
              <div className="modalHeader">
                <div className="modalTitle">Theme</div>
                <button className="iconButton" type="button" onClick={() => setIsThemeModalOpen(false)}>
                  Close
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
        ) : null}
      </div>
    </>
  )
}

export default App

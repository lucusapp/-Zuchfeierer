import { useEffect, useState } from 'react'
import { NavLink, Outlet, useLocation } from 'react-router-dom'
import { SECTIONS } from '../lib/types'
import SearchOverlay from './SearchOverlay'

export type LayoutContext = { openSearch: () => void }

export default function Layout() {
  const location = useLocation()
  const isHome = location.pathname === '/'
  const [searchOpen, setSearchOpen] = useState(false)

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      const target = e.target as HTMLElement | null
      const isTyping =
        target &&
        (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA' || target.isContentEditable)
      if (e.key === '/' && !isTyping) {
        e.preventDefault()
        setSearchOpen(true)
      }
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [])

  return (
    <div className="min-h-screen flex flex-col">
      <header className="sticky top-0 z-10 bg-rail-900/95 backdrop-blur border-b border-rail-800 px-4 py-3 flex items-center justify-between gap-3">
        <NavLink to="/" className="flex items-center gap-2 min-w-0">
          <span className="text-xl">🚆</span>
          <span className="font-semibold tracking-tight truncate">Maquinista App</span>
        </NavLink>
        <button
          onClick={() => setSearchOpen(true)}
          aria-label="Buscar"
          className="shrink-0 text-lg text-slate-300 hover:text-rail-accent rounded-lg border border-rail-700 px-3 py-1.5"
        >
          🔍
        </button>
      </header>

      <main className="flex-1 px-4 py-4 pb-24 max-w-2xl w-full mx-auto">
        <Outlet context={{ openSearch: () => setSearchOpen(true) } satisfies LayoutContext} />
      </main>

      {!isHome && (
        <nav className="fixed bottom-0 inset-x-0 z-10 bg-rail-900/95 backdrop-blur border-t border-rail-800 flex justify-around py-2">
          <NavLink
            to="/"
            className="flex flex-col items-center text-xs px-3 py-1 text-slate-400"
          >
            <span className="text-lg">🏠</span>
            Inicio
          </NavLink>
          {SECTIONS.map((s) => (
            <NavLink
              key={s.id}
              to={`/${s.id}`}
              className={({ isActive }) =>
                `flex flex-col items-center text-xs px-3 py-1 ${
                  isActive ? 'text-rail-accent' : 'text-slate-400'
                }`
              }
            >
              <span className="text-lg">{s.icon}</span>
              {s.label}
            </NavLink>
          ))}
        </nav>
      )}

      <SearchOverlay open={searchOpen} onClose={() => setSearchOpen(false)} />
    </div>
  )
}

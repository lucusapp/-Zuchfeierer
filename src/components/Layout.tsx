import { NavLink, Outlet, useLocation } from 'react-router-dom'
import { SECTIONS } from '../lib/types'

export default function Layout() {
  const location = useLocation()
  const isHome = location.pathname === '/'

  return (
    <div className="min-h-screen flex flex-col">
      <header className="sticky top-0 z-10 bg-rail-900/95 backdrop-blur border-b border-rail-800 px-4 py-3">
        <NavLink to="/" className="flex items-center gap-2">
          <span className="text-xl">🚆</span>
          <span className="font-semibold tracking-tight">Maquinista App</span>
        </NavLink>
      </header>

      <main className="flex-1 px-4 py-4 pb-24 max-w-2xl w-full mx-auto">
        <Outlet />
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
    </div>
  )
}

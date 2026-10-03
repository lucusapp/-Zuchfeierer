import { Link, useOutletContext } from 'react-router-dom'
import { SECTIONS } from '../lib/types'
import type { LayoutContext } from '../components/Layout'

export default function Home() {
  const { openSearch } = useOutletContext<LayoutContext>()

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold mb-1">Habilitación media distancia</h1>
        <p className="text-sm text-slate-400">Tarragona · apuntes y documentación</p>
      </div>

      <button
        onClick={openSearch}
        className="w-full flex items-center gap-2 rounded-lg bg-rail-800 border border-rail-700 px-3 py-2 text-sm text-slate-500 hover:border-rail-accent transition-colors"
      >
        <span>🔍</span>
        Buscar en todos los apuntes…
      </button>

      <div className="grid gap-3">
        {SECTIONS.map((s) => (
          <Link
            key={s.id}
            to={`/${s.id}`}
            className="flex items-start gap-3 rounded-xl bg-rail-800 border border-rail-700 px-4 py-4 hover:border-rail-accent transition-colors"
          >
            <span className="text-2xl">{s.icon}</span>
            <div>
              <div className="font-semibold">{s.label}</div>
              <div className="text-sm text-slate-400">{s.description}</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

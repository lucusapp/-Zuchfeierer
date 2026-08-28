import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { SECTIONS } from '../lib/types'
import { searchDocs } from '../lib/content'

export default function Home() {
  const [query, setQuery] = useState('')
  const results = useMemo(() => searchDocs(query), [query])

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold mb-1">Habilitación media distancia</h1>
        <p className="text-sm text-slate-400">Tarragona · apuntes y documentación</p>
      </div>

      <input
        type="search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Buscar en todos los apuntes…"
        className="w-full rounded-lg bg-rail-800 border border-rail-700 px-3 py-2 text-sm placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-rail-accent"
      />

      {query.trim() ? (
        <div className="space-y-2">
          {results.length === 0 && (
            <p className="text-sm text-slate-500">Sin resultados para “{query}”.</p>
          )}
          {results.map((doc) => (
            <Link
              key={`${doc.section}/${doc.slug}`}
              to={`/${doc.section}/${doc.slug}`}
              className="block rounded-lg bg-rail-800 border border-rail-700 px-3 py-2 hover:border-rail-accent transition-colors"
            >
              <div className="text-xs text-rail-accent uppercase tracking-wide mb-0.5">
                {doc.section}
              </div>
              <div className="font-medium">{doc.title}</div>
              {doc.summary && <div className="text-sm text-slate-400">{doc.summary}</div>}
            </Link>
          ))}
        </div>
      ) : (
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
      )}
    </div>
  )
}

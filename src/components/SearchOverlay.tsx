import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { getSnippet, isEdited, searchDocs } from '../lib/content'
import { SECTIONS, type Section } from '../lib/types'

export default function SearchOverlay(props: { open: boolean; onClose: () => void }) {
  const { open, onClose } = props
  const [query, setQuery] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (open) {
      // Pequeño delay para que el overlay ya esté montado antes de enfocar.
      const id = window.setTimeout(() => inputRef.current?.focus(), 0)
      return () => window.clearTimeout(id)
    }
    setQuery('')
    return undefined
  }, [open])

  useEffect(() => {
    if (!open) return
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [open, onClose])

  if (!open) return null

  const q = query.trim()
  const results = q ? searchDocs(q) : []

  return (
    <div className="fixed inset-0 z-50 bg-rail-950/98 backdrop-blur-sm flex flex-col">
      <div className="flex items-center gap-2 px-4 py-3 border-b border-rail-800">
        <span className="text-lg text-slate-400">🔍</span>
        <input
          ref={inputRef}
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Buscar un concepto…"
          className="flex-1 bg-transparent text-base placeholder:text-slate-500 focus:outline-none"
        />
        <button
          onClick={onClose}
          className="text-sm text-slate-400 hover:text-rail-accent px-2 py-1"
        >
          Cerrar
        </button>
      </div>

      <div className="flex-1 overflow-y-auto px-4 py-3 max-w-2xl w-full mx-auto">
        {q && results.length === 0 && (
          <p className="text-sm text-slate-500">Sin resultados para “{q}”.</p>
        )}

        <div className="space-y-2">
          {results.map((doc) => {
            const sectionMeta = SECTIONS.find((s) => s.id === (doc.section as Section))
            return (
              <Link
                key={`${doc.section}/${doc.slug}`}
                to={`/${doc.section}/${doc.slug}`}
                state={{ highlight: q }}
                onClick={onClose}
                className="block rounded-lg bg-rail-800 border border-rail-700 px-3 py-2.5 hover:border-rail-accent transition-colors"
              >
                <div className="flex items-center gap-2 mb-0.5">
                  <span className="text-xs text-rail-accent uppercase tracking-wide">
                    {sectionMeta ? `${sectionMeta.icon} ${sectionMeta.label}` : doc.section}
                  </span>
                  {isEdited(doc.section as Section, doc.slug) && (
                    <span className="text-[9px] uppercase tracking-wide bg-rail-accent/20 text-rail-accent px-1.5 py-0.5 rounded-full">
                      editado
                    </span>
                  )}
                </div>
                <div className="font-medium">{doc.title}</div>
                <div className="text-sm text-slate-400">{getSnippet(doc, q)}</div>
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}

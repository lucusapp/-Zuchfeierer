import { Link, Navigate, useParams } from 'react-router-dom'
import { getChildren, getTopLevelDocs, isEdited } from '../lib/content'
import { SECTIONS, type Section } from '../lib/types'

export default function SectionPage() {
  const { section } = useParams<{ section: string }>()
  const meta = SECTIONS.find((s) => s.id === section)

  if (!meta) return <Navigate to="/" replace />

  const docs = getTopLevelDocs(section as Section)

  return (
    <div className="space-y-4">
      <div>
        <h1 className="text-xl font-bold flex items-center gap-2">
          <span>{meta.icon}</span>
          {meta.label}
        </h1>
        <p className="text-sm text-slate-400">{meta.description}</p>
      </div>

      {docs.length === 0 ? (
        <p className="text-sm text-slate-500">
          Todavía no hay contenido aquí. Añade archivos .md en{' '}
          <code className="bg-rail-800 px-1 py-0.5 rounded text-xs">content/{section}/</code>.
        </p>
      ) : (
        <div className="space-y-2">
          {docs.map((doc) => {
            const childCount = getChildren(section as Section, doc.slug).length
            return (
            <Link
              key={doc.slug}
              to={`/${section}/${doc.slug}`}
              className="block rounded-lg bg-rail-800 border border-rail-700 px-3 py-3 hover:border-rail-accent transition-colors"
            >
              <div className="font-medium flex items-center gap-2">
                {doc.title}
                {isEdited(section as Section, doc.slug) && (
                  <span className="text-[9px] uppercase tracking-wide bg-rail-accent/20 text-rail-accent px-1.5 py-0.5 rounded-full">
                    editado
                  </span>
                )}
                {childCount > 0 && (
                  <span className="text-[9px] uppercase tracking-wide bg-rail-700 text-slate-300 px-1.5 py-0.5 rounded-full">
                    {childCount} temas
                  </span>
                )}
              </div>
              {doc.summary && <div className="text-sm text-slate-400">{doc.summary}</div>}
              {doc.tags.length > 0 && (
                <div className="flex flex-wrap gap-1 mt-2">
                  {doc.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] uppercase tracking-wide bg-rail-700 text-slate-300 px-2 py-0.5 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </Link>
            )
          })}
        </div>
      )}
    </div>
  )
}

import { useEffect, useRef, useState, type ReactNode } from 'react'
import { Link, Navigate, useLocation, useParams } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { getChildren, getDoc, isEdited } from '../lib/content'
import { clearOverride, saveOverride } from '../lib/overrides'
import { downloadTextFile, toMarkdown } from '../lib/exportDoc'
import { SECTIONS, type Doc, type Section } from '../lib/types'

function metaToText(meta: Record<string, string>): string {
  return Object.entries(meta)
    .map(([k, v]) => `${k}: ${v}`)
    .join('\n')
}

function textToMeta(text: string): Record<string, string> {
  const meta: Record<string, string> = {}
  for (const line of text.split('\n')) {
    const idx = line.indexOf(':')
    if (idx === -1) continue
    const key = line.slice(0, idx).trim()
    const value = line.slice(idx + 1).trim()
    if (key) meta[key] = value
  }
  return meta
}

// Las imágenes de esquemas viven en public/content-images/ y se referencian en el
// Markdown con ruta relativa a esa carpeta (ej. "vehiculos/serie-448/cuadro.png"),
// para que funcionen igual en local y desplegadas bajo un sub-path de GitHub Pages.
function ContentImage(props: { src?: string; alt?: string }) {
  if (!props.src) return null
  const url = `${import.meta.env.BASE_URL}content-images/${props.src}`
  return (
    <img
      src={url}
      alt={props.alt ?? ''}
      loading="lazy"
      className="rounded-lg border border-rail-700 my-3 max-w-full"
    />
  )
}

function getPlainText(node: ReactNode): string {
  if (typeof node === 'string') return node
  if (typeof node === 'number') return String(node)
  if (Array.isArray(node)) return node.map(getPlainText).join('')
  if (node && typeof node === 'object' && 'props' in (node as { props?: unknown })) {
    return getPlainText((node as { props: { children?: ReactNode } }).props.children)
  }
  return ''
}

// Detecta el tipo de avería por el texto del encabezado ("Eléctrico", "Neumático",
// "Frenos"...) para pintar cada categoría con un color distinto, en vez de que todas
// las secciones se vean igual separadas solo por un párrafo.
const CATEGORY_STYLES: { match: RegExp; color: string; bg: string }[] = [
  { match: /eléctric/i, color: '#60a5fa', bg: 'rgba(96,165,250,0.12)' },
  { match: /neumátic/i, color: '#fbbf24', bg: 'rgba(251,191,36,0.12)' },
  { match: /\bfreno/i, color: '#f87171', bg: 'rgba(248,113,113,0.12)' },
  { match: /mecánic/i, color: '#94a3b8', bg: 'rgba(148,163,184,0.12)' },
]

function CategoryHeading(props: { children?: ReactNode }) {
  const text = getPlainText(props.children)
  const category = CATEGORY_STYLES.find((c) => c.match.test(text))
  if (!category) {
    return <h2 className="text-lg font-semibold text-rail-accent mt-6 mb-2">{props.children}</h2>
  }
  return (
    <h2
      className="text-lg font-semibold mt-6 mb-2 py-1.5 px-3 rounded-r border-l-4"
      style={{ color: category.color, borderLeftColor: category.color, background: category.bg }}
    >
      {props.children}
    </h2>
  )
}

export default function DocPage() {
  const params = useParams<{ section: string; slug: string; '*': string }>()
  const { section, slug } = params
  const rest = params['*']
  const fullSlug = slug ? (rest ? `${slug}/${rest}` : slug) : undefined

  const meta = SECTIONS.find((s) => s.id === section)
  const doc = meta && fullSlug ? getDoc(section as Section, fullSlug) : undefined

  const [editing, setEditing] = useState(false)
  const [form, setForm] = useState<{
    title: string
    summary: string
    tags: string
    metaText: string
    body: string
  } | null>(null)

  const location = useLocation()
  const contentRef = useRef<HTMLDivElement>(null)
  const highlight = (location.state as { highlight?: string } | null)?.highlight

  // Al llegar desde la búsqueda global con una palabra a resaltar, la localizamos
  // dentro del contenido ya renderizado, la marcamos y hacemos scroll hasta ahí,
  // en vez de dejar al usuario en la parte de arriba de la página a buscarla a mano.
  useEffect(() => {
    const root = contentRef.current
    if (!root) return

    root.querySelectorAll('mark[data-search-highlight]').forEach((mark) => {
      const parent = mark.parentNode
      if (!parent) return
      while (mark.firstChild) parent.insertBefore(mark.firstChild, mark)
      parent.removeChild(mark)
    })

    const q = highlight?.trim().toLowerCase()
    if (!q) return

    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT)
    let node: Node | null
    while ((node = walker.nextNode())) {
      const text = node.textContent ?? ''
      const idx = text.toLowerCase().indexOf(q)
      if (idx !== -1 && node.textContent) {
        const range = document.createRange()
        range.setStart(node, idx)
        range.setEnd(node, idx + q.length)
        const mark = document.createElement('mark')
        mark.dataset.searchHighlight = 'true'
        mark.className = 'search-highlight'
        range.surroundContents(mark)
        mark.scrollIntoView({ behavior: 'smooth', block: 'center' })
        break
      }
    }
  }, [highlight, doc?.slug, doc?.body])

  if (!meta || !doc || !section || !fullSlug) return <Navigate to="/" replace />

  const currentSection = section as Section
  const currentSlug = fullSlug
  const edited = isEdited(currentSection, currentSlug)
  const children = getChildren(currentSection, currentSlug)

  const segments = currentSlug.split('/')
  const parentSlug = segments.length > 1 ? segments.slice(0, -1).join('/') : null
  const backTo = parentSlug ? `/${section}/${parentSlug}` : `/${section}`
  const backLabel = parentSlug ? '← Volver' : `← ${meta.label}`

  function startEditing(doc: Doc) {
    setForm({
      title: doc.title,
      summary: doc.summary,
      tags: doc.tags.join(', '),
      metaText: metaToText(doc.meta),
      body: doc.body,
    })
    setEditing(true)
  }

  function handleSave() {
    if (!form) return
    saveOverride(currentSection, currentSlug, {
      title: form.title,
      summary: form.summary,
      tags: form.tags
        .split(',')
        .map((t) => t.trim())
        .filter(Boolean),
      meta: textToMeta(form.metaText),
      body: form.body,
    })
    setEditing(false)
    setForm(null)
    // Forzar relectura del override recién guardado.
    window.location.reload()
  }

  function handleReset() {
    if (!confirm('¿Descartar los cambios guardados en este dispositivo y volver al contenido original?')) return
    clearOverride(currentSection, currentSlug)
    window.location.reload()
  }

  function handleExport(doc: Doc) {
    downloadTextFile(`${currentSlug.replace(/\//g, '-')}.md`, toMarkdown(doc))
  }

  const metaEntries = Object.entries(doc.meta).filter(([, v]) => v && v !== '—')

  if (editing && form) {
    return (
      <div className="space-y-3">
        <h1 className="text-lg font-bold">Editando: {doc.title}</h1>

        <label className="block text-sm">
          Título
          <input
            className="mt-1 w-full rounded-lg bg-rail-800 border border-rail-700 px-3 py-2"
            value={form.title}
            onChange={(e) => setForm({ ...form, title: e.target.value })}
          />
        </label>

        <label className="block text-sm">
          Resumen
          <input
            className="mt-1 w-full rounded-lg bg-rail-800 border border-rail-700 px-3 py-2"
            value={form.summary}
            onChange={(e) => setForm({ ...form, summary: e.target.value })}
          />
        </label>

        <label className="block text-sm">
          Etiquetas (separadas por comas)
          <input
            className="mt-1 w-full rounded-lg bg-rail-800 border border-rail-700 px-3 py-2"
            value={form.tags}
            onChange={(e) => setForm({ ...form, tags: e.target.value })}
          />
        </label>

        <label className="block text-sm">
          Ficha técnica (una línea por dato: <code>clave: valor</code>)
          <textarea
            className="mt-1 w-full rounded-lg bg-rail-800 border border-rail-700 px-3 py-2 font-mono text-xs"
            rows={5}
            value={form.metaText}
            onChange={(e) => setForm({ ...form, metaText: e.target.value })}
          />
        </label>

        <label className="block text-sm">
          Contenido (Markdown)
          <textarea
            className="mt-1 w-full rounded-lg bg-rail-800 border border-rail-700 px-3 py-2 font-mono text-xs"
            rows={16}
            value={form.body}
            onChange={(e) => setForm({ ...form, body: e.target.value })}
          />
        </label>

        <div className="flex gap-2 pt-2">
          <button
            onClick={handleSave}
            className="flex-1 rounded-lg bg-rail-accent text-rail-950 font-semibold py-2"
          >
            Guardar en este dispositivo
          </button>
          <button
            onClick={() => {
              setEditing(false)
              setForm(null)
            }}
            className="rounded-lg border border-rail-700 px-4 py-2 text-sm"
          >
            Cancelar
          </button>
        </div>
      </div>
    )
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-2">
        <Link to={backTo} className="text-sm text-slate-400 hover:text-rail-accent">
          {backLabel}
        </Link>
        <div className="flex gap-3 text-sm">
          <button onClick={() => startEditing(doc)} className="text-rail-accent">
            ✏️ Editar
          </button>
        </div>
      </div>

      <h1 className="text-xl font-bold mt-2 mb-1 flex items-center gap-2">
        {doc.title}
        {edited && (
          <span className="text-[10px] uppercase tracking-wide bg-rail-accent/20 text-rail-accent px-2 py-0.5 rounded-full">
            Editado en este dispositivo
          </span>
        )}
      </h1>
      {doc.summary && <p className="text-sm text-slate-400 mb-3">{doc.summary}</p>}

      {doc.tags.length > 0 && (
        <div className="flex flex-wrap gap-1 mb-4">
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

      {metaEntries.length > 0 && (
        <div className="rounded-lg bg-rail-800 border border-rail-700 mb-4 overflow-hidden">
          <table className="w-full text-sm">
            <tbody>
              {metaEntries.map(([key, value]) => (
                <tr key={key} className="border-b border-rail-700 last:border-0">
                  <td className="px-3 py-1.5 text-slate-400 capitalize w-2/5">
                    {key.replace(/_/g, ' ')}
                  </td>
                  <td className="px-3 py-1.5">{value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {doc.body.trim() && (
        <div className="prose-content" ref={contentRef}>
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={{ img: ContentImage, h2: CategoryHeading }}
          >
            {doc.body}
          </ReactMarkdown>
        </div>
      )}

      {children.length > 0 && (
        <div className="space-y-2 mt-2">
          <h2 className="text-sm uppercase tracking-wide text-slate-400 mt-4 mb-1">
            Sistemas / temas
          </h2>
          {children.map((child) => (
            <Link
              key={child.slug}
              to={`/${section}/${child.slug}`}
              className="flex items-center justify-between rounded-lg bg-rail-800 border border-rail-700 px-3 py-3 hover:border-rail-accent transition-colors"
            >
              <div>
                <div className="font-medium">{child.title}</div>
                {child.summary && <div className="text-sm text-slate-400">{child.summary}</div>}
              </div>
              <span className="text-slate-500">›</span>
            </Link>
          ))}
        </div>
      )}

      {edited && (
        <div className="mt-6 flex flex-wrap gap-2 border-t border-rail-800 pt-4">
          <button
            onClick={() => handleExport(doc)}
            className="rounded-lg bg-rail-800 border border-rail-700 px-3 py-2 text-sm"
          >
            ⬇️ Exportar .md
          </button>
          <button
            onClick={handleReset}
            className="rounded-lg border border-red-900 text-red-400 px-3 py-2 text-sm"
          >
            Restablecer original
          </button>
          <p className="text-xs text-slate-500 basis-full">
            Este cambio solo está guardado en este navegador. Exporta el archivo y súbelo a{' '}
            <code className="bg-rail-800 px-1 rounded">
              content/{section}/{currentSlug}.md
            </code>{' '}
            en el repo para que quede para todos.
          </p>
        </div>
      )}
    </div>
  )
}

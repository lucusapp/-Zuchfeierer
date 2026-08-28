import raw from '../content/index.generated.json'
import type { Doc, Section } from './types'
import { getOverride } from './overrides'

// Punto único de acceso a los contenidos. Hoy lee un JSON generado a partir
// de Markdown en build-time; si en el futuro migras a una base de datos,
// solo hay que reimplementar estas funciones (idealmente async) sin tocar
// el resto de la app.
const originalDocs = raw as unknown as Doc[]

function withOverride(doc: Doc): Doc {
  const override = getOverride(doc.section, doc.slug)
  if (!override) return doc
  return {
    ...doc,
    ...override,
    meta: { ...doc.meta, ...(override.meta ?? {}) },
  }
}

export function isEdited(section: Section, slug: string): boolean {
  return getOverride(section, slug) !== undefined
}

export function getOriginalDoc(section: Section, slug: string): Doc | undefined {
  return originalDocs.find((d) => d.section === section && d.slug === slug)
}

export function getAllDocs(): Doc[] {
  return originalDocs.map(withOverride)
}

export function getDocsBySection(section: Section): Doc[] {
  return originalDocs.filter((d) => d.section === section).map(withOverride)
}

export function getDoc(section: Section, slug: string): Doc | undefined {
  const doc = originalDocs.find((d) => d.section === section && d.slug === slug)
  return doc ? withOverride(doc) : undefined
}

// Un doc puede tener "hijos" anidándolo en una carpeta: content/vehiculos/serie-447.md
// (padre, slug "serie-447") + content/vehiculos/serie-447/equipo-electrico.md (hijo,
// slug "serie-447/equipo-electrico"). Así una ficha larga se parte en submenús por tema
// sin necesitar un campo extra en el frontmatter.
export function getTopLevelDocs(section: Section): Doc[] {
  return getDocsBySection(section).filter((d) => !d.slug.includes('/'))
}

export function getChildren(section: Section, parentSlug: string): Doc[] {
  const prefix = `${parentSlug}/`
  return getDocsBySection(section).filter(
    (d) => d.slug.startsWith(prefix) && d.slug.slice(prefix.length).split('/').length === 1,
  )
}

export function searchDocs(query: string): Doc[] {
  const q = query.trim().toLowerCase()
  if (!q) return []
  return getAllDocs().filter(
    (d) =>
      d.title.toLowerCase().includes(q) ||
      d.summary.toLowerCase().includes(q) ||
      d.tags.some((t) => t.toLowerCase().includes(q)) ||
      d.body.toLowerCase().includes(q),
  )
}

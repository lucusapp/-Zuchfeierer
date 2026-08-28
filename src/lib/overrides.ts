import type { Doc, Section } from './types'

// Ediciones hechas desde la propia app. Se guardan solo en este navegador
// (localStorage) hasta que el usuario exporta el .md y lo sube al repo.
export type DocOverride = Partial<Pick<Doc, 'title' | 'summary' | 'tags' | 'body'>> & {
  meta?: Record<string, string>
}

const PREFIX = 'maquinista:override:'

function storageKey(section: Section, slug: string) {
  return `${PREFIX}${section}/${slug}`
}

export function getOverride(section: Section, slug: string): DocOverride | undefined {
  try {
    const raw = localStorage.getItem(storageKey(section, slug))
    return raw ? (JSON.parse(raw) as DocOverride) : undefined
  } catch {
    return undefined
  }
}

export function saveOverride(section: Section, slug: string, data: DocOverride): void {
  try {
    localStorage.setItem(storageKey(section, slug), JSON.stringify(data))
  } catch {
    // localStorage no disponible (navegación privada, cuota llena, etc.)
  }
}

export function clearOverride(section: Section, slug: string): void {
  try {
    localStorage.removeItem(storageKey(section, slug))
  } catch {
    // ignorar
  }
}

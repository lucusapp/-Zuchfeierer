import { visit } from 'unist-util-visit'
import type { Root, Text, Parent } from 'mdast'
import { GLOSSARY } from './glossary'

// Nodos dentro de los que no hay que insertar enlaces: ya son un enlace,
// un título, o código (donde un término no debería convertirse en link).
const SKIP_PARENT_TYPES = new Set(['link', 'linkReference', 'heading', 'inlineCode', 'code'])

function escapeRegExp(value: string): string {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}

// Enlaza, en cada página, la primera aparición de cada término del
// glosario hacia la página donde está explicado — nunca hacia la propia
// página en la que ya se está (currentHref), para no crear un enlace a
// sí misma.
export function remarkGlossaryLinks(currentHref: string) {
  return (tree: Root) => {
    const used = new Set<string>()

    visit(tree, 'text', (node: Text, index, parent: Parent | undefined) => {
      if (!parent || index == null) return
      if (SKIP_PARENT_TYPES.has(parent.type)) return

      for (const { term, href } of GLOSSARY) {
        if (href === currentHref || used.has(term)) continue

        const match = new RegExp(`\\b${escapeRegExp(term)}\\b`).exec(node.value)
        if (!match) continue

        used.add(term)
        const start = match.index
        const end = start + match[0].length

        const replacement: Array<Text | { type: 'link'; url: string; children: Text[] }> = []
        if (start > 0) replacement.push({ type: 'text', value: node.value.slice(0, start) })
        replacement.push({
          type: 'link',
          url: href,
          children: [{ type: 'text', value: match[0] }],
        })
        if (end < node.value.length) replacement.push({ type: 'text', value: node.value.slice(end) })

        parent.children.splice(index, 1, ...replacement)
        return index
      }
    })
  }
}

import type { Doc } from './types'

function yamlString(value: string): string {
  return `"${value.replace(/\\/g, '\\\\').replace(/"/g, '\\"')}"`
}

export function toMarkdown(doc: Doc): string {
  const lines = ['---']
  lines.push(`title: ${yamlString(doc.title)}`)
  lines.push(`summary: ${yamlString(doc.summary)}`)
  lines.push(`order: ${doc.order}`)
  lines.push(`tags: [${doc.tags.map(yamlString).join(', ')}]`)
  if (Object.keys(doc.meta).length > 0) {
    lines.push('meta:')
    for (const [key, value] of Object.entries(doc.meta)) {
      lines.push(`  ${key}: ${yamlString(value)}`)
    }
  }
  lines.push('---')
  return `${lines.join('\n')}\n\n${doc.body.trim()}\n`
}

export function downloadTextFile(filename: string, content: string): void {
  const blob = new Blob([content], { type: 'text/markdown;charset=utf-8' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = filename
  document.body.appendChild(a)
  a.click()
  document.body.removeChild(a)
  URL.revokeObjectURL(url)
}

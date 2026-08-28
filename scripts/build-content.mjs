import fg from 'fast-glob'
import fs from 'node:fs'
import path from 'node:path'
import matter from 'gray-matter'

const ROOT = path.resolve(import.meta.dirname, '..')
const CONTENT_DIR = path.join(ROOT, 'content')
const OUT_DIR = path.join(ROOT, 'src', 'content')
const OUT_FILE = path.join(OUT_DIR, 'index.generated.json')

const SECTIONS = ['vehiculos', 'infraestructura', 'normativa']

const docs = []

for (const section of SECTIONS) {
  const dir = path.join(CONTENT_DIR, section)
  if (!fs.existsSync(dir)) continue
  const files = fg.sync('**/*.md', { cwd: dir })
  for (const file of files) {
    const raw = fs.readFileSync(path.join(dir, file), 'utf-8')
    const { data, content } = matter(raw)
    const slug = file.replace(/\.md$/, '')
    if (!data.title) {
      console.warn(`[build-content] Aviso: ${section}/${file} no tiene "title" en el frontmatter.`)
    }
    docs.push({
      section,
      slug,
      title: data.title ?? slug,
      summary: data.summary ?? '',
      order: data.order ?? 0,
      tags: data.tags ?? [],
      meta: data.meta ?? {},
      body: content.trim(),
    })
  }
}

docs.sort((a, b) => a.order - b.order || a.title.localeCompare(b.title, 'es'))

fs.mkdirSync(OUT_DIR, { recursive: true })
fs.writeFileSync(OUT_FILE, JSON.stringify(docs, null, 2))

console.log(`[build-content] ${docs.length} documentos indexados -> ${path.relative(ROOT, OUT_FILE)}`)

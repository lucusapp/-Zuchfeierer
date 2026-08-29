import fs from 'node:fs'
import path from 'node:path'
import fg from 'fast-glob'
import sharp from 'sharp'

const ROOT = path.resolve(import.meta.dirname, '..')
const IMAGES_DIR = path.join(ROOT, 'public', 'content-images')

const files = fg.sync('**/*.{png,jpg,jpeg}', { cwd: IMAGES_DIR, absolute: true })

if (files.length === 0) {
  console.log('[optimize-images] No hay .png/.jpg/.jpeg pendientes de convertir en public/content-images/.')
  process.exit(0)
}

for (const file of files) {
  const webpPath = file.replace(/\.(png|jpe?g)$/i, '.webp')
  const before = fs.statSync(file).size
  await sharp(file).webp({ quality: 80 }).toFile(webpPath)
  const after = fs.statSync(webpPath).size
  fs.unlinkSync(file)
  const rel = path.relative(ROOT, webpPath)
  console.log(
    `[optimize-images] ${rel}: ${(before / 1024).toFixed(0)}KB -> ${(after / 1024).toFixed(0)}KB`,
  )
}

console.log(`[optimize-images] ${files.length} imagen(es) convertida(s) a .webp.`)
console.log('[optimize-images] Recuerda actualizar las referencias .png/.jpg -> .webp en el Markdown.')

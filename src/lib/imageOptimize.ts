// Convierte una imagen (normalmente .jpg de móvil) a WebP en el propio navegador,
// con el mismo criterio que scripts/optimize-images.mjs (calidad 80), y reduciendo
// el ancho si viene a resolución de cámara, antes de subirla a Supabase Storage.
const MAX_WIDTH = 1600
const QUALITY = 0.8

export async function toWebp(file: File): Promise<Blob> {
  const bitmap = await createImageBitmap(file)
  const scale = Math.min(1, MAX_WIDTH / bitmap.width)
  const width = Math.round(bitmap.width * scale)
  const height = Math.round(bitmap.height * scale)

  const canvas = document.createElement('canvas')
  canvas.width = width
  canvas.height = height
  const ctx = canvas.getContext('2d')
  if (!ctx) throw new Error('No se pudo preparar el lienzo para convertir la imagen.')
  ctx.drawImage(bitmap, 0, 0, width, height)

  return new Promise((resolve, reject) => {
    canvas.toBlob(
      (blob) => (blob ? resolve(blob) : reject(new Error('No se pudo generar la imagen WebP.'))),
      'image/webp',
      QUALITY,
    )
  })
}

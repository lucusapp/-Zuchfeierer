import fs from 'node:fs'
import path from 'node:path'
import zlib from 'node:zlib'

const OUT_DIR = path.resolve(import.meta.dirname, '..', 'public', 'icons')
fs.mkdirSync(OUT_DIR, { recursive: true })

function crc32(buf) {
  let c
  const table = crc32.table || (crc32.table = (() => {
    const t = new Uint32Array(256)
    for (let n = 0; n < 256; n++) {
      c = n
      for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1
      t[n] = c >>> 0
    }
    return t
  })())
  let crc = 0xffffffff
  for (let i = 0; i < buf.length; i++) crc = table[(crc ^ buf[i]) & 0xff] ^ (crc >>> 8)
  return (crc ^ 0xffffffff) >>> 0
}

function chunk(type, data) {
  const typeBuf = Buffer.from(type, 'ascii')
  const len = Buffer.alloc(4)
  len.writeUInt32BE(data.length, 0)
  const crcBuf = Buffer.alloc(4)
  crcBuf.writeUInt32BE(crc32(Buffer.concat([typeBuf, data])), 0)
  return Buffer.concat([len, typeBuf, data, crcBuf])
}

function makePng(size, [r, g, b]) {
  const ihdr = Buffer.alloc(13)
  ihdr.writeUInt32BE(size, 0)
  ihdr.writeUInt32BE(size, 4)
  ihdr.writeUInt8(8, 8) // bit depth
  ihdr.writeUInt8(2, 9) // color type: RGB
  ihdr.writeUInt8(0, 10)
  ihdr.writeUInt8(0, 11)
  ihdr.writeUInt8(0, 12)

  // simple raw scanlines: filter byte 0 + RGB per pixel, with a train emoji-ish
  // dark background + amber circle badge in the center.
  const rowSize = 1 + size * 3
  const raw = Buffer.alloc(rowSize * size)
  const cx = size / 2
  const cy = size / 2
  const radius = size * 0.32
  for (let y = 0; y < size; y++) {
    const rowStart = y * rowSize
    raw[rowStart] = 0 // filter type none
    for (let x = 0; x < size; x++) {
      const dx = x - cx
      const dy = y - cy
      const inCircle = dx * dx + dy * dy <= radius * radius
      const off = rowStart + 1 + x * 3
      if (inCircle) {
        raw[off] = 245
        raw[off + 1] = 158
        raw[off + 2] = 11
      } else {
        raw[off] = r
        raw[off + 1] = g
        raw[off + 2] = b
      }
    }
  }

  const idat = zlib.deflateSync(raw)
  const signature = Buffer.from([137, 80, 78, 71, 13, 10, 26, 10])
  return Buffer.concat([
    signature,
    chunk('IHDR', ihdr),
    chunk('IDAT', idat),
    chunk('IEND', Buffer.alloc(0)),
  ])
}

const bg = [15, 23, 42] // rail-900

fs.writeFileSync(path.join(OUT_DIR, 'icon-192.png'), makePng(192, bg))
fs.writeFileSync(path.join(OUT_DIR, 'icon-512.png'), makePng(512, bg))

console.log('[make-icons] iconos generados en public/icons/')

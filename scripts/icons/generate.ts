/* eslint-disable no-console */
/**
 * Draws the icons of the app from code (public/favicon.ico, icon-192.png,
 * icon-512.png, icon-maskable-512.png and apple-touch-icon.png): the
 * hourglass of the logo, with its pink and blue sand, over a pastel card
 * tilted on a lavender background. The maskable one keeps everything inside
 * the safe circle (80 %) so Android can crop it to any shape. Also the icon
 * of the Play Store listing, in art/store/.
 *
 * Usage: yarn icons
 */
import { mkdirSync, writeFileSync } from 'node:fs'
import path from 'node:path'

const OUTLINE = '#2b2350'
const MAGENTA = '#ff5a8a'
const CYAN = '#4fc3ff'
const GOLD = '#ffc93c'
const PUBLIC_DIR = path.join(process.cwd(), 'public')
/** The Play Store icon (square, full bleed: Play rounds it). */
const STORE_ICON = path.join(process.cwd(), 'art', 'store', 'icon-512.png')

/**
 * The icon as SVG, 512×512. `scale` shrinks the drawing toward the center
 * (the maskable icon); `rounded` gives the background rounded corners (the
 * plain icons; the maskable one and the Apple one are cropped by the system).
 */
export function iconSvg({ scale = 1, rounded = true }: { scale?: number; rounded?: boolean } = {}): string {
  const radius = rounded ? 112 : 0

  return `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
  <defs>
    <linearGradient id="background" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#ede7ff"/>
      <stop offset="0.55" stop-color="#fff8ee"/>
      <stop offset="1" stop-color="#ffe9dc"/>
    </linearGradient>
    <linearGradient id="card" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#a98bff"/>
      <stop offset="1" stop-color="#8a5cff"/>
    </linearGradient>
  </defs>
  <rect width="512" height="512" rx="${radius}" fill="url(#background)"/>
  <g transform="translate(256 256) scale(${scale}) translate(-256 -256)">
    <g transform="rotate(-14 256 256)">
      <rect x="132" y="92" width="248" height="328" rx="30" fill="url(#card)" stroke="${OUTLINE}" stroke-width="14"/>
      <rect x="152" y="112" width="208" height="288" rx="18" fill="none" stroke="#ffffff" stroke-opacity="0.45" stroke-width="8"/>
    </g>
    <circle cx="378" cy="128" r="30" fill="${GOLD}" stroke="${OUTLINE}" stroke-width="10"/>
    <g transform="translate(256 262) scale(10.5) translate(-12 -16)">
      <path d="M4 2h16v4c0 4-4 7-6 10 2 3 6 6 6 10v4H4v-4c0-4 4-7 6-10-2-3-6-6-6-10V2z" fill="#ffffff" stroke="${OUTLINE}" stroke-width="2.2" stroke-linejoin="round"/>
      <path d="M7 7h10c-1 2.5-3 4.5-5 7-2-2.5-4-4.5-5-7z" fill="${MAGENTA}"/>
      <path d="M12 21c2 1.6 4.5 3.6 5 6H7c.5-2.4 3-4.4 5-6z" fill="${CYAN}"/>
    </g>
  </g>
</svg>`
}

/** An .ico file holding PNG images (every browser reads them). */
export function icoFile(images: { size: number; png: Buffer }[]): Buffer {
  const header = Buffer.alloc(6 + images.length * 16)
  let offset = header.length

  header.writeUInt16LE(0, 0)
  header.writeUInt16LE(1, 2)
  header.writeUInt16LE(images.length, 4)
  images.forEach(({ size, png }, index) => {
    const entry = 6 + index * 16

    header.writeUInt8(size >= 256 ? 0 : size, entry)
    header.writeUInt8(size >= 256 ? 0 : size, entry + 1)
    header.writeUInt8(0, entry + 2)
    header.writeUInt8(0, entry + 3)
    header.writeUInt16LE(1, entry + 4)
    header.writeUInt16LE(32, entry + 6)
    header.writeUInt32LE(png.length, entry + 8)
    header.writeUInt32LE(offset, entry + 12)
    offset += png.length
  })

  return Buffer.concat([header, ...images.map((image) => image.png)])
}

async function main(): Promise<void> {
  const { default: sharp } = await import('sharp')
  const render = (svg: string, size: number) => sharp(Buffer.from(svg)).resize(size, size).png().toBuffer()
  const plain = iconSvg()
  const outputs: [string, Buffer][] = [
    ['icon-512.png', await render(plain, 512)],
    ['icon-192.png', await render(plain, 192)],
    ['icon-maskable-512.png', await render(iconSvg({ scale: 0.78, rounded: false }), 512)],
    ['apple-touch-icon.png', await render(iconSvg({ rounded: false }), 180)],
    [
      'favicon.ico',
      icoFile(await Promise.all([16, 32, 48, 64].map(async (size) => ({ size, png: await render(plain, size) }))))
    ]
  ]

  for (const [file, data] of outputs) {
    writeFileSync(path.join(PUBLIC_DIR, file), data)
    console.log(`public/${file} (${Math.round(data.length / 1024)} KB)`)
  }

  mkdirSync(path.dirname(STORE_ICON), { recursive: true })
  writeFileSync(STORE_ICON, await render(iconSvg({ rounded: false }), 512))
  console.log(path.relative(process.cwd(), STORE_ICON))
}

if (require.main === module) {
  main().catch((error) => {
    console.error(error)
    process.exit(1)
  })
}

/* eslint-disable no-console */
/**
 * Processes the card art (docs/PLAN.md, section 9.2): each image of
 * art/source/cards/ (named as in art/catalog.csv; .png, .jpg or .webp) is
 * cropped to its frame, shrunk to WebP in public/cards/ and listed in
 * public/cards/manifest.json (with a version, so browsers pick up a new one).
 * It prints each image the moment it is processed, with a progress bar at the
 * bottom, and only processes what changed since the last run.
 *
 * Usage: yarn art            (every image, then a summary of what is missing by batch)
 *        yarn art --watch    (also stays watching art/source/cards/ and processes each new or changed image)
 *        yarn art --force    (processes everything again)
 */
import { createHash } from 'node:crypto'
import { existsSync, mkdirSync, readFileSync, statSync, writeFileSync } from 'node:fs'
import path from 'node:path'
import { ArtRow, artRows } from '@/scripts/art/catalog'

export const SOURCE_DIR = path.join(process.cwd(), 'art', 'source', 'cards')
export const OUTPUT_DIR = path.join(process.cwd(), 'public', 'cards')
export const MANIFEST_FILE = path.join(OUTPUT_DIR, 'manifest.json')
const EXTENSIONS = ['.png', '.jpg', '.jpeg', '.webp']

/** Size of the processed images (the card window is 4:5; the hero portrait, square). */
export const OUTPUT_SIZE = { card: { width: 640, height: 800 }, portrait: { width: 512, height: 512 } }

export type ArtStatus = 'ok' | 'unchanged' | 'missing' | 'error'

export interface ArtResult {
  status: ArtStatus
  detail: string
}

/** The image of a row in art/source/cards/, whatever its extension (null: not there yet). */
export function sourceOf(row: ArtRow, dir: string = SOURCE_DIR): string | null {
  const base = row.file.replace(/\.png$/, '')

  for (const extension of EXTENSIONS) {
    const candidate = path.join(dir, `${base}${extension}`)

    if (existsSync(candidate)) {
      return candidate
    }
  }

  return null
}

/** The manifest key and file name of a row's processed image. */
export function outputName(row: ArtRow): string {
  return row.file.replace(/\.png$/, '')
}

function readManifest(): Record<string, string> {
  try {
    return JSON.parse(readFileSync(MANIFEST_FILE, 'utf-8')) as Record<string, string>
  } catch {
    return {}
  }
}

function writeManifest(manifest: Record<string, string>): void {
  const sorted = Object.fromEntries(Object.entries(manifest).sort(([a], [b]) => a.localeCompare(b)))

  writeFileSync(MANIFEST_FILE, `${JSON.stringify(sorted, null, 2)}\n`)
}

const kb = (bytes: number) => `${Math.max(1, Math.round(bytes / 1024))} KB`

/** Processes one image: crop to its frame and WebP. */
export async function processRow(row: ArtRow, manifest: Record<string, string>, force = false): Promise<ArtResult> {
  const source = sourceOf(row)
  const name = outputName(row)
  const target = path.join(OUTPUT_DIR, `${name}.webp`)

  if (!source) {
    delete manifest[name]

    return { status: 'missing', detail: '' }
  }

  if (!force && existsSync(target) && statSync(target).mtimeMs >= statSync(source).mtimeMs && manifest[name]) {
    return { status: 'unchanged', detail: '' }
  }

  try {
    const { default: sharp } = await import('sharp')
    const size = row.portrait ? OUTPUT_SIZE.portrait : OUTPUT_SIZE.card
    const image = sharp(source)
    const meta = await image.metadata()
    const output = await image
      .resize(size.width, size.height, { fit: 'cover', position: 'attention' })
      .webp({ quality: 82 })
      .toBuffer()

    writeFileSync(target, output)
    manifest[name] = createHash('sha1').update(output).digest('hex').slice(0, 8)

    return { status: 'ok', detail: `${meta.width}×${meta.height} → ${kb(output.length)}` }
  } catch (error) {
    return { status: 'error', detail: (error as Error).message }
  }
}

const COLORS: Record<ArtStatus, string> = {
  ok: '\x1b[32m',
  unchanged: '\x1b[90m',
  missing: '\x1b[33m',
  error: '\x1b[31m'
}
const tty = process.stdout.isTTY

function line(index: number, total: number, row: ArtRow, result: ArtResult): string {
  const counter = `[${String(index).padStart(String(total).length)}/${total}]`
  const label = `${row.batch}/${outputName(row)} `.padEnd(44, '.')
  const status = tty ? `${COLORS[result.status]}${result.status}\x1b[0m` : result.status

  return `${counter} ${label} ${status.padEnd(tty ? 18 : 9)} ${result.detail}`.trimEnd()
}

function bar(done: number, total: number): string {
  const width = 30
  const filled = Math.round((done / total) * width)

  return `${'█'.repeat(filled)}${'░'.repeat(width - filled)} ${done}/${total}`
}

/** Prints a line above the progress bar (the bar is redrawn below it on a terminal). */
function print(text: string, progress?: string): void {
  if (tty) {
    process.stdout.write(`\r\x1b[2K${text}\n${progress ?? ''}`)
  } else {
    console.log(text)
  }
}

/** Every image of the catalog, one by one. Returns the results by row. */
export async function processAll(force = false): Promise<Map<ArtRow, ArtResult>> {
  const rows = artRows()
  const manifest = readManifest()
  const results = new Map<ArtRow, ArtResult>()

  mkdirSync(OUTPUT_DIR, { recursive: true })

  for (const [index, row] of rows.entries()) {
    const result = await processRow(row, manifest, force)

    results.set(row, result)
    print(line(index + 1, rows.length, row, result), bar(index + 1, rows.length))
  }

  if (tty) {
    process.stdout.write('\r\x1b[2K')
  }

  writeManifest(manifest)

  return results
}

function summary(results: Map<ArtRow, ArtResult>): void {
  const byBatch = new Map<string, { total: number; missing: number; errors: number }>()

  for (const [row, result] of results) {
    const entry = byBatch.get(row.batch) ?? { total: 0, missing: 0, errors: 0 }

    entry.total++
    entry.missing += result.status === 'missing' ? 1 : 0
    entry.errors += result.status === 'error' ? 1 : 0
    byBatch.set(row.batch, entry)
  }

  const counts = [...results.values()].reduce<Record<string, number>>((all, result) => {
    all[result.status] = (all[result.status] ?? 0) + 1

    return all
  }, {})

  console.log(
    `\n${results.size} images: ${counts.ok ?? 0} processed, ${counts.unchanged ?? 0} unchanged, ` +
      `${counts.missing ?? 0} missing, ${counts.error ?? 0} with errors.`
  )

  for (const [batch, entry] of byBatch) {
    if (entry.missing || entry.errors) {
      console.log(
        `  ${batch.padEnd(24)} ${entry.total - entry.missing - entry.errors}/${entry.total}` +
          `${entry.missing ? `  missing ${entry.missing}` : ''}${entry.errors ? `  errors ${entry.errors}` : ''}`
      )
    }
  }
}

/** Watches art/source/cards/ and processes each image as soon as it appears or changes. */
async function watch(): Promise<void> {
  const { watch: chokidar } = await import('chokidar')

  mkdirSync(SOURCE_DIR, { recursive: true })
  console.log(`\nWatching ${path.relative(process.cwd(), SOURCE_DIR)}/ (Ctrl+C to stop)...`)

  const handle = async (file: string) => {
    const base = path.basename(file).replace(/\.(png|jpe?g|webp)$/i, '')
    const rows = artRows()
    const row = rows.find((candidate) => outputName(candidate) === base)

    if (!row) {
      console.log(`${path.basename(file)}: no card uses this name (see art/catalog.csv)`)

      return
    }

    const manifest = readManifest()
    const result = await processRow(row, manifest, true)

    writeManifest(manifest)
    print(line(rows.indexOf(row) + 1, rows.length, row, result))
  }

  chokidar(SOURCE_DIR, { ignoreInitial: true, awaitWriteFinish: { stabilityThreshold: 300 } })
    .on('add', (file) => void handle(file))
    .on('change', (file) => void handle(file))
}

if (require.main === module) {
  const args = process.argv.slice(2)

  processAll(args.includes('--force'))
    .then(async (results) => {
      summary(results)

      if (args.includes('--watch')) {
        await watch()
      }
    })
    .catch((error) => {
      console.error(error)
      process.exit(1)
    })
}

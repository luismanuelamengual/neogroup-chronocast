/* eslint-disable no-console */
/**
 * The art prompts (docs/PLAN.md, section 9.1): writes art/catalog.csv (batch,
 * file, width, height, prompt) and art/catalog.md from the cards themselves,
 * so it never needs to be kept by hand. One batch per group of the catalog
 * (neutral, each faction, each class, each hero with its own cards). Heroes
 * get a second, square image: their portrait on the board. First of all, the
 * card backs (batch `backs`, their images in art/source/backs/).
 *
 * Usage: yarn art:catalog
 */
import { mkdirSync, writeFileSync } from 'node:fs'
import path from 'node:path'
import { CARD_FILES } from '@/app/(protected)/(cards)/cards/index.generated'
import { CARD_BACKS, DEFAULT_CARD_BACK } from '@/app/(protected)/(cards)/data/cardBacks'
import { cardGroup } from '@/app/(protected)/(cards)/utils/cardGroup'
import { CardDefinition } from '@/app/(protected)/(engine)/models/CardDefinition'
import { FACTION_STYLES } from '@/scripts/art/factions'

export const BASE_PROMPT =
  'Collectible card game illustration, painted cartoon style, very vivid and saturated colors, high contrast, ' +
  'clean thick outlines, dramatic lighting, one clear main subject in sharp focus filling most of the frame, ' +
  'simple soft-focus background with few objects, muted and darker than the subject, ' +
  'vertical framing, no text, no frame, no watermark'

export const CARD_SIZE = { width: 1024, height: 1280 }

/**
 * The default back of every card (face down in packs, the starter and the
 * rival's hand): simple, with the name of the game. The others, sold in the
 * shop, have their prompts in art/card-backs.md. Backs are 5:7, the shape of
 * the card.
 */
export const CARD_BACK_PROMPT =
  'Collectible card game card back design, painted cartoon style, very vivid and saturated colors, high' +
  ' contrast, clean thick outlines, soft magical lighting, perfectly symmetric ornamental composition c' +
  'entered on the card, vertical 5:7 framing. In the center a polished golden hourglass with glowing vi' +
  'olet sand, set inside a round brass clock dial with roman numerals and two small interlocking gears ' +
  'peeking from behind it, a soft violet glow and a few sparkles around it. Across the lower third a cu' +
  'rved gold ribbon banner with the word "ChronoCast" in bold rounded fantasy lettering, cream letters ' +
  'with a dark violet outline, perfectly spelled. Rich deep violet to midnight indigo background with a' +
  ' faint engraved pattern of concentric clock rings and tiny stars. Elegant gold border with rounded c' +
  'orners, a thin inner line and a small hourglass ornament at the top and bottom center. Polished and ' +
  'premium but uncluttered, no other text, no watermark'

export const CARD_BACK_SIZE = { width: 1000, height: 1400 }

export const PORTRAIT_SIZE = { width: 1024, height: 1024 }

export interface ArtRow {
  batch: string
  /** The image file to create in art/source/cards/. */
  file: string
  width: number
  height: number
  prompt: string
  /** The card it belongs to. */
  cardId: string
  portrait: boolean
  /** A card back (art/source/backs/ → public/backs/): 5:7, the whole card, cropped from its center. */
  back?: boolean
}

/** The batch of a card: its group in the catalog, from its restriction (not from its file). */
export function batchOf(card: CardDefinition): string {
  const { kind, name } = cardGroup(card)

  return kind === 'neutral' ? 'neutral' : `${kind}-${name}`
}

const BATCH_ORDER = ['neutral', 'side', 'faction', 'hero']

/**
 * Abilities, traps, gear, artifacts and items show the thing itself: the spell,
 * the object or the effect, never someone casting or holding it (that made the
 * same few characters show up on many cards).
 */
export const OBJECT_ONLY =
  'the object or magical effect itself is the only subject, no people, no characters, no hands, no creatures holding it'

export function promptFor(card: CardDefinition, portrait = false): string {
  const framing = portrait ? 'square close-up portrait of the face and shoulders, ' : ''
  const objectOnly = card.type === 'ally' || card.type === 'hero' ? '' : `${OBJECT_ONLY}. `
  // The look comes from the faction only: a card of one side (Dawn or Eclipse) does not get its own touch.
  const style = FACTION_STYLES[card.faction]

  return `${BASE_PROMPT}. ${style}. ${objectOnly}${framing}${card.art.subject}`
}

/** Every image the catalog needs, batch by batch. */
export function artRows(): ArtRow[] {
  const rows = CARD_FILES.flatMap(({ card }) => {
    const batch = batchOf(card)
    const main: ArtRow = {
      batch,
      file: `${card.id}.png`,
      ...CARD_SIZE,
      prompt: promptFor(card),
      cardId: card.id,
      portrait: false
    }

    return card.type === 'hero'
      ? [
          main,
          {
            batch,
            file: `${card.id}-portrait.png`,
            ...PORTRAIT_SIZE,
            prompt: promptFor(card, true),
            cardId: card.id,
            portrait: true
          }
        ]
      : [main]
  })
  const rank = (batch: string) => BATCH_ORDER.indexOf(batch.split('-')[0])
  const backs: ArtRow[] = CARD_BACKS.map(({ id }) => ({
    batch: 'backs',
    file: `${id}.png`,
    ...CARD_BACK_SIZE,
    prompt: id === DEFAULT_CARD_BACK ? CARD_BACK_PROMPT : `See "${id}" in art/card-backs.md`,
    cardId: id,
    portrait: false,
    back: true
  }))

  return [
    ...backs,
    ...rows.sort(
      (a, b) => rank(a.batch) - rank(b.batch) || a.batch.localeCompare(b.batch) || a.file.localeCompare(b.file)
    )
  ]
}

function csvCell(value: string | number): string {
  const text = String(value)

  return /[",\n]/.test(text) ? `"${text.replace(/"/g, '""')}"` : text
}

export function renderCsv(rows: ArtRow[]): string {
  const lines = [['batch', 'file', 'width', 'height', 'prompt'].join(',')]

  for (const row of rows) {
    lines.push([row.batch, row.file, row.width, row.height, row.prompt].map(csvCell).join(','))
  }

  return `${lines.join('\n')}\n`
}

export function renderMarkdown(rows: ArtRow[]): string {
  const out = [
    '# Art prompts',
    '',
    `Generated by \`yarn art:catalog\` from the cards (${rows.length} images). Do not edit it by hand.`,
    ''
  ]
  let batch = ''

  for (const row of rows) {
    if (row.batch !== batch) {
      batch = row.batch
      out.push(`## ${batch}`, '')
    }

    out.push(`**${row.file}** (${row.width}×${row.height})`, '', row.prompt, '')
  }

  return out.join('\n')
}

if (require.main === module) {
  const dir = path.join(process.cwd(), 'art')
  const rows = artRows()

  mkdirSync(dir, { recursive: true })
  writeFileSync(path.join(dir, 'catalog.csv'), renderCsv(rows))
  writeFileSync(path.join(dir, 'catalog.md'), renderMarkdown(rows))
  console.log(
    `art/catalog.csv and art/catalog.md: ${rows.length} images in ${new Set(rows.map((row) => row.batch)).size} batches.`
  )
}

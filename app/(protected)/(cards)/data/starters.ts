import { DeckList } from '@/app/(protected)/(engine)/models/DeckList'

/**
 * The starter heroes and their starter packs (docs/PLAN.md, section 6.2): the
 * hero plus 39 common and uncommon cards it can use, at most 4 copies each.
 * Hand-built (not random) so each one is a playable deck with a cost curve.
 */
const STARTER_LISTS: Record<string, [string, number][]> = {
  'legate-varro': [
    ['phalanx-recruit', 3],
    ['bronze-legionary', 3],
    ['bronze-cohort', 3],
    ['shieldwall-veteran', 3],
    ['centurion-drillmaster', 2],
    ['arena-champion', 3],
    ['testudo-squad', 1],
    ['ballista-crew', 2],
    ['varros-orders', 3],
    ['the-ninths-stand', 3],
    ['forced-march', 1],
    ['iron-gladius', 2],
    ['war-axe', 1],
    ['chainmail', 2],
    ['spiked-pauldrons', 1],
    ['legion-rations', 2],
    ['cohort-banner', 2],
    ['pila-volley', 2]
  ],
  'ilyra-starweaver': [
    ['apprentice-mage', 3],
    ['candle-keeper', 3],
    ['spellbinder', 3],
    ['crystal-sentinel', 3],
    ['owl-messenger', 2],
    ['starlit-unicorn', 3],
    ['pyromancer', 1],
    ['rune-golem', 2],
    ['falling-star', 3],
    ['constellation-weave', 3],
    ['arcane-missiles', 1],
    ['apprentice-wand', 2],
    ['staff-of-embers', 1],
    ['silk-robe', 2],
    ['mana-shield', 1],
    ['mana-crystal', 2],
    ['scroll-of-wisdom', 2],
    ['counter-rune', 2]
  ],
  'kora-wildfang': [
    ['dino-hatchling', 3],
    ['raptor-pack', 3],
    ['shaman-of-the-tribe', 3],
    ['herd-mother', 3],
    ['swamp-croc', 2],
    ['mossback-tortoise', 3],
    ['raptor-alpha', 1],
    ['elder-mammoth', 2],
    ['pounce', 3],
    ['wild-hunt', 3],
    ['feral-growth', 1],
    ['shortbow', 2],
    ['hunting-bow', 1],
    ['leather-jerkin', 2],
    ['ghillie-cloak', 1],
    ['healing-herbs', 2],
    ['amber-totem', 2],
    ['pit-trap', 2]
  ]
}

/** The heroes a new player chooses from. */
export const STARTER_HERO_IDS = Object.keys(STARTER_LISTS)

export function starterDeck(heroId: string): DeckList {
  const list = STARTER_LISTS[heroId]

  if (!list) {
    throw new Error(`"${heroId}" is not a starter hero`)
  }

  return { heroId, cards: list.flatMap(([cardId, count]) => Array.from({ length: count }, () => cardId)) }
}

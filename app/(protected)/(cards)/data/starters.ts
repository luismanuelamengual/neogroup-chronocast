import { DeckList } from '@/app/(protected)/(engine)/models/DeckList'

/**
 * The starter heroes and their starter packs (docs/PLAN.md, section 6.2): the
 * hero plus 39 common and uncommon cards it can use, at most 4 copies each.
 * Hand-built (not random) so each one is a playable deck with a cost curve.
 */
const STARTER_LISTS: Record<string, [string, number][]> = {
  'legate-varro': [
    ['loyal-charioteer', 3],
    ['augur-of-the-laurel', 3],
    ['hallowed-revenant', 3],
    ['unyielding-charioteer', 3],
    ['phalanx-of-bronze', 3],
    ['mercenary-of-the-crossroads', 2],
    ['thunderhead-of-dawn', 2],
    ['rally-of-steel', 3],
    ['imperial-horn', 3],
    ['frost-of-the-oracle', 2],
    ['sharp-crossbow', 2],
    ['cleaver-of-valor', 1],
    ['blessed-halo', 2],
    ['flickering-ward', 1],
    ['centurions-resolve', 2],
    ['tonic-of-the-wanderer', 2],
    ['dawn-sigil', 1],
    ['courage-of-the-last-stand', 1]
  ],
  'ilyra-starweaver': [
    ['enchantress-of-the-tower', 3],
    ['moonlit-wisp', 3],
    ['enchantress-of-the-archmage', 3],
    ['arcane-runecarver', 3],
    ['bounty-hunter-of-the-rift', 3],
    ['twilight-cryomancer', 2],
    ['satyr-of-embers', 2],
    ['barrage-of-the-comet', 3],
    ['flickering-bolt', 3],
    ['flickering-stance', 2],
    ['focus-of-lightning', 2],
    ['orb-of-storms', 1],
    ['flickering-ward', 2],
    ['flickering-mantle', 1],
    ['arcane-mine', 2],
    ['hourglass-shard-of-borrowed-hours', 2],
    ['serene-rune', 1],
    ['stray-strike', 1]
  ],
  'kora-wildfang': [
    ['scarred-raptor', 3],
    ['triceratops-of-the-herd', 3],
    ['thundering-raptor', 3],
    ['swift-pterodon', 3],
    ['wandering-wanderer', 3],
    ['stegosaur-of-the-first-fire', 2],
    ['faithful-cartographer', 2],
    ['armored-fury', 3],
    ['sudden-sprout', 3],
    ['tracking-horn', 2],
    ['keen-eyed-crossbow', 2],
    ['sharp-crossbow', 1],
    ['stray-leather-coat', 2],
    ['flickering-ward', 1],
    ['hungry-blessing', 2],
    ['blessed-idol', 2],
    ['dawn-sigil', 1],
    ['hunters-snare', 1]
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

import { STARTER_HERO_IDS, starterDeck } from '@/app/(protected)/(cards)/data/starters'
import { DeckList } from '@/app/(protected)/(engine)/models/DeckList'

/**
 * A basic deck for each hero that is not a starter: 39 of its common and
 * uncommon cards with a cost curve, its own and its faction's first. The
 * computer plays them in the campaigns, and the balance scripts use them.
 */
const HERO_DECK_LISTS: Record<string, [string, number][]> = {
  'ada-copperwick': [
    ['cog-apprentice', 3],
    ['spark-engineer', 3],
    ['steam-sentry', 3],
    ['clocktower-watchman', 3],
    ['boiler-brute', 2],
    ['mechanical-knight', 3],
    ['factory-foreman', 1],
    ['piston-golem', 2],
    ['galvanic-spark', 3],
    ['blueprint', 3],
    ['overclock', 1],
    ['apprentice-wand', 2],
    ['staff-of-embers', 1],
    ['silk-robe', 2],
    ['mana-shield', 1],
    ['pocket-watch', 2],
    ['spare-parts', 2],
    ['bear-trap-gears', 2]
  ],
  'aldric-dawnkeeper': [
    ['apprentice-mage', 3],
    ['candle-keeper', 3],
    ['spellbinder', 3],
    ['crystal-sentinel', 3],
    ['owl-messenger', 2],
    ['starlit-unicorn', 3],
    ['pyromancer', 1],
    ['rune-golem', 2],
    ['morning-prayer', 3],
    ['sunrise', 3],
    ['arcane-missiles', 1],
    ['lantern-of-dawn', 2],
    ['oak-scepter', 1],
    ['acolyte-vestments', 2],
    ['spirit-ward', 1],
    ['mana-crystal', 2],
    ['scroll-of-wisdom', 2],
    ['counter-rune', 2]
  ],
  'gideon-ironsteam': [
    ['cog-apprentice', 3],
    ['spark-engineer', 3],
    ['steam-sentry', 3],
    ['clocktower-watchman', 3],
    ['boiler-brute', 2],
    ['mechanical-knight', 3],
    ['factory-foreman', 1],
    ['piston-golem', 2],
    ['boiler-burst', 3],
    ['iron-resolve', 3],
    ['overclock', 1],
    ['iron-gladius', 2],
    ['war-axe', 1],
    ['chainmail', 2],
    ['spiked-pauldrons', 1],
    ['pocket-watch', 2],
    ['spare-parts', 2],
    ['bear-trap-gears', 2]
  ],
  'malachar-the-unmade': [
    ['grave-whisperer', 3],
    ['pact-keeper', 3],
    ['hollow-cultist', 3],
    ['carrion-swarm', 3],
    ['soul-harvester', 2],
    ['rotting-giant', 3],
    ['entropy-mage', 1],
    ['gravebound-colossus', 2],
    ['unravel', 3],
    ['void-rift', 3],
    ['dark-pact', 1],
    ['apprentice-wand', 2],
    ['staff-of-embers', 1],
    ['silk-robe', 2],
    ['mana-shield', 1],
    ['cursed-skull', 2],
    ['soul-jar', 2],
    ['grasping-dead', 2]
  ],
  'nysa-goldbow': [
    ['phalanx-recruit', 3],
    ['bronze-legionary', 3],
    ['bronze-cohort', 3],
    ['shieldwall-veteran', 3],
    ['centurion-drillmaster', 2],
    ['arena-champion', 3],
    ['testudo-squad', 1],
    ['ballista-crew', 2],
    ['arrow-of-the-sun', 3],
    ['hunt-of-the-goddess', 3],
    ['forced-march', 1],
    ['shortbow', 2],
    ['hunting-bow', 1],
    ['leather-jerkin', 2],
    ['ghillie-cloak', 1],
    ['legion-rations', 2],
    ['cohort-banner', 2],
    ['pila-volley', 2]
  ],
  'nyx-hollowsong': [
    ['grave-whisperer', 3],
    ['pact-keeper', 3],
    ['hollow-cultist', 3],
    ['carrion-swarm', 3],
    ['soul-harvester', 2],
    ['rotting-giant', 3],
    ['entropy-mage', 1],
    ['gravebound-colossus', 2],
    ['lullaby-of-the-lost', 3],
    ['requiem', 3],
    ['dark-pact', 1],
    ['oak-scepter', 2],
    ['sun-mace', 1],
    ['acolyte-vestments', 2],
    ['spirit-ward', 1],
    ['cursed-skull', 2],
    ['soul-jar', 2],
    ['grasping-dead', 2]
  ],
  'ooma-bonewhisper': [
    ['dino-hatchling', 3],
    ['raptor-pack', 3],
    ['shaman-of-the-tribe', 3],
    ['herd-mother', 3],
    ['swamp-croc', 2],
    ['mossback-tortoise', 3],
    ['raptor-alpha', 1],
    ['elder-mammoth', 2],
    ['bone-reading', 3],
    ['spirit-of-the-herd', 3],
    ['feral-growth', 1],
    ['oak-scepter', 2],
    ['sun-mace', 1],
    ['acolyte-vestments', 2],
    ['spirit-ward', 1],
    ['healing-herbs', 2],
    ['amber-totem', 2],
    ['pit-trap', 2]
  ],
  'ryn-voltblade': [
    ['holo-decoy', 3],
    ['neon-dancer', 3],
    ['security-drone', 3],
    ['synth-brawler', 3],
    ['glitch-runner', 2],
    ['cyber-samurai', 3],
    ['hover-biker', 1],
    ['mech-trooper', 2],
    ['lightning-dash', 3],
    ['thunderclap', 3],
    ['adrenaline-shot', 1],
    ['iron-gladius', 2],
    ['war-axe', 1],
    ['chainmail', 2],
    ['spiked-pauldrons', 1],
    ['stim-pack', 2],
    ['cloaking-device', 2],
    ['firewall', 2]
  ],
  'vex-nightwire': [
    ['holo-decoy', 3],
    ['neon-dancer', 3],
    ['security-drone', 3],
    ['synth-brawler', 3],
    ['glitch-runner', 2],
    ['cyber-samurai', 3],
    ['hover-biker', 1],
    ['mech-trooper', 2],
    ['target-lock', 3],
    ['bounty-contract', 3],
    ['adrenaline-shot', 1],
    ['holo-crossbow', 2],
    ['shortbow', 1],
    ['leather-jerkin', 2],
    ['ghillie-cloak', 1],
    ['stim-pack', 2],
    ['cloaking-device', 2],
    ['firewall', 2]
  ]
}

/** Whether a hero has a basic deck (the starters and every hero above). */
export function hasBasicDeck(heroId: string): boolean {
  return STARTER_HERO_IDS.includes(heroId) || heroId in HERO_DECK_LISTS
}

/** A hero's basic deck: the starter deck for the starter heroes. */
export function basicDeck(heroId: string): DeckList {
  if (STARTER_HERO_IDS.includes(heroId)) {
    return starterDeck(heroId)
  }

  const list = HERO_DECK_LISTS[heroId]

  if (!list) {
    throw new Error(`"${heroId}" has no basic deck`)
  }

  return { heroId, cards: list.flatMap(([cardId, count]) => Array.from({ length: count }, () => cardId)) }
}

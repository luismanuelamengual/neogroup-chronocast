import { STARTER_HERO_IDS, starterDeck } from '@/app/(protected)/(cards)/data/starters'
import { DeckList } from '@/app/(protected)/(engine)/models/DeckList'

/**
 * A basic deck for each hero that is not a starter: 39 of its common and
 * uncommon cards with a cost curve, its own and its faction's first. The
 * computer plays them in the campaigns, and the balance scripts use them.
 */
const HERO_DECK_LISTS: Record<string, [string, number][]> = {
  'ada-copperwick': [
    ['timeless-fortune-teller', 3],
    ['machinist-of-brass', 3],
    ['experimental-aeronaut', 3],
    ['machinist-of-the-foundry', 3],
    ['grave-hound-of-grace', 3],
    ['wind-up-mechanic', 2],
    ['dreadnought-of-the-workshop', 2],
    ['barrage-of-the-comet', 3],
    ['spike-of-storms', 3],
    ['blast-of-lightning', 2],
    ['frozen-wand', 2],
    ['scepter-of-storms', 1],
    ['flickering-ward', 2],
    ['blessed-halo', 1],
    ['restless-banner', 2],
    ['timeless-rune', 2],
    ['blessed-idol', 1],
    ['lantern-of-the-wanderer', 1]
  ],
  'caelus-the-usurper': [
    ['loyal-gorgon', 3],
    ['augur-of-the-laurel', 3],
    ['hydra-of-the-senate', 3],
    ['laureled-sentinel', 3],
    ['eternal-haruspex', 3],
    ['venomous-data-thief', 2],
    ['wandering-ferryman', 2],
    ['furious-sabotage', 3],
    ['courage-of-iron', 3],
    ['unbroken-plan', 2],
    ['bloodied-glaive', 2],
    ['harpoon-of-the-ambush', 1],
    ['kite-shield-of-iron', 2],
    ['stray-leather-coat', 1],
    ['relentless-rune', 2],
    ['iron-mark', 2],
    ['altar-of-lost-time', 1],
    ['might-of-the-warlord', 1]
  ],
  'chancellor-brassmaw': [
    ['brass-steam-knight', 3],
    ['clockwork-hound-of-coal', 3],
    ['wind-up-soldier-of-pistons', 3],
    ['experimental-aeronaut', 3],
    ['overclocked-piston-titan', 3],
    ['wandering-ferryman', 2],
    ['dreadnought-of-the-workshop', 2],
    ['flickering-muster', 3],
    ['storm-called-strike', 3],
    ['spike-of-storms', 2],
    ['scepter-of-flame', 2],
    ['focus-of-lightning', 1],
    ['frozen-ward', 2],
    ['stray-leather-coat', 1],
    ['lantern-of-flame', 2],
    ['hourglass-shard-of-borrowed-hours', 2],
    ['tonic-of-the-wanderer', 1],
    ['rusty-sabotage', 1]
  ],
  'malachar-the-unmade': [
    ['timeless-fortune-teller', 3],
    ['crawler-of-the-grave', 3],
    ['relentless-hitman', 3],
    ['nightmare-of-the-abyss', 3],
    ['rotting-hierophant', 3],
    ['shade-of-dying-stars', 2],
    ['ethereal-cockatrice', 2],
    ['astral-bolt', 3],
    ['blast-of-lightning', 3],
    ['scholarly-daze', 2],
    ['longbow-of-the-silent-trail', 2],
    ['focus-of-lightning', 1],
    ['flickering-mantle', 2],
    ['circlet-of-flame', 1],
    ['restless-ration', 2],
    ['wandering-monolith', 2],
    ['rift-touched-idol', 1],
    ['flickering-muster', 1]
  ],
  'morgrath-lich-abbot': [
    ['virus-of-the-silent-trail', 3],
    ['stone-golem-of-mana', 3],
    ['moonlit-basilisk', 3],
    ['relentless-hitman', 3],
    ['firedrake-of-the-moon', 3],
    ['dilophosaur-of-the-silent-trail', 2],
    ['crystal-wisp', 2],
    ['flickering-bolt', 3],
    ['blazing-daze', 3],
    ['frost-of-the-arcanum', 2],
    ['focus-of-lightning', 2],
    ['frozen-wand', 1],
    ['flickering-ward', 2],
    ['frozen-ward', 1],
    ['arcane-mine', 2],
    ['old-potion', 2],
    ['rift-touched-idol', 1],
    ['flickering-stance', 1]
  ],
  'nyx-hollowsong': [
    ['bone-knight-of-the-void', 3],
    ['satyr-of-renewal', 3],
    ['forsaken-zombie', 3],
    ['bone-knight-of-dying-stars', 3],
    ['nymph-of-the-ancestors', 3],
    ['ashen-skeleton', 2],
    ['hallowed-dream-reader', 2],
    ['blessed-secret', 3],
    ['courage-of-spirits', 3],
    ['respite-of-mercy', 2],
    ['lantern-staff-of-renewal', 2],
    ['serene-prayer-staff', 1],
    ['stray-leather-coat', 2],
    ['spirit-bound-shroud', 1],
    ['tonic-of-the-wanderer', 2],
    ['flask-of-dawn', 2],
    ['hex-of-dawn', 1],
    ['rally-of-grace', 1]
  ],
  'ooma-bonewhisper': [
    ['pilgrim-of-dusk', 3],
    ['dire-wolf-of-the-fang', 3],
    ['feral-healer', 3],
    ['tar-soaked-sabertooth', 3],
    ['ash-covered-stonethrower', 3],
    ['venomous-data-thief', 2],
    ['thundering-gatherer', 2],
    ['courage-of-spirits', 3],
    ['bloodied-echo', 3],
    ['armored-fury', 2],
    ['scepter-of-flame', 2],
    ['longbow-of-the-silent-trail', 1],
    ['silk-wrap-of-ruin', 2],
    ['spirit-bound-shroud', 1],
    ['sundial-of-borrowed-hours', 2],
    ['wandering-monolith', 2],
    ['faithful-bomb', 1],
    ['weary-stasis', 1]
  ],
  'queen-static': [
    ['midnight-mech', 3],
    ['faithful-wanderer', 3],
    ['encrypted-mech', 3],
    ['dilophosaur-of-the-silent-trail', 3],
    ['wandering-ferryman', 3],
    ['fixer-of-the-datastream', 2],
    ['holo-mech', 2],
    ['tracking-horn', 3],
    ['rally-of-the-hawk', 3],
    ['keen-eyed-daze', 2],
    ['longbow-of-the-silent-trail', 2],
    ['sharp-crossbow', 1],
    ['bracers-of-the-ambush', 2],
    ['stray-leather-coat', 1],
    ['clock-of-dusk', 2],
    ['sundial-of-borrowed-hours', 2],
    ['rift-touched-idol', 1],
    ['spike-of-the-hunt', 1]
  ],
  'vex-nightwire': [
    ['cyber-hound-of-the-grid', 3],
    ['netrunner-of-the-grid', 3],
    ['virus-of-neon', 3],
    ['stone-golem-of-dawn', 3],
    ['codebreaker-of-neon', 3],
    ['ghost-of-the-mainframe', 2],
    ['mercenary-of-the-crossroads', 2],
    ['radiant-fury', 3],
    ['keen-eyed-daze', 3],
    ['tracking-horn', 2],
    ['sharp-crossbow', 2],
    ['longbow-of-the-hawk', 1],
    ['keen-eyed-hide', 2],
    ['flickering-ward', 1],
    ['faithful-bomb', 2],
    ['faithful-amulet', 2],
    ['hourglass-shard-of-borrowed-hours', 1],
    ['courage-of-the-ancestors', 1]
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

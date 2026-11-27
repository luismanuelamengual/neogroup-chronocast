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
    ['radiant-stance', 3],
    ['spike-of-storms', 3],
    ['blast-of-lightning', 2],
    ['sharp-crossbow', 2],
    ['focus-of-lightning', 1],
    ['flickering-ward', 2],
    ['kite-shield-of-iron', 1],
    ['ethereal-terminal', 2],
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
    ['insight-of-the-warlord', 3],
    ['marble-fury', 3],
    ['unbroken-plan', 2],
    ['warpick-of-rage', 2],
    ['harpoon-of-the-ambush', 1],
    ['kite-shield-of-iron', 2],
    ['kite-shield-of-rage', 1],
    ['faithful-amulet', 2],
    ['leech-of-lost-time', 2],
    ['bloodclock', 1],
    ['might-of-the-warlord', 1]
  ],
  'chancellor-brassmaw': [
    ['brass-steam-knight', 3],
    ['sharp-boar', 3],
    ['old-chrononaut', 3],
    ['wind-up-soldier-of-pistons', 3],
    ['experimental-aeronaut', 3],
    ['overclocked-piston-titan', 3],
    ['wandering-ferryman', 2],
    ['dreadnought-of-the-workshop', 2],
    ['borrowed-hour-of-lost-time', 3],
    ['spike-of-storms', 2],
    ['spirit-bound-bell', 2],
    ['focus-of-lightning', 1],
    ['flickering-ward', 2],
    ['battle-scarred-helm', 1],
    ['lantern-of-flame', 2],
    ['brazier-of-the-wanderer', 2],
    ['steam-turret', 2]
  ],
  'malachar-the-unmade': [
    ['tower-apprentice', 3],
    ['bone-rattler', 3],
    ['relentless-hitman', 3],
    ['old-chrononaut', 3],
    ['dilophosaur-of-the-silent-trail', 2],
    ['crystal-wisp', 2],
    ['astral-bolt', 3],
    ['flickering-bolt', 3],
    ['keen-eyed-daze', 3],
    ['frost-of-the-arcanum', 2],
    ['focus-of-lightning', 2],
    ['frozen-wand', 1],
    ['flickering-ward', 2],
    ['frozen-ward', 1],
    ['arcane-mine', 2],
    ['blast-of-lightning', 2],
    ['obelisk-of-flame', 1],
    ['open-grimoire', 1]
  ],
  'morgrath-lich-abbot': [
    ['timeless-fortune-teller', 3],
    ['crawler-of-the-grave', 3],
    ['relentless-hitman', 3],
    ['nightmare-of-the-abyss', 3],
    ['rotting-hierophant', 3],
    ['shade-of-dying-stars', 2],
    ['ethereal-cockatrice', 2],
    ['astral-bolt', 3],
    ['blast-of-lightning', 3],
    ['ashen-stasis', 2],
    ['longbow-of-the-silent-trail', 2],
    ['focus-of-lightning', 1],
    ['silk-wrap-of-ruin', 2],
    ['spirit-bound-shroud', 1],
    ['restless-ration', 1],
    ['crimson-moon', 2],
    ['obelisk-of-flame', 1],
    ['bloodied-echo', 2]
  ],
  'nyx-hollowsong': [
    ['bone-knight-of-the-void', 3],
    ['satyr-of-renewal', 3],
    ['forsaken-zombie', 3],
    ['bone-knight-of-dying-stars', 3],
    ['nymph-of-the-ancestors', 3],
    ['ashen-skeleton', 2],
    ['hallowed-dream-reader', 2],
    ['keen-eyed-blight', 3],
    ['courage-of-spirits', 3],
    ['echoes-of-the-pile', 2],
    ['lantern-staff-of-renewal', 2],
    ['focus-of-lightning', 1],
    ['plate-of-steel', 2],
    ['spirit-bound-shroud', 1],
    ['tonic-of-the-wanderer', 2],
    ['flask-of-dawn', 2],
    ['hex-of-dawn', 1],
    ['forsaken-resurrection', 1]
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
    ['nocturnal-call', 3],
    ['armored-fury', 2],
    ['spirit-bound-bell', 2],
    ['longbow-of-the-silent-trail', 1],
    ['cloak-of-the-quarry', 2],
    ['spirit-bound-shroud', 1],
    ['obelisk-of-flame', 4],
    ['faithful-bomb', 1],
    ['spike-of-the-hunt', 1]
  ],
  'queen-static': [
    ['midnight-mech', 3],
    ['faithful-wanderer', 3],
    ['encrypted-mech', 3],
    ['dilophosaur-of-the-silent-trail', 3],
    ['wandering-ferryman', 3],
    ['fixer-of-the-datastream', 2],
    ['holo-mech', 2],
    ['blazing-daze', 3],
    ['frost-of-ruin', 3],
    ['shackle-of-the-pack', 2],
    ['longbow-of-the-silent-trail', 2],
    ['sharp-crossbow', 1],
    ['plate-of-steel', 2],
    ['battle-scarred-helm', 1],
    ['crimson-moon', 2],
    ['obelisk-of-flame', 2],
    ['bloodclock', 1],
    ['glitched-plan', 1]
  ],
  'vex-nightwire': [
    ['cyber-hound-of-the-grid', 3],
    ['netrunner-of-the-grid', 3],
    ['virus-of-neon', 3],
    ['stone-golem-of-dawn', 3],
    ['codebreaker-of-neon', 3],
    ['ghost-of-the-mainframe', 2],
    ['mercenary-of-the-crossroads', 2],
    ['blessed-secret', 3],
    ['holo-secret', 3],
    ['barrage-of-chrome', 2],
    ['sharp-crossbow', 2],
    ['focus-of-lightning', 1],
    ['keen-eyed-hide', 2],
    ['flickering-ward', 1],
    ['faithful-bomb', 2],
    ['radiant-insignia', 2],
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

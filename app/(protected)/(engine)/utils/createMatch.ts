import { ALLY_SLOTS, STARTING_HAND } from '@/app/(protected)/(engine)/data/rules'
import { DeckList } from '@/app/(protected)/(engine)/models/DeckList'
import { MatchState, PlayerState } from '@/app/(protected)/(engine)/models/MatchState'
import { PLAYER_IDS, PlayerId } from '@/app/(protected)/(engine)/models/PlayerId'
import { MatchEngine } from '@/app/(protected)/(engine)/utils/engine'
import { startPhase } from '@/app/(protected)/(engine)/utils/phases'
import { getCard } from '@/app/(protected)/(engine)/utils/registry'
import { isRetired } from '@/app/(protected)/(engine)/utils/retired'

/** How a side starts beyond the rules (the campaign uses it for its adverse situations). */
export interface SideSetup {
  /** Allies already on the board, by card id (slot by slot from 0). */
  allies?: string[]
  chronosCapacity?: number
  /** Energy the hero starts with. */
  energy?: number
  extraHealth?: number
  location?: string
  weapon?: string
  armor?: string
  /** Cards in the opening hand (instead of 7). */
  handSize?: number
}

export interface MatchSetup {
  seed: number
  decks: Record<PlayerId, DeckList>
  setup?: Partial<Record<PlayerId, SideSetup>>
}

/** Creates a match: heroes in their slots, shuffled decks, opening hands, and phase 1 ready to be programmed. */
export function createMatch({ seed, decks, setup = {} }: MatchSetup): {
  state: MatchState
  events: MatchEngine['events']
} {
  const state: MatchState = {
    seed,
    rng: seed | 0,
    phase: 0,
    step: -1,
    status: 'planning',
    players: {} as Record<PlayerId, PlayerState>,
    nextUid: 1,
    result: null
  }
  const engine = new MatchEngine(state)

  for (const id of PLAYER_IDS) {
    const deck = decks[id]
    const hero = getCard(deck.heroId)
    const side = setup[id] ?? {}

    if (hero.type !== 'hero') {
      throw new Error(`"${deck.heroId}" is not a hero`)
    }

    const health = (hero.health ?? 50) + (side.extraHealth ?? 0)

    state.players[id] = {
      id,
      hero: {
        uid: engine.newUid(),
        cardId: hero.id,
        health,
        maxHealth: health,
        armor: 0,
        armorCard: null,
        weapon: null,
        attackedThisPhase: false,
        abilityUsedThisPhase: false,
        fallen: false
      },
      allies: Array.from({ length: ALLY_SLOTS }, () => null),
      hand: [],
      // The retired types (locations, for now) are left out of the deck.
      deck: deck.cards.filter((cardId) => !isRetired(getCard(cardId))).map((cardId) => engine.newCard(cardId)),
      discard: [],
      location: null,
      traps: [],
      artifacts: [],
      chronos: 0,
      chronosCapacity: side.chronosCapacity ?? 0,
      energy: side.energy ?? 0,
      sacrificesThisPhase: 0,
      fatigue: 0,
      idlePhases: 0,
      mulliganDone: false
    }

    engine.shuffle(state.players[id].deck)
  }

  for (const id of PLAYER_IDS) {
    const side = setup[id] ?? {}
    const player = state.players[id]

    side.allies?.forEach((cardId, slot) => engine.summon(id, engine.newCard(cardId), slot))

    if (side.location) {
      player.location = engine.newCard(side.location)
    }

    if (side.weapon) {
      const weapon = getCard(side.weapon)

      player.hero.weapon = {
        card: engine.newCard(side.weapon),
        attack: weapon.attack ?? 0,
        durability: weapon.durability ?? 1
      }
    }

    if (side.armor) {
      player.hero.armorCard = engine.newCard(side.armor)
      player.hero.armor = getCard(side.armor).armor ?? 0
    }

    engine.draw(id, Math.min(side.handSize ?? STARTING_HAND, player.deck.length))
  }

  // The opening hands are not part of what the players see happen.
  engine.events.length = 0
  startPhase(engine)

  return { state, events: engine.events }
}

/**
 * Mulligan, once and only before the first phase resolves: the chosen cards go
 * back to the deck, it is shuffled and as many are drawn.
 */
export function mulligan(state: MatchState, player: PlayerId, cardUids: number[]): MatchState {
  const next = structuredClone(state)
  const side = next.players[player]

  if (next.phase !== 1 || next.step !== -1 || side.mulliganDone) {
    return state
  }

  const engine = new MatchEngine(next)
  const returned = side.hand.filter((card) => cardUids.includes(card.uid))

  side.hand = side.hand.filter((card) => !cardUids.includes(card.uid))
  side.deck.push(...returned)
  engine.shuffle(side.deck)
  engine.draw(player, returned.length)
  side.mulliganDone = true

  return next
}

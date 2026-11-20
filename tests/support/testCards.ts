import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damage } from '@/app/(protected)/(engine)/effects'
import { CardDefinition } from '@/app/(protected)/(engine)/models/CardDefinition'
import { DeckList } from '@/app/(protected)/(engine)/models/DeckList'
import { Keyword } from '@/app/(protected)/(engine)/models/Keyword'
import { CardInstance, MatchState, Unit } from '@/app/(protected)/(engine)/models/MatchState'
import { emptyTimeline, PlannedAction, Timeline } from '@/app/(protected)/(engine)/models/PlannedAction'
import { PlayerId } from '@/app/(protected)/(engine)/models/PlayerId'
import { createMatch } from '@/app/(protected)/(engine)/utils/createMatch'
import { registerCards } from '@/app/(protected)/(engine)/utils/registry'

/** Small cards to test the rules one at a time, without depending on the real catalog. */
const base = {
  faction: 'neutral',
  restriction: { kind: 'any' },
  rarity: 'common',
  text: '',
  art: { subject: 'test' }
} as const

function ally(
  id: string,
  attack: number,
  health: number,
  keywords: Keyword[] = [],
  extra: Partial<CardDefinition> = {}
) {
  return defineCard({ ...base, id, type: 'ally', name: id, cost: 1, attack, health, keywords, ...extra })
}

export const TEST_CARDS: CardDefinition[] = [
  defineCard({
    ...base,
    id: 'test-hero',
    type: 'hero',
    name: 'Test Hero',
    cost: 0,
    health: 100,
    heroClass: 'warrior',
    restriction: { kind: 'hero', heroId: 'test-hero' }
  }),
  ally('test-filler', 1, 1),
  ally('test-soldier', 10, 20),
  ally('test-quick', 10, 10, ['quick']),
  ally('test-guard', 2, 30, ['guardian']),
  ally('test-archer', 5, 10, ['ranged']),
  ally('test-thorns', 1, 30, ['thorns'], { thorns: 5 }),
  ally('test-shield', 5, 10, ['shield']),
  ally('test-charger', 8, 8, ['charge'], { cost: 0 }),
  ally('test-bird', 5, 10, ['flying']),
  ally('test-echo', 5, 5, ['echo']),
  ally('test-poison', 1, 10, ['poison']),
  ally('test-vampire', 6, 10, ['lifesteal']),
  ally('test-frenzy', 5, 30, ['frenzy']),
  ally('test-sneak', 5, 10, ['stealth']),
  ally('test-cleaver', 10, 30, ['cleave']),
  ally('test-ghost', 4, 4, ['resurge']),
  ally('test-agile', 4, 10, ['agile']),
  defineCard({ ...base, id: 'test-sword', type: 'weapon', name: 'Test Sword', cost: 1, attack: 10, durability: 2 }),
  defineCard({ ...base, id: 'test-plate', type: 'armor', name: 'Test Plate', cost: 1, armor: 20 }),
  defineCard({
    ...base,
    id: 'test-zap',
    type: 'ability',
    name: 'Test Zap',
    cost: 1,
    targets: ['enemySlot'],
    onPlay(ctx) {
      damage(ctx, ctx.targets[0], 5)
    }
  }),
  defineCard({
    ...base,
    id: 'test-snare',
    type: 'trap',
    name: 'Test Snare',
    cost: 0,
    trigger: 'enemyAttack',
    onTrigger(_ctx, event) {
      event.cancel()
    }
  })
]

registerCards(TEST_CARDS)

/** A deck of fillers for the test hero. */
export function testDeck(size = 39): DeckList {
  return { heroId: 'test-hero', cards: Array.from({ length: size }, () => 'test-filler') }
}

/** A match between two test heroes, at phase 1, ready to be programmed. */
export function testMatch(seed = 1): MatchState {
  return createMatch({ seed, decks: { a: testDeck(), b: testDeck() } }).state
}

/** Puts an ally on the board, ready to act this phase. Returns it. */
export function place(state: MatchState, player: PlayerId, cardId: string, slot: number): Unit {
  const definition = TEST_CARDS.find((card) => card.id === cardId)!
  const unit: Unit = {
    uid: state.nextUid++,
    cardId,
    attack: definition.attack ?? 0,
    health: definition.health ?? 1,
    maxHealth: definition.health ?? 1,
    keywords: [...(definition.keywords ?? [])],
    thorns: definition.thorns ?? 0,
    shield: definition.keywords?.includes('shield') ?? false,
    enteredPhase: 0,
    enteredStep: -1,
    attacksThisPhase: 0,
    tempAttack: 0,
    stunnedUntilPhase: 0,
    echoUsed: false
  }

  state.players[player].allies[slot] = unit

  return unit
}

/** Adds a card to the hand of a player. Returns it. */
export function give(state: MatchState, player: PlayerId, cardId: string): CardInstance {
  const card = { uid: state.nextUid++, cardId }

  state.players[player].hand.push(card)

  return card
}

/** A timeline with the given actions first and "wait" after them. */
export function timeline(...actions: PlannedAction[]): Timeline {
  const result = emptyTimeline()

  actions.forEach((action, index) => (result[index] = action))

  return result
}

import { readFileSync } from 'node:fs'
import path from 'node:path'
import { describe, expect, it } from 'vitest'
import { CARD_FILES } from '@/app/(protected)/(cards)/cards/index.generated'
import { basicDeck } from '@/app/(protected)/(cards)/data/heroDecks'
import { PRICE_RANGES } from '@/app/(protected)/(cards)/data/rarities'
import { STARTER_HERO_IDS, starterDeck } from '@/app/(protected)/(cards)/data/starters'
import { ALL_CARDS, CARDS, HEROES } from '@/app/(protected)/(cards)/utils/catalog'
import { cardProblems } from '@/app/(protected)/(cards)/utils/defineCard'
import { CardDefinition } from '@/app/(protected)/(engine)/models/CardDefinition'
import { MatchState } from '@/app/(protected)/(engine)/models/MatchState'
import { emptyTimeline, PlannedAction, Timeline } from '@/app/(protected)/(engine)/models/PlannedAction'
import { SlotRef } from '@/app/(protected)/(engine)/models/SlotRef'
import { TargetKind } from '@/app/(protected)/(engine)/models/TargetKind'
import { createMatch } from '@/app/(protected)/(engine)/utils/createMatch'
import { validateDeck } from '@/app/(protected)/(engine)/utils/deckRules'
import { resolvePhase } from '@/app/(protected)/(engine)/utils/resolvePhase'
import { CARDS_ES } from '@/app/i18n/cards/es'
import { renderIndex } from '@/scripts/cards-index'

const INDEX_FILE = path.join(process.cwd(), 'app', '(protected)', '(cards)', 'cards', 'index.generated.ts')

/** The folder of a card tells which heroes can use it (docs/PLAN.md, section 5.1). */
function expectedRestriction(file: string, card: CardDefinition): boolean {
  const [group, name] = file.split('/')
  const restriction = card.restriction

  switch (group) {
    case 'neutral':
      return restriction.kind === 'any' && card.faction === 'neutral'
    case 'factions':
      return restriction.kind === 'faction' && restriction.faction === name && card.faction === name
    case 'classes':
      return restriction.kind === 'class' && restriction.heroClass === name
    case 'heroes':
      return restriction.kind === 'hero' && restriction.heroId === name
    default:
      return false
  }
}

describe('the card catalog', () => {
  it('the generated index is up to date', () => {
    expect(readFileSync(INDEX_FILE, 'utf-8')).toBe(renderIndex())
  })

  it('every card is named after its file and ids are unique', () => {
    for (const { file, card } of CARD_FILES) {
      expect(path.basename(file), file).toBe(card.id)
    }

    expect(new Set(ALL_CARDS.map((card) => card.id)).size).toBe(ALL_CARDS.length)
  })

  it('every card lives in the folder that matches its restriction', () => {
    for (const { file, card } of CARD_FILES) {
      expect(expectedRestriction(file, card), file).toBe(true)
    }
  })

  it('every card passes the format checks', () => {
    for (const card of ALL_CARDS) {
      expect(cardProblems(card), card.id).toEqual([])
    }
  })

  it('every card that can be bought has a price within its rarity range', () => {
    for (const card of CARDS.filter((candidate) => candidate.type !== 'hero' && !candidate.reward)) {
      const { min, max } = PRICE_RANGES[card.rarity]

      expect(card.price, card.id).toBeGreaterThanOrEqual(min)
      expect(card.price, card.id).toBeLessThanOrEqual(max)
    }
  })

  it('campaign rewards and boss cards have no price, and bosses are kept out of the collectible cards', () => {
    for (const card of ALL_CARDS.filter((candidate) => candidate.reward || candidate.boss)) {
      expect(card.price, card.id).toBeUndefined()
    }

    for (const card of ALL_CARDS.filter((candidate) => candidate.boss)) {
      expect(CARDS, card.id).not.toContain(card)

      if (card.type !== 'hero') {
        const owner = card.restriction.kind === 'hero' ? card.restriction.heroId : ''

        expect(ALL_CARDS.find((hero) => hero.id === owner)?.boss, card.id).toBe(true)
      }
    }
  })

  it('stats stay within the budget of their cost, whatever the rarity (docs/PLAN.md, section 5)', () => {
    for (const card of CARDS) {
      if (card.type === 'ally') {
        expect(card.attack! + card.health! / 2, card.id).toBeLessThanOrEqual(9 * card.cost + 4)
      } else if (card.type === 'weapon') {
        expect(card.attack! * card.durability!, card.id).toBeLessThanOrEqual(14 * Math.max(card.cost, 1) + 2)
      } else if (card.type === 'armor') {
        expect(card.armor, card.id).toBeLessThanOrEqual(9 * Math.max(card.cost, 1))
      }
    }
  })

  it('the catalog has the 500 collectible cards of the plan, by rarity (docs/PLAN.md, sections 5 and 8.1)', () => {
    const count = (rarity: string) => CARDS.filter((card) => card.rarity === rarity).length

    expect(CARDS.length).toBe(500)
    expect(HEROES.length).toBe(12)
    expect([
      count('common'),
      count('uncommon'),
      count('rare'),
      count('epic'),
      count('legendary'),
      count('exotic'),
      count('mythic')
    ]).toEqual([170, 120, 90, 55, 35, 18, 12])
  })

  it('every hero has a basic deck that is legal, and every card has its Spanish name', () => {
    for (const hero of HEROES) {
      expect(validateDeck(basicDeck(hero.id)), hero.id).toEqual([])
    }

    for (const card of ALL_CARDS) {
      expect(CARDS_ES[card.id]?.name, card.id).toBeTruthy()
    }
  })

  it('the starter decks are legal, with 40 cards counting the hero', () => {
    expect(STARTER_HERO_IDS.length).toBeGreaterThanOrEqual(3)

    for (const heroId of STARTER_HERO_IDS) {
      const deck = starterDeck(heroId)

      expect(validateDeck(deck), heroId).toEqual([])
      expect(deck.cards.length + 1).toBe(40)
    }
  })
})

/** A match with an ally on each side (slot 0) and plenty of Chronos, to try a card. */
function sandbox(heroId = STARTER_HERO_IDS[0]): MatchState {
  const deck = { heroId, cards: starterDeck(STARTER_HERO_IDS[0]).cards }
  const { state } = createMatch({
    seed: 11,
    decks: { a: { ...deck, heroId }, b: deck },
    setup: {
      a: { allies: ['chrono-golem'], chronosCapacity: 20 },
      b: { allies: ['chrono-golem'], chronosCapacity: 20 }
    }
  })

  state.players.a.hand = []
  state.players.a.allies[0]!.enteredPhase = 0

  return state
}

function targetsFor(kinds: TargetKind[] = []): SlotRef[] {
  return kinds.map((kind) => {
    switch (kind) {
      case 'enemySlot':
        return { player: 'b', slot: 'hero' }
      case 'enemyAlly':
        return { player: 'b', slot: 0 }
      case 'friendlyAlly':
        return { player: 'a', slot: 0 }
      case 'friendlySlot':
        return { player: 'a', slot: 1 }
    }
  })
}

function failures(state: MatchState, timeline: Timeline): string[] {
  let current = state
  const reasons: string[] = []

  // Two phases, so the "at the start/end of the phase" logic runs too.
  for (const plan of [timeline, emptyTimeline()]) {
    if (current.status !== 'planning') {
      break
    }

    const result = resolvePhase(current, { a: plan, b: emptyTimeline() })

    reasons.push(...result.events.flatMap((event) => (event.type === 'fail' ? [event.reason] : [])))
    current = result.state
  }

  return reasons
}

describe('every card works in a match', () => {
  const heroes = ALL_CARDS.filter((card) => card.type === 'hero')

  for (const card of ALL_CARDS.filter((candidate) => candidate.type !== 'hero')) {
    it(card.id, () => {
      const state = sandbox(
        heroes.find((hero) => card.restriction.kind === 'hero' && hero.id === card.restriction.heroId)?.id
      )
      const uid = state.nextUid++

      state.players.a.hand.push({ uid, cardId: card.id })

      const play: PlannedAction = { kind: 'play', cardUid: uid, slot: 1, targets: targetsFor(card.targets) }
      const timeline = emptyTimeline()

      timeline[0] = play

      expect(failures(state, timeline)).toEqual([])
    })
  }

  for (const hero of heroes) {
    it(`${hero.id} (ability)`, () => {
      const state = sandbox(hero.id)
      const timeline = emptyTimeline()

      timeline[0] = { kind: 'heroAbility', targets: targetsFor(hero.ability?.targets) }

      expect(hero.ability).toBeDefined()
      expect(failures(state, timeline)).toEqual([])
    })
  }
})

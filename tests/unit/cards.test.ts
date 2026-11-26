import { readFileSync } from 'node:fs'
import path from 'node:path'
import { describe, expect, it } from 'vitest'
import { CARD_FILES } from '@/app/(protected)/(cards)/cards/index.generated'
import { basicDeck } from '@/app/(protected)/(cards)/data/heroDecks'
import { PRICE_RANGES } from '@/app/(protected)/(cards)/data/rarities'
import { STARTER_HERO_IDS, starterDeck } from '@/app/(protected)/(cards)/data/starters'
import { ALL_CARDS, CARDS, HEROES } from '@/app/(protected)/(cards)/utils/catalog'
import { cardProblems } from '@/app/(protected)/(cards)/utils/defineCard'
import { HERO_ABILITY_MIN_COST } from '@/app/(protected)/(engine)/data/rules'
import { CardDefinition } from '@/app/(protected)/(engine)/models/CardDefinition'
import { MatchState } from '@/app/(protected)/(engine)/models/MatchState'
import { emptyTimeline, PlannedAction, Timeline } from '@/app/(protected)/(engine)/models/PlannedAction'
import { SlotRef } from '@/app/(protected)/(engine)/models/SlotRef'
import { TargetKind } from '@/app/(protected)/(engine)/models/TargetKind'
import { createMatch } from '@/app/(protected)/(engine)/utils/createMatch'
import { canUseCard, validateDeck } from '@/app/(protected)/(engine)/utils/deckRules'
import { resolvePhase } from '@/app/(protected)/(engine)/utils/resolvePhase'
import { CARDS_ES } from '@/app/i18n/cards/es'
import { renderIndex } from '@/scripts/cards-index'

const INDEX_FILE = path.join(process.cwd(), 'app', '(protected)', '(cards)', 'cards', 'index.generated.ts')

/**
 * The faction of a card agrees with its restriction (docs/PLAN.md, section
 * 4.2): a card of a faction (not neutral) is only for heroes of that faction,
 * through `factions` or through the heroes it lists. A hero must exist.
 */
function consistentRestriction(card: CardDefinition): boolean {
  const { factions = [], heroes = [] } = card.restriction
  const owners = heroes.map((heroId) => ALL_CARDS.find((candidate) => candidate.id === heroId))

  if (owners.some((hero) => hero?.type !== 'hero')) {
    return false
  }

  return (
    card.faction === 'neutral' ||
    (factions.length > 0 ? factions.every((faction) => faction === card.faction) : false) ||
    (owners.length > 0 && owners.every((hero) => hero!.faction === card.faction))
  )
}

/** The hero a card is exclusive to (undefined: any other card). */
const ownerOf = (card: CardDefinition): string | undefined => card.restriction.heroes?.[0]

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

  it('every card lives straight in cards/, with a faction that matches its restriction', () => {
    for (const { file, card } of CARD_FILES) {
      expect(file, file).not.toContain('/')
      expect(consistentRestriction(card), file).toBe(true)
    }
  })

  it('every card can be used by at least one hero', () => {
    const heroes = ALL_CARDS.filter((card) => card.type === 'hero')

    for (const card of ALL_CARDS.filter((candidate) => candidate.type !== 'hero')) {
      expect(
        heroes.some((hero) => canUseCard(hero, card)),
        card.id
      ).toBe(true)
    }
  })

  it('every card passes the format checks', () => {
    for (const card of ALL_CARDS) {
      expect(cardProblems(card), card.id).toEqual([])
    }
  })

  it("every hero's ability costs at least 3 energy, so it can't be used every phase", () => {
    for (const hero of ALL_CARDS.filter((card) => card.type === 'hero')) {
      expect(hero.ability, hero.id).toBeDefined()
      expect(hero.ability!.cost, hero.id).toBeGreaterThanOrEqual(HERO_ABILITY_MIN_COST)
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
        const owner = ownerOf(card) ?? ''

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
        expect(card.armor, card.id).toBeLessThanOrEqual(4)
        expect(card.durability, card.id).toBeGreaterThanOrEqual(2)
        expect(card.armor! * card.durability!, card.id).toBeLessThanOrEqual(9 * Math.max(card.cost, 1) + 2)
      }
    }
  })

  it('the catalog has the 729 collectible cards of the plan, by rarity (docs/PLAN.md, sections 5 and 8.1)', () => {
    // The retired types (locations, for now) count: they are still part of the plan.
    const collectible = ALL_CARDS.filter((card) => !card.boss && !card.token)
    const count = (rarity: string) => collectible.filter((card) => card.rarity === rarity).length

    expect(collectible.length).toBe(729)
    expect(HEROES.length).toBe(12)
    expect([
      count('common'),
      count('uncommon'),
      count('rare'),
      count('epic'),
      count('legendary'),
      count('exotic'),
      count('mythic')
    ]).toEqual([264, 181, 129, 78, 57, 14, 6])
  })

  it('leaves the retired types out of what players can own (the campaign rewards stay)', () => {
    expect(CARDS.filter((card) => card.type === 'location' && !card.reward)).toEqual([])
    expect(ALL_CARDS.filter((card) => card.type === 'location' && card.reward)).toEqual([])
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
      a: { allies: ['lost-chrononaut'], chronosCapacity: 20, energy: 10 },
      // The rival has a weapon, for the cards that aim at an attached card.
      b: { allies: ['lost-chrononaut'], chronosCapacity: 20, energy: 10, weapon: 'cutlass-of-the-long-road' }
    }
  })

  state.players.a.hand = []
  state.players.a.allies[0]!.enteredPhase = 0

  return state
}

function targetsFor(state: MatchState, kinds: TargetKind[] = []): SlotRef[] {
  let enemySlots = 0

  return kinds.map((kind) => {
    switch (kind) {
      case 'enemySlot':
        // Distinct slots when a card aims at more than one.
        return enemySlots++ === 0 ? { player: 'b', slot: 'hero' } : { player: 'b', slot: enemySlots - 2 }
      case 'enemyAlly':
        return { player: 'b', slot: 0 }
      case 'friendlyAlly':
        return { player: 'a', slot: 0 }
      case 'friendlySlot':
        return { player: 'a', slot: 1 }
      case 'enemyGear':
      case 'enemyAttachment':
        return { player: 'b', slot: 'hero', attached: state.players.b.hero.weapon!.card.uid }
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
      const state = sandbox(heroes.find((hero) => hero.id === ownerOf(card))?.id)
      const uid = state.nextUid++

      state.players.a.hand.push({ uid, cardId: card.id })

      const play: PlannedAction = { kind: 'play', cardUid: uid, slot: 1, targets: targetsFor(state, card.targets) }
      const timeline = emptyTimeline()

      timeline[0] = play

      expect(failures(state, timeline)).toEqual([])
    })
  }

  for (const card of ALL_CARDS.filter((candidate) => candidate.type === 'ally' && candidate.ability)) {
    it(`${card.id} (ally ability)`, () => {
      const state = sandbox(heroes.find((hero) => hero.id === ownerOf(card))?.id)
      const caster = state.players.a.allies[0]!

      // The sandbox ally becomes this card, ready to act.
      caster.cardId = card.id

      const timeline = emptyTimeline()

      timeline[0] = { kind: 'allyAbility', allyUid: caster.uid, targets: targetsFor(state, card.ability!.targets) }

      expect(failures(state, timeline)).toEqual([])
    })
  }

  for (const hero of heroes) {
    it(`${hero.id} (ability)`, () => {
      const state = sandbox(hero.id)
      const timeline = emptyTimeline()
      const side = state.players.a

      // What some abilities take: a weapon, an ally in the discard pile and in the hand, an artifact in the deck.
      side.hero.weapon = {
        card: { uid: state.nextUid++, cardId: 'cutlass-of-the-long-road' },
        attack: 4,
        durability: 3
      }
      side.discard.push({ uid: state.nextUid++, cardId: 'faithful-wanderer' })
      side.hand.push({ uid: state.nextUid++, cardId: 'faithful-wanderer' })
      side.deck.unshift({ uid: state.nextUid++, cardId: 'brazier-of-the-wanderer' })

      timeline[0] = {
        kind: 'heroAbility',
        targets: targetsFor(state, hero.ability?.targets),
        ...(hero.ability?.choice ? { cardId: 'brazier-of-the-wanderer' } : {})
      }

      expect(hero.ability).toBeDefined()
      expect(failures(state, timeline)).toEqual([])
    })
  }
})

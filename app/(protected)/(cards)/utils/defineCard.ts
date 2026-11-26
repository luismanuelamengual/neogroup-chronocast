import { PRICE_RANGES } from '@/app/(protected)/(cards)/data/rarities'
import { HERO_ABILITY_MIN_COST, HERO_MAX_HEALTH, HERO_MIN_HEALTH } from '@/app/(protected)/(engine)/data/rules'
import { CardDefinition } from '@/app/(protected)/(engine)/models/CardDefinition'
import { RESTRICTION_CRITERIA, restrictionCriteria } from '@/app/(protected)/(engine)/models/Restriction'

/**
 * Declares a card: checks its shape (a clear error at load time instead of a
 * strange behavior in a match) and fills the defaults. Every card file
 * default-exports one call.
 */
export function defineCard(definition: CardDefinition): CardDefinition {
  const problems = cardProblems(definition)

  if (problems.length > 0) {
    throw new Error(`Card "${definition.id}": ${problems.join('; ')}`)
  }

  return { keywords: [], ...definition }
}

/** What is wrong with a card definition (empty: nothing). */
export function cardProblems(card: CardDefinition): string[] {
  const problems: string[] = []

  const need = (field: keyof CardDefinition) => {
    if (card[field] == null) {
      problems.push(`a ${card.type} needs "${field}"`)
    }
  }

  if (!/^[a-z0-9]+(-[a-z0-9]+)*$/.test(card.id)) {
    problems.push('the id must be kebab-case')
  }

  if (!card.name.trim() || !card.art.subject.trim()) {
    problems.push('name and art.subject are required')
  }

  if (card.cost < 0 || !Number.isInteger(card.cost)) {
    problems.push('the cost must be a whole number from 0')
  }

  if (card.price != null) {
    const range = PRICE_RANGES[card.rarity]

    if (card.price < range.min || card.price > range.max) {
      problems.push(`the price of a ${card.rarity} card goes from ${range.min} to ${range.max}`)
    }
  }

  if (card.keywords?.includes('thorns') && !card.thorns) {
    problems.push('the thorns keyword needs "thorns"')
  }

  for (const criterion of RESTRICTION_CRITERIA) {
    const values: string[] | undefined = card.restriction[criterion]

    if (values && (values.length === 0 || new Set(values).size !== values.length)) {
      problems.push(`the "${criterion}" of the restriction lists at least one value, each one once`)
    }
  }

  switch (card.type) {
    case 'hero':
      need('health')
      need('side')

      if (card.health != null && (card.health < HERO_MIN_HEALTH || card.health > HERO_MAX_HEALTH)) {
        problems.push(`a hero has from ${HERO_MIN_HEALTH} to ${HERO_MAX_HEALTH} health`)
      }

      if (restrictionCriteria(card.restriction).join() !== 'heroes' || card.restriction.heroes?.join() !== card.id) {
        problems.push('a hero is restricted to itself')
      }

      if (card.ability && card.ability.cost < HERO_ABILITY_MIN_COST) {
        problems.push(`a hero's ability costs at least ${HERO_ABILITY_MIN_COST} energy`)
      }

      break
    case 'ally':
      need('attack')
      need('health')
      break
    case 'weapon':
      need('attack')
      need('durability')
      break
    case 'armor':
      need('armor')
      break
    case 'trap':
      need('trigger')
      break
    case 'attachment':
      need('targets')
      break
  }

  return problems
}

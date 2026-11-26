import { CardDefinition } from '@/app/(protected)/(engine)/models/CardDefinition'
import { CardType } from '@/app/(protected)/(engine)/models/CardType'
import { Faction } from '@/app/(protected)/(engine)/models/Faction'
import { Rarity } from '@/app/(protected)/(engine)/models/Rarity'
import { Side } from '@/app/(protected)/(engine)/models/Side'
import { canUseCard, cardSide } from '@/app/(protected)/(engine)/utils/deckRules'
import { getCard } from '@/app/(protected)/(engine)/utils/registry'
import { Translator } from '@/app/i18n/translate'

/** The filters of the collection and of the deck editor ('' = any). */
export interface CardFilter {
  search: string
  type: CardType | ''
  faction: Faction | ''
  /** Dawn, Eclipse or neutral. */
  side: Side | 'neutral' | ''
  rarity: Rarity | ''
  /** The exact cost, or 7 for 7 and up (-1 = any). */
  cost: number
  /** Only cards this hero can use. */
  usableBy: string
  ownedOnly: boolean
}

export const EMPTY_FILTER: CardFilter = {
  search: '',
  type: '',
  faction: '',
  side: '',
  rarity: '',
  cost: -1,
  usableBy: '',
  ownedOnly: false
}

const RARITY_ORDER: Rarity[] = ['common', 'uncommon', 'rare', 'epic', 'legendary', 'exotic', 'mythic']

/** Heroes first, then by cost, then by name. */
export function compareCards(a: CardDefinition, b: CardDefinition): number {
  return (
    Number(b.type === 'hero') - Number(a.type === 'hero') ||
    a.cost - b.cost ||
    RARITY_ORDER.indexOf(a.rarity) - RARITY_ORDER.indexOf(b.rarity) ||
    a.name.localeCompare(b.name)
  )
}

export function matchesFilter(card: CardDefinition, filter: CardFilter, owned: number): boolean {
  const search = filter.search.trim().toLowerCase()

  return (
    (!search || card.name.toLowerCase().includes(search) || card.text.toLowerCase().includes(search)) &&
    (!filter.type || card.type === filter.type) &&
    (!filter.faction || card.faction === filter.faction) &&
    (!filter.side || cardSide(card) === filter.side) &&
    (!filter.rarity || card.rarity === filter.rarity) &&
    (filter.cost < 0 || (filter.cost >= 7 ? card.cost >= 7 : card.cost === filter.cost)) &&
    (!filter.usableBy || canUseCard(getCard(filter.usableBy), card)) &&
    (!filter.ownedOnly || owned > 0)
  )
}

/** "A", "A or B", "A, B or C" (with the word given: or, and). */
function joinWords(items: string[], word: string): string {
  return items.length <= 1 ? (items[0] ?? '') : `${items.slice(0, -1).join(', ')} ${word} ${items[items.length - 1]}`
}

/**
 * Who can have a card in their deck, in words: "Any hero", "Heroes of the
 * Clockwork or Neon faction", or, with several criteria, "Heroes: Clockwork
 * faction and Dawn side".
 */
export function restrictionText(card: CardDefinition, t: Translator): string {
  const { factions = [], sides = [], heroes = [] } = card.restriction
  const or = t('game.restriction.or')
  const values = {
    faction: joinWords(
      factions.map((faction) => t(`game.factions.${faction}`)),
      or
    ),
    side: joinWords(
      sides.map((side) => t(`game.sides.${side}`)),
      or
    ),
    hero: joinWords(
      heroes.map((heroId) => getCard(heroId).name),
      or
    )
  }
  const parts = [heroes.length > 0 && 'hero', factions.length > 0 && 'faction', sides.length > 0 && 'side'].filter(
    (part): part is 'hero' | 'faction' | 'side' => Boolean(part)
  )

  if (parts.length === 0) {
    return t('game.restriction.any')
  }

  if (parts.length === 1) {
    return t(`game.restriction.${parts[0]}`, values)
  }

  return t('game.restriction.combined', {
    parts: joinWords(
      parts.map((part) => t(`game.restriction.part.${part}`, values)),
      t('game.restriction.and')
    )
  })
}

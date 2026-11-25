import { CardDefinition } from '@/app/(protected)/(engine)/models/CardDefinition'
import { CardType } from '@/app/(protected)/(engine)/models/CardType'
import { Faction } from '@/app/(protected)/(engine)/models/Faction'
import { HeroClass } from '@/app/(protected)/(engine)/models/HeroClass'
import { Rarity } from '@/app/(protected)/(engine)/models/Rarity'
import { canUseCard } from '@/app/(protected)/(engine)/utils/deckRules'
import { getCard } from '@/app/(protected)/(engine)/utils/registry'
import { Translator } from '@/app/i18n/translate'

/** The filters of the collection and of the deck editor ('' = any). */
export interface CardFilter {
  search: string
  type: CardType | ''
  faction: Faction | ''
  heroClass: HeroClass | ''
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
  heroClass: '',
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

/** The class a card belongs to: a hero's own class, or the class it is restricted to. */
function classOf(card: CardDefinition): HeroClass | null {
  return card.heroClass ?? (card.restriction.kind === 'class' ? card.restriction.heroClass : null)
}

export function matchesFilter(card: CardDefinition, filter: CardFilter, owned: number): boolean {
  const search = filter.search.trim().toLowerCase()

  return (
    (!search || card.name.toLowerCase().includes(search) || card.text.toLowerCase().includes(search)) &&
    (!filter.type || card.type === filter.type) &&
    (!filter.faction || card.faction === filter.faction) &&
    (!filter.heroClass || classOf(card) === filter.heroClass) &&
    (!filter.rarity || card.rarity === filter.rarity) &&
    (filter.cost < 0 || (filter.cost >= 7 ? card.cost >= 7 : card.cost === filter.cost)) &&
    (!filter.usableBy || canUseCard(getCard(filter.usableBy), card)) &&
    (!filter.ownedOnly || owned > 0)
  )
}

/** Who can have a card in their deck, in words. */
export function restrictionText(card: CardDefinition, t: Translator): string {
  const restriction = card.restriction

  switch (restriction.kind) {
    case 'any':
      return t('game.restriction.any')
    case 'faction':
      return t('game.restriction.faction', { faction: t(`game.factions.${restriction.faction}`) })
    case 'class':
      return t('game.restriction.class', { heroClass: t(`game.classes.${restriction.heroClass}`) })
    case 'hero':
      return t('game.restriction.hero', { hero: getCard(restriction.heroId).name })
    case 'side':
      return t('game.restriction.side', { side: t(`game.sides.${restriction.side}`) })
  }
}

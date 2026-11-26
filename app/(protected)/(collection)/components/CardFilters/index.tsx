'use client'

import './index.scss'
import { CardFilter } from '@/app/(protected)/(collection)/utils/filters'
import { CARD_TYPES, CardType } from '@/app/(protected)/(engine)/models/CardType'
import { FACTIONS } from '@/app/(protected)/(engine)/models/Faction'
import { RARITIES, Rarity } from '@/app/(protected)/(engine)/models/Rarity'
import { SIDES } from '@/app/(protected)/(engine)/models/Side'
import { hasSubtype, SUBTYPES } from '@/app/(protected)/(engine)/models/Subtype'
import { useCardName } from '@/app/i18n/cards/useCardName'
import { useT } from '@/app/i18n/I18nProvider'

const COSTS = [0, 1, 2, 3, 4, 5, 6, 7]

interface CardFiltersProps {
  filter: CardFilter
  onChange: (filter: CardFilter) => void
  /** Heroes offered in "usable by" (empty: no such filter). */
  heroes?: string[]
  /** Card types offered in the type filter (default: all of them). */
  types?: readonly CardType[]
  /** Rarities offered in the rarity filter (default: all of them). */
  rarities?: readonly Rarity[]
  /** Hide the filters that make no sense in the context (e.g. the hero in the deck editor). */
  hide?: (keyof CardFilter)[]
}

/** The filter bar of the collection and the deck editor. */
export default function CardFilters({
  filter,
  onChange,
  heroes = [],
  types = CARD_TYPES,
  rarities = RARITIES,
  hide = []
}: CardFiltersProps) {
  const t = useT()
  const cardName = useCardName()
  const set = <K extends keyof CardFilter>(key: K, value: CardFilter[K]) => onChange({ ...filter, [key]: value })
  const shown = (key: keyof CardFilter) => !hide.includes(key)

  return (
    <div className="card-filters">
      <input
        type="search"
        placeholder={t('collection.search')}
        value={filter.search}
        onChange={(event) => set('search', event.target.value)}
      />
      {shown('type') && (
        <select
          value={filter.type}
          onChange={(event) => onChange({ ...filter, type: event.target.value as CardFilter['type'], subtype: '' })}
        >
          <option value="">{t('collection.allTypes')}</option>
          {types.map((type) => (
            <option key={type} value={type}>
              {t(`game.types.${type}`)}
            </option>
          ))}
        </select>
      )}
      {shown('subtype') && filter.type && hasSubtype(filter.type) && (
        <select
          value={filter.subtype}
          onChange={(event) => set('subtype', event.target.value as CardFilter['subtype'])}
        >
          <option value="">{t('collection.allSubtypes')}</option>
          {SUBTYPES[filter.type].map((subtype) => (
            <option key={subtype} value={subtype}>
              {t(`game.subtypes.${subtype}`)}
            </option>
          ))}
        </select>
      )}
      {shown('side') && (
        <select value={filter.side} onChange={(event) => set('side', event.target.value as CardFilter['side'])}>
          <option value="">{t('collection.allSides')}</option>
          {[...SIDES, 'neutral' as const].map((side) => (
            <option key={side} value={side}>
              {t(`game.sides.${side}`)}
            </option>
          ))}
        </select>
      )}
      {shown('faction') && (
        <select
          value={filter.faction}
          onChange={(event) => set('faction', event.target.value as CardFilter['faction'])}
        >
          <option value="">{t('collection.allFactions')}</option>
          {FACTIONS.map((faction) => (
            <option key={faction} value={faction}>
              {t(`game.factions.${faction}`)}
            </option>
          ))}
        </select>
      )}
      {shown('rarity') && (
        <select value={filter.rarity} onChange={(event) => set('rarity', event.target.value as CardFilter['rarity'])}>
          <option value="">{t('collection.allRarities')}</option>
          {rarities.map((rarity) => (
            <option key={rarity} value={rarity}>
              {t(`game.rarities.${rarity}`)}
            </option>
          ))}
        </select>
      )}
      {shown('cost') && (
        <select value={filter.cost} onChange={(event) => set('cost', Number(event.target.value))}>
          <option value={-1}>{t('collection.allCosts')}</option>
          {COSTS.map((cost) => (
            <option key={cost} value={cost}>
              {t('collection.cost', { cost: cost === 7 ? '7+' : cost })}
            </option>
          ))}
        </select>
      )}
      {shown('usableBy') && heroes.length > 0 && (
        <select value={filter.usableBy} onChange={(event) => set('usableBy', event.target.value)}>
          <option value="">{t('collection.anyHero')}</option>
          {heroes.map((heroId) => (
            <option key={heroId} value={heroId}>
              {t('collection.usableBy', { hero: cardName(heroId) })}
            </option>
          ))}
        </select>
      )}
      {shown('ownedOnly') && (
        <label>
          <input
            type="checkbox"
            checked={filter.ownedOnly}
            onChange={(event) => set('ownedOnly', event.target.checked)}
          />
          {t('collection.ownedOnly')}
        </label>
      )}
    </div>
  )
}

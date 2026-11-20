'use client'

import './index.scss'
import classNames from 'classnames'
import BoardSlot, { SlotHighlight } from '@/app/(protected)/(battle)/components/BoardSlot'
import { initials } from '@/app/(protected)/(battle)/components/UnitToken'
import { SlotEffects } from '@/app/(protected)/(battle)/utils/effects'
import { PlayerState } from '@/app/(protected)/(engine)/models/MatchState'
import { getCard } from '@/app/(protected)/(engine)/utils/registry'
import { useCardName } from '@/app/i18n/cards/useCardName'
import { useT } from '@/app/i18n/I18nProvider'

interface HeroZoneProps {
  side: PlayerState
  position: 'top' | 'bottom'
  /** Chronos to show (the projection's, for the player programming). */
  chronos: number
  highlight?: SlotHighlight
  selected?: boolean
  effects?: SlotEffects
  frameKey?: number
  onHeroClick: () => void
  onInspect: (cardId: string) => void
}

/**
 * The row of a hero, behind its allies: the hero with its health and armor, its
 * weapon, armor and location, the face-down traps, the Chronos, the deck and the
 * discard pile.
 */
export default function HeroZone({
  side,
  position,
  chronos,
  highlight,
  selected,
  effects,
  frameKey,
  onHeroClick,
  onInspect
}: HeroZoneProps) {
  const t = useT()
  const cardName = useCardName()
  const hero = side.hero
  const heroCard = getCard(hero.cardId)
  const weapon = hero.weapon
  const location = side.location

  return (
    <div className={classNames('hero-zone', `position-${position}`)}>
      <BoardSlot
        side={position}
        className="hero-zone__hero"
        highlight={highlight}
        selected={selected}
        effects={effects}
        frameKey={frameKey}
        onClick={onHeroClick}
      >
        <span className={classNames('hero-token', `faction-${heroCard.faction}`, { fallen: hero.fallen })}>
          <span className="hero-token__face">{initials(heroCard.name)}</span>
          <span className="hero-token__health">❤️ {Math.max(0, hero.health)}</span>
          {hero.armor > 0 && <span className="hero-token__armor">🛡️ {hero.armor}</span>}
        </span>
      </BoardSlot>

      <div className="hero-zone__gear">
        <button
          type="button"
          className={classNames('hero-zone__chip', { empty: !weapon })}
          title={t('battle.weapon')}
          disabled={!weapon}
          onClick={() => weapon && onInspect(weapon.card.cardId)}
        >
          🗡️ {weapon ? `${weapon.attack} · ${weapon.durability}` : '—'}
        </button>
        <button
          type="button"
          className={classNames('hero-zone__chip', { empty: !hero.armorCard })}
          title={t('battle.armor')}
          disabled={!hero.armorCard}
          onClick={() => hero.armorCard && onInspect(hero.armorCard.cardId)}
        >
          🛡️ {hero.armorCard ? hero.armor : '—'}
        </button>
        <button
          type="button"
          className={classNames('hero-zone__chip', { empty: !location })}
          title={t('battle.location')}
          disabled={!location}
          onClick={() => location && onInspect(location.cardId)}
        >
          🏛️ {location ? cardName(location.cardId) : '—'}
        </button>
      </div>

      <div className="hero-zone__counters">
        <span className="hero-zone__counter chronos" title={t('battle.chronos')}>
          ⌛ {chronos}/{side.chronosCapacity}
        </span>
        <span className="hero-zone__counter" title={t('battle.traps')}>
          🪤 {side.traps.length}
        </span>
        <span className="hero-zone__counter" title={t('battle.deck')}>
          📚 {side.deck.length}
        </span>
        <span className="hero-zone__counter" title={t('battle.discard')}>
          🗑️ {side.discard.length}
        </span>
      </div>
    </div>
  )
}

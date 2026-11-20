'use client'

import './index.scss'
import classNames from 'classnames'
import { initials } from '@/app/(protected)/(battle)/components/UnitToken'
import { TYPE_ICONS } from '@/app/(protected)/(battle)/utils/icons'
import { getCard } from '@/app/(protected)/(engine)/utils/registry'
import { useCardName } from '@/app/i18n/cards/useCardName'

interface HandCardProps {
  cardId: string
  selected?: boolean
  /** Already used by the programmed actions. */
  used?: boolean
  /** Costs more than the Chronos left. */
  expensive?: boolean
  marked?: boolean
  onClick?: () => void
}

/** A small card of the hand: cost, initials over the faction color, name, type and stats. */
export default function HandCard({ cardId, selected, used, expensive, marked, onClick }: HandCardProps) {
  const card = getCard(cardId)
  const name = useCardName()(card)

  return (
    <button
      type="button"
      className={classNames('hand-card', `faction-${card.faction}`, `rarity-${card.rarity}`, {
        selected,
        used,
        expensive,
        marked
      })}
      onClick={onClick}
      disabled={used}
      title={name}
    >
      <span className="hand-card__cost">{card.cost}</span>
      <span className="hand-card__face">{initials(card.name)}</span>
      <span className="hand-card__type">{TYPE_ICONS[card.type]}</span>
      <span className="hand-card__name">{name}</span>
      {(card.attack != null || card.health != null || card.armor != null) && (
        <span className="hand-card__stats">
          {card.attack != null && <span className="attack">{card.attack}</span>}
          {card.armor != null && <span className="armor">{card.armor}</span>}
          {card.durability != null && <span className="durability">{card.durability}</span>}
          {card.health != null && <span className="health">{card.health}</span>}
        </span>
      )}
    </button>
  )
}

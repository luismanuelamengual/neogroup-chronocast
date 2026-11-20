import './index.scss'
import classNames from 'classnames'
import { KEYWORD_ICONS } from '@/app/(protected)/(battle)/utils/icons'
import { Unit } from '@/app/(protected)/(engine)/models/MatchState'
import { getCard } from '@/app/(protected)/(engine)/utils/registry'
import { useCardName } from '@/app/i18n/cards/useCardName'

/** The initials of a card name, shown on the token until the card has its illustration. */
export function initials(name: string): string {
  return name
    .split(/\s+/)
    .map((word) => word.charAt(0))
    .join('')
    .slice(0, 2)
    .toUpperCase()
}

interface UnitTokenProps {
  unit: Unit
  /** Arrived this phase: can't attack yet (unless it has charge). */
  fresh?: boolean
  stunned?: boolean
}

/** An ally on the board: initials over its faction color, attack and health, and icons for its keywords. */
export default function UnitToken({ unit, fresh, stunned }: UnitTokenProps) {
  const card = getCard(unit.cardId)
  const name = useCardName()(card)
  const attack = unit.attack + unit.tempAttack
  const keywords = unit.keywords.filter((keyword) => KEYWORD_ICONS[keyword])

  return (
    <div className={classNames('unit-token', `faction-${card.faction}`, { fresh, stunned })}>
      <span className="unit-token__face">{initials(card.name)}</span>
      <span className="unit-token__name">{name}</span>
      {keywords.length > 0 && (
        <span className="unit-token__keywords">
          {keywords.map((keyword) => (
            <span key={keyword} title={keyword}>
              {KEYWORD_ICONS[keyword]}
            </span>
          ))}
          {unit.shield && !keywords.includes('shield') && <span>🔰</span>}
        </span>
      )}
      <span className={classNames('unit-token__stat attack', { boosted: unit.tempAttack > 0 })}>{attack}</span>
      <span className={classNames('unit-token__stat health', { hurt: unit.health < unit.maxHealth })}>
        {unit.health}
      </span>
      {stunned && <span className="unit-token__status">💫</span>}
      {!stunned && fresh && <span className="unit-token__status">💤</span>}
    </div>
  )
}

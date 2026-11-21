'use client'

import './index.scss'
import classNames from 'classnames'
import { ReactNode, useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import CardView from '@/app/(protected)/(cards)/components/CardView'
import { getCard } from '@/app/(protected)/(engine)/utils/registry'
import GameButton from '@/app/components/GameButton'
import { useT } from '@/app/i18n/I18nProvider'

/** The size of a CardView at zoom 1. */
const CARD_WIDTH = 220
const CARD_HEIGHT = 308
/** Room left around the card (px). */
const MARGIN = 56
const MAX_ZOOM = 2.4
/** Width taken by the column of actions beside the card. */
const ACTIONS_WIDTH = 230

/** How big the card can be drawn on this screen. */
function fitZoom(withActions: boolean): number {
  const width = window.innerWidth - MARGIN - (withActions ? ACTIONS_WIDTH : 0)

  return Math.min((window.innerHeight - MARGIN) / CARD_HEIGHT, width / CARD_WIDTH, MAX_ZOOM)
}

/** A button beside the card: something to do with it (the battle screen). */
export interface SpotlightAction {
  label: string
  color?: 'lime' | 'violet' | 'cyan' | 'magenta' | 'gold'
  /** Why it can't be done now: the button shows disabled with this line under it. */
  disabledReason?: string | null
  onClick: () => void
}

interface CardSpotlightProps {
  cardId: string
  /** Shines in its rarity's color (the best cards of a pack). */
  shine?: boolean
  onClose: () => void
  /** Something over the card, such as the "New!" badge. */
  badge?: ReactNode
  /** Buttons beside the card (a disabled one tells why). */
  actions?: SpotlightAction[]
  /** A line over the actions (e.g. the live stats of a unit on the board). */
  note?: ReactNode
}

/**
 * One card big in the middle of the screen, as large as it fits, to read it
 * in detail (opening packs, the starter, the battle). A tap anywhere, or
 * Escape, closes it. With `actions`, its buttons stand beside the card.
 */
export default function CardSpotlight({ cardId, shine, onClose, badge, actions, note }: CardSpotlightProps) {
  const t = useT()
  const card = getCard(cardId)
  const withActions = !!actions?.length || !!note
  const [zoom, setZoom] = useState(() => fitZoom(withActions))

  useEffect(() => {
    const resize = () => setZoom(fitZoom(withActions))
    const key = (event: KeyboardEvent) => event.key === 'Escape' && onClose()

    window.addEventListener('resize', resize)
    window.addEventListener('keydown', key)

    return () => {
      window.removeEventListener('resize', resize)
      window.removeEventListener('keydown', key)
    }
  }, [onClose, withActions])

  return createPortal(
    <div
      className={classNames('card-spotlight', `rarity-${card.rarity}`, { shine })}
      role="dialog"
      aria-modal="true"
      aria-label={card.name}
      onClick={onClose}
    >
      <div className="card-spotlight__body">
        <div className="card-spotlight__card" style={{ borderRadius: 18 * zoom }}>
          <span className="card-spotlight__zoom" style={{ zoom }}>
            <CardView card={card} />
          </span>
          {badge}
        </div>
        {withActions && (
          <div className="card-spotlight__actions" onClick={(event) => event.stopPropagation()}>
            {note && <div className="card-spotlight__note">{note}</div>}
            {actions?.map((action) => (
              <div key={action.label} className="card-spotlight__action">
                <GameButton
                  color={action.color ?? 'lime'}
                  disabled={!!action.disabledReason}
                  fullWidth
                  onClick={action.onClick}
                >
                  {action.label}
                </GameButton>
                {action.disabledReason && <span className="card-spotlight__reason">{action.disabledReason}</span>}
              </div>
            ))}
          </div>
        )}
      </div>
      <span className="card-spotlight__hint">{t('common.tapToClose')}</span>
    </div>,
    document.body
  )
}

'use client'

import './index.scss'
import classNames from 'classnames'
import { ReactNode, useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import CardView from '@/app/(protected)/(cards)/components/CardView'
import { getCard } from '@/app/(protected)/(engine)/utils/registry'
import GameButton, { GameButtonColor } from '@/app/components/GameButton'
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
  color?: GameButtonColor
  /** Why it can't be done now: the button shows disabled with this line under it. */
  disabledReason?: string | null
  onClick: () => void
}

/** One card of a stack: a card on the board and the ones attached to it. */
export interface SpotlightCard {
  cardId: string
  /** Its line over the actions (replaces `note` while it is shown). */
  note?: ReactNode
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
  /** The card and its attachments: a tap on the card shows the next one. */
  stack?: SpotlightCard[]
}

/**
 * One card big in the middle of the screen, as large as it fits, to read it
 * in detail (opening packs, the starter, the battle). A tap anywhere, or
 * Escape, closes it. With `actions`, its buttons stand beside the card.
 */
export default function CardSpotlight({ cardId, shine, onClose, badge, actions, note, stack }: CardSpotlightProps) {
  const t = useT()
  const [index, setIndex] = useState(0)
  const cards = stack && stack.length > 1 ? stack : null
  const shown = cards ? cards[index % cards.length] : { cardId, note }
  const card = getCard(shown.cardId)
  const shownNote = cards ? (shown.note ?? null) : note
  const withActions = !!actions?.length || !!note || !!cards
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
        <div
          key={shown.cardId}
          className={classNames('card-spotlight__card', { cycles: !!cards })}
          style={{ borderRadius: 18 * zoom }}
          onClick={(event) => {
            if (cards) {
              event.stopPropagation()
              setIndex((current) => (current + 1) % cards.length)
            }
          }}
        >
          <span className="card-spotlight__zoom" style={{ zoom }}>
            <CardView card={card} />
          </span>
          {badge}
          {cards && (
            <span className="card-spotlight__dots" aria-hidden="true">
              {cards.map((entry, position) => (
                <i key={entry.cardId + position} className={classNames({ on: position === index % cards.length })} />
              ))}
            </span>
          )}
        </div>
        {withActions && (
          <div className="card-spotlight__actions" onClick={(event) => event.stopPropagation()}>
            {shownNote && <div className="card-spotlight__note">{shownNote}</div>}
            {actions?.map((action) => (
              <div key={action.label} className="card-spotlight__action">
                <GameButton
                  color={action.color ?? 'primary'}
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
      <span className="card-spotlight__hint">{cards ? t('common.tapToCycle') : t('common.tapToClose')}</span>
    </div>,
    document.body
  )
}

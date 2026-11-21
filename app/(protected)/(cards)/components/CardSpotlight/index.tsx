'use client'

import './index.scss'
import classNames from 'classnames'
import { ReactNode, useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import CardView from '@/app/(protected)/(cards)/components/CardView'
import { getCard } from '@/app/(protected)/(engine)/utils/registry'
import { useT } from '@/app/i18n/I18nProvider'

/** The size of a CardView at zoom 1. */
const CARD_WIDTH = 220
const CARD_HEIGHT = 308
/** Room left around the card (px). */
const MARGIN = 56
const MAX_ZOOM = 2.4

/** How big the card can be drawn on this screen. */
function fitZoom(): number {
  return Math.min((window.innerHeight - MARGIN) / CARD_HEIGHT, (window.innerWidth - MARGIN) / CARD_WIDTH, MAX_ZOOM)
}

interface CardSpotlightProps {
  cardId: string
  /** Shines in its rarity's color (the best cards of a pack). */
  shine?: boolean
  onClose: () => void
  /** Something over the card, such as the "New!" badge. */
  badge?: ReactNode
}

/**
 * One card big in the middle of the screen, as large as it fits, to read it
 * in detail (opening packs and the starter). A tap anywhere, or Escape, closes it.
 */
export default function CardSpotlight({ cardId, shine, onClose, badge }: CardSpotlightProps) {
  const t = useT()
  const card = getCard(cardId)
  const [zoom, setZoom] = useState(fitZoom)

  useEffect(() => {
    const resize = () => setZoom(fitZoom())
    const key = (event: KeyboardEvent) => event.key === 'Escape' && onClose()

    window.addEventListener('resize', resize)
    window.addEventListener('keydown', key)

    return () => {
      window.removeEventListener('resize', resize)
      window.removeEventListener('keydown', key)
    }
  }, [onClose])

  return createPortal(
    <div
      className={classNames('card-spotlight', `rarity-${card.rarity}`, { shine })}
      role="dialog"
      aria-modal="true"
      aria-label={card.name}
      onClick={onClose}
    >
      <div className="card-spotlight__card" style={{ borderRadius: 18 * zoom }}>
        <span className="card-spotlight__zoom" style={{ zoom }}>
          <CardView card={card} />
        </span>
        {badge}
      </div>
      <span className="card-spotlight__hint">{t('common.tapToClose')}</span>
    </div>,
    document.body
  )
}

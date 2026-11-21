'use client'

import './index.scss'
import classNames from 'classnames'
import { ReactNode } from 'react'
import CardView from '@/app/(protected)/(cards)/components/CardView'
import { CardBack } from '@/app/(protected)/(cards)/components/FlipCard'
import { getCard } from '@/app/(protected)/(engine)/utils/registry'

/** The size of a CardView at zoom 1. */
const CARD_WIDTH = 220

interface MiniCardProps {
  /** Null: a face-down card (the rival's hand, deck, traps). */
  cardId: string | null
  /** Width in px; the height follows the card's proportions. */
  width: number
  className?: string
  /** Badges over the card (current stats, counters...). */
  children?: ReactNode
}

/**
 * A whole card, illustration included, drawn small: the battle board shows
 * every card this way, with its live values on badges over it.
 */
export default function MiniCard({ cardId, width, className, children }: MiniCardProps) {
  return (
    <span className={classNames('mini-card', className)} style={{ width, height: width * 1.4 }}>
      {cardId ? (
        <span className="mini-card__zoom" style={{ zoom: width / CARD_WIDTH }}>
          <CardView card={getCard(cardId)} />
        </span>
      ) : (
        <CardBack />
      )}
      {children}
    </span>
  )
}

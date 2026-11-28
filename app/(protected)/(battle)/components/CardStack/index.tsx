'use client'

import './index.scss'
import classNames from 'classnames'
import { ReactNode } from 'react'
import MiniCard from '@/app/(protected)/(battle)/components/MiniCard'

/** How far each card of a stack is shifted from the one under it, up and to the left (px). */
export const STACK_OFFSET = 1.5
/** The most cards drawn in a stack, the front one included: with 8 it already looks like a big pile. */
export const STACK_MAX = 8
/** How far the front card of a full stack sits from the bottom one (px): the room a stack grows into. */
export const STACK_DEPTH = (STACK_MAX - 1) * STACK_OFFSET

/** A card under the front one of a stack. Null: a face-down card. */
export interface StackCard {
  cardId: string | null
  /** A class for that card (e.g. what kind of attachment it is). */
  className?: string
}

interface CardStackProps {
  /** The back of its face-down cards (data/cardBacks.ts; missing: the default one). */
  back?: string
  /** Width of the cards (px); the height follows the card's proportions. */
  width: number
  /** The cards under the front one, from the bottom one (in the original place) up. */
  under?: StackCard[]
  /** The card on top (with its badges), or a placeholder when the stack is empty. */
  children?: ReactNode
  className?: string
}

/**
 * A stack of cards on the board: the bottom card stays where a lone card would be and each
 * card on it sits a little up and to the left, so it shows there are more. It is used for
 * every slot (a hero or an ally with what is attached to it, a support, the deck, the
 * graveyard). Only the top STACK_MAX cards are drawn; the room a stack grows into is kept
 * by whoever places it (up to STACK_DEPTH above and to the left).
 */
export default function CardStack({ back, width, under = [], children, className }: CardStackProps) {
  const layers = under.slice(-(STACK_MAX - 1))
  const shift = (index: number) => -index * STACK_OFFSET
  const front = shift(layers.length)

  return (
    <span className={classNames('card-stack', className)} style={{ width }}>
      {layers.map((card, index) => (
        <span
          key={index}
          className={classNames('card-stack__under', card.className)}
          style={{ top: shift(index), left: shift(index), zIndex: index }}
        >
          <MiniCard cardId={card.cardId} back={back} width={width} />
        </span>
      ))}
      <span
        className="card-stack__front"
        style={{ zIndex: layers.length, transform: front ? `translate(${front}px, ${front}px)` : undefined }}
      >
        {children}
      </span>
    </span>
  )
}

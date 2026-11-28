'use client'

import './index.scss'
import classNames from 'classnames'
import { CSSProperties, ReactNode } from 'react'
import { DEFAULT_CARD_BACK } from '@/app/(protected)/(cards)/data/cardBacks'
import { useCardBackArt } from '@/app/(protected)/(cards)/stores/cardArt'
import { Rarity } from '@/app/(protected)/(engine)/models/Rarity'

interface FlipCardProps {
  flipped: boolean
  onFlip: () => void
  /** A tap on the card once face up (to see it big). */
  onOpen?: () => void
  rarity: Rarity
  /** Glows in its rarity's color once face up. */
  shine?: boolean
  /** What the face-down card says to screen readers. */
  label: string
  /** What the face-up card says to screen readers. */
  openLabel?: string
  className?: string
  style?: CSSProperties
  /** The face of the card. */
  children: ReactNode
}

/**
 * A card dealt face down that turns over when tapped, and once face up opens
 * (to see it big) with another tap. It fills its box: the parent sets the
 * width (and the 5:7 shape comes from `--flip-ratio`). The back is the
 * default card back of `yarn art` (public/backs/) when there is one, drawn in CSS otherwise.
 */
export default function FlipCard({
  flipped,
  onFlip,
  onOpen,
  rarity,
  shine,
  label,
  openLabel,
  className,
  style,
  children
}: FlipCardProps) {
  return (
    <div className={classNames('flip-card', `rarity-${rarity}`, className, { flipped, shine })} style={style}>
      <div className="flip-card__inner">
        <button
          type="button"
          className="flip-card__face back"
          onClick={onFlip}
          disabled={flipped}
          aria-label={label}
          data-silent
        >
          <CardBack />
        </button>
        <button
          type="button"
          className="flip-card__face front"
          onClick={onOpen}
          disabled={!flipped || !onOpen}
          aria-hidden={!flipped}
          aria-label={openLabel}
          tabIndex={flipped ? 0 : -1}
        >
          {children}
        </button>
      </div>
    </div>
  )
}

/**
 * The back of a card: the illustrated one (`back`, one of data/cardBacks.ts;
 * the default one when missing), or its CSS drawing (an hourglass in a
 * clockwork emblem) while there is no image.
 */
export function CardBack({ className, back = DEFAULT_CARD_BACK }: { className?: string; back?: string }) {
  const art = useCardBackArt(back)

  return (
    <span className={classNames('card-back', className, { illustrated: !!art })} aria-hidden="true">
      {art ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={art} alt="" draggable={false} />
      ) : (
        <>
          <span className="card-back__rays" />
          <span className="card-back__emblem">
            <span className="card-back__dial" />
            <span className="card-back__glass">⏳</span>
          </span>
          <span className="card-back__corner tl" />
          <span className="card-back__corner tr" />
          <span className="card-back__corner bl" />
          <span className="card-back__corner br" />
        </>
      )}
    </span>
  )
}

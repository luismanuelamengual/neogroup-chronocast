'use client'

import './index.scss'
import classNames from 'classnames'
import { useCardArt } from '@/app/(protected)/(cards)/stores/cardArt'

/**
 * A sealed booster pack, like the foil packs of trading cards: crimped top and
 * bottom, a metallic wrapper in the pack's color, the game's name, a window
 * with the art of a card and the name of the pack on a ribbon. Without the art
 * (not generated yet) the window shows the icon instead.
 */
export default function PackWrapper({
  name,
  art,
  icon,
  count,
  className
}: {
  name: string
  /** Card id whose art goes in the window of the pack. */
  art: string
  icon: string
  /** Cards inside, shown on a corner badge. */
  count: number
  className?: string
}) {
  const src = useCardArt(art)

  return (
    <span className={classNames('pack-wrapper', className)} aria-hidden="true">
      <span className="pack-wrapper__crimp top" />
      <span className="pack-wrapper__body">
        <span className="pack-wrapper__brand">ChronoCast</span>
        <span className="pack-wrapper__window">
          {src ? (
            <span className="pack-wrapper__art" style={{ backgroundImage: `url(${src})` }} />
          ) : (
            <span className="pack-wrapper__icon">{icon}</span>
          )}
          <span className="pack-wrapper__count">{count}</span>
        </span>
        <span className="pack-wrapper__ribbon">{name}</span>
        <span className="pack-wrapper__sheen" />
      </span>
      <span className="pack-wrapper__crimp bottom" />
    </span>
  )
}

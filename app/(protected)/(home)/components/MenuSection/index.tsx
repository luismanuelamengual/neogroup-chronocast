'use client'

import './index.scss'
import ButtonBase from '@mui/material/ButtonBase'
import classNames from 'classnames'
import Link from 'next/link'
import { useCardArt } from '@/app/(protected)/(cards)/stores/cardArt'

export type MenuSectionColor = 'magenta' | 'violet' | 'gold' | 'cyan' | 'lime'

/**
 * A section of the main menu (or a game mode of Play) as an illustrated card: the art of a card of the
 * game fills it, framed in the section's color, with the name on a banner at
 * the bottom. Without the art (not generated yet) the frame shows a gradient
 * of its color and the emoji instead.
 */
export default function MenuSection({
  href,
  label,
  art,
  icon,
  color,
  text,
  className
}: {
  href: string
  label: string
  /** Card id whose art illustrates the section. */
  art: string
  icon: string
  color: MenuSectionColor
  /** Optional line under the name, e.g. what a game mode is about. */
  text?: string
  className?: string
}) {
  const src = useCardArt(art)

  return (
    <ButtonBase component={Link} href={href} className={classNames('menu-section', `color-${color}`, className)}>
      {src ? (
        <span className="art" style={{ backgroundImage: `url(${src})` }} aria-hidden="true" />
      ) : (
        <span className="fallback" aria-hidden="true">
          {icon}
        </span>
      )}
      <span className="banner">
        <span className="icon" aria-hidden="true">
          {icon}
        </span>
        <span className="label">{label}</span>
        {text && <span className="text">{text}</span>}
      </span>
    </ButtonBase>
  )
}

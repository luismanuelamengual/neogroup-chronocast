'use client'

import './index.scss'
import classNames from 'classnames'
import { CSSProperties, ReactNode } from 'react'
import { SlotEffects } from '@/app/(protected)/(battle)/utils/effects'

export type SlotHighlight = 'attack' | 'move' | 'summon' | 'target' | null

interface BoardSlotProps {
  children?: ReactNode
  /** Shown when the slot is empty. */
  label?: string
  highlight?: SlotHighlight
  selected?: boolean
  /** Only in the projection (summoned or moved by the plan). */
  ghost?: boolean
  effects?: SlotEffects
  /** Changes with each moment of the resolution, so the animations replay. */
  frameKey?: number
  /** Which way an attack lunges. */
  side: 'top' | 'bottom'
  /** Which place of the board it is ("a:2", "b:hero"), for the arrows of the attacks. */
  slotKey?: string
  className?: string
  onClick?: () => void
}

/** A place on the board (an ally slot or the hero): highlights, selection and the animations of the resolution. */
export default function BoardSlot({
  children,
  label,
  highlight,
  selected,
  ghost,
  effects,
  frameKey,
  side,
  slotKey,
  className,
  onClick
}: BoardSlotProps) {
  return (
    <button
      type="button"
      className={classNames('board-slot', `side-${side}`, className, highlight && `highlight-${highlight}`, {
        selected,
        ghost,
        empty: !children
      })}
      data-slot={slotKey}
      onClick={onClick}
    >
      <span
        key={frameKey}
        className={classNames('board-slot__body', {
          attacking: effects?.attacking,
          hit: effects?.hit,
          summoned: effects?.summoned,
          moved: !!effects?.shift
        })}
        style={effects?.shift ? ({ '--shift': effects.shift } as CSSProperties) : undefined}
      >
        {children ?? <span className="board-slot__label">{label}</span>}
      </span>
      {effects?.dying && <span key={`poof-${frameKey}`} className="board-slot__poof" aria-hidden="true" />}
      {effects?.floats.map((float, index) => (
        <span
          key={`${frameKey}-${index}`}
          className={`board-slot__float tone-${float.tone}`}
          style={{ animationDelay: `${index * 180}ms` }}
        >
          {float.text}
        </span>
      ))}
    </button>
  )
}

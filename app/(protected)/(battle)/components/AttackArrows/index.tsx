'use client'

import './index.scss'
import classNames from 'classnames'
import { RefObject, useLayoutEffect, useState } from 'react'
import { AttackLine, refKey } from '@/app/(protected)/(battle)/utils/effects'

interface Arrow {
  key: string
  path: string
  missed: boolean
}

/** The center of a place of the board, relative to the container. */
function centerOf(container: HTMLElement, key: string): { x: number; y: number } | null {
  const element = container.querySelector<HTMLElement>(`[data-slot="${key}"]`)

  if (!element) {
    return null
  }

  const box = element.getBoundingClientRect()
  const origin = container.getBoundingClientRect()

  return { x: box.left - origin.left + box.width / 2, y: box.top - origin.top + box.height / 2 }
}

/**
 * The arrows of the attacks of one moment of the resolution, from the attacker
 * to its target: a curve that draws itself and fades (dashed when it misses).
 * Measured on the board, so they fit any screen.
 */
export default function AttackArrows({
  lines,
  frameKey,
  container
}: {
  lines: AttackLine[]
  frameKey: number
  container: RefObject<HTMLDivElement | null>
}) {
  const [arrows, setArrows] = useState<Arrow[]>([])
  const [size, setSize] = useState({ width: 0, height: 0 })

  useLayoutEffect(() => {
    const board = container.current

    if (!board || lines.length === 0) {
      setArrows([])

      return
    }

    setSize({ width: board.clientWidth, height: board.clientHeight })
    setArrows(
      lines.flatMap((line, index) => {
        const from = centerOf(board, refKey(line.from))
        const to = centerOf(board, refKey(line.to))

        if (!from || !to) {
          return []
        }

        // Bends to one side, more the longer it is.
        const bend = Math.min(80, Math.hypot(to.x - from.x, to.y - from.y) * 0.25) * (index % 2 ? -1 : 1)
        const middle = { x: (from.x + to.x) / 2 + bend, y: (from.y + to.y) / 2 }

        return [
          {
            key: `${frameKey}-${index}`,
            path: `M ${from.x} ${from.y} Q ${middle.x} ${middle.y} ${to.x} ${to.y}`,
            missed: line.missed
          }
        ]
      })
    )
  }, [lines, frameKey, container])

  if (arrows.length === 0) {
    return null
  }

  return (
    <svg
      className="attack-arrows"
      width={size.width}
      height={size.height}
      viewBox={`0 0 ${size.width} ${size.height}`}
      aria-hidden="true"
    >
      <defs>
        <marker
          id="attack-arrow-head"
          viewBox="0 0 10 10"
          refX="6"
          refY="5"
          markerWidth="4"
          markerHeight="4"
          orient="auto"
        >
          <path d="M 0 0 L 10 5 L 0 10 z" />
        </marker>
      </defs>
      {arrows.map((arrow) => (
        <path
          key={arrow.key}
          className={classNames('attack-arrows__line', { missed: arrow.missed })}
          d={arrow.path}
          pathLength={100}
          markerEnd="url(#attack-arrow-head)"
        />
      ))}
    </svg>
  )
}

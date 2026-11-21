import './index.scss'
import classNames from 'classnames'

/** The sand motes of the backdrop: horizontal position, size, drift duration and delay of each one. */
const MOTES = [
  { x: 4, size: 5, duration: 16, delay: 0 },
  { x: 11, size: 3, duration: 21, delay: 6 },
  { x: 19, size: 4, duration: 18, delay: 11 },
  { x: 27, size: 2, duration: 24, delay: 3 },
  { x: 35, size: 3, duration: 19, delay: 14 },
  { x: 46, size: 2, duration: 23, delay: 8 },
  { x: 55, size: 4, duration: 17, delay: 1 },
  { x: 63, size: 3, duration: 22, delay: 12 },
  { x: 71, size: 5, duration: 20, delay: 5 },
  { x: 79, size: 2, duration: 25, delay: 9 },
  { x: 86, size: 4, duration: 18, delay: 15 },
  { x: 94, size: 3, duration: 21, delay: 2 }
]

/**
 * Decorative layer of the menus, the landing and the sign in pages: a slowly
 * turning dial behind the content and a few golden motes of time sand drifting
 * upwards. The clockwork watermark itself lives in the page background. Pure
 * CSS, so it costs nothing to load and works offline.
 */
export default function Backdrop({ className }: { className?: string }) {
  return (
    <div className={classNames('backdrop', className)} aria-hidden="true">
      <span className="dial" />
      {MOTES.map((mote, index) => (
        <span
          key={index}
          className="mote"
          style={
            {
              left: `${mote.x}%`,
              '--size': `${mote.size}px`,
              animationDuration: `${mote.duration}s`,
              animationDelay: `-${mote.delay}s`
            } as React.CSSProperties
          }
        />
      ))}
    </div>
  )
}

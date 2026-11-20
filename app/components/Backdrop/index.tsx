import './index.scss'
import classNames from 'classnames'

/** The floating cards of the backdrop: position, size, tilt, color and animation delay of each one. */
const CARDS = [
  { x: 6, y: 14, size: 1, tilt: -14, color: 'var(--faction-bronze)', delay: 0 },
  { x: 18, y: 68, size: 0.8, tilt: 10, color: 'var(--faction-neon)', delay: 1.2 },
  { x: 80, y: 10, size: 0.9, tilt: 12, color: 'var(--faction-arcane)', delay: 0.6 },
  { x: 90, y: 58, size: 1.1, tilt: -8, color: 'var(--faction-primal)', delay: 2 },
  { x: 64, y: 80, size: 0.7, tilt: 18, color: 'var(--faction-void)', delay: 1.6 },
  { x: 36, y: 6, size: 0.6, tilt: -20, color: 'var(--faction-clockwork)', delay: 2.4 }
]

/**
 * Decorative background of the menus, the landing and the sign in pages: a few
 * vivid cards seen from the back, floating slowly over the pastel page. Pure
 * CSS, so it costs nothing to load and works offline.
 */
export default function Backdrop({ className }: { className?: string }) {
  return (
    <div className={classNames('backdrop', className)} aria-hidden="true">
      {CARDS.map((card, index) => (
        <span
          key={index}
          className="floating-card"
          style={
            {
              left: `${card.x}%`,
              top: `${card.y}%`,
              '--size': card.size,
              '--tilt': `${card.tilt}deg`,
              '--color': card.color,
              animationDelay: `${card.delay}s`
            } as React.CSSProperties
          }
        />
      ))}
    </div>
  )
}

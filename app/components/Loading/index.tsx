import './index.scss'
import classNames from 'classnames'

interface LoadingProps {
  message?: string
  /** How much has loaded, from 0 to 1: shown as a bar and a percentage under the dial (nothing when not known). */
  progress?: number | null
  className?: string
}

const TICKS = Array.from({ length: 12 }, (_, index) => index)
const MOTES = Array.from({ length: 6 }, (_, index) => index)

/**
 * Full-screen loading state over the game's page background: an arcane clock dial
 * whose golden arc chases around the ring, a hand sweeping the hours and sand motes
 * orbiting it, with an optional message and progress bar under it.
 */
export default function Loading({ message, progress, className }: LoadingProps) {
  const percent = progress == null ? null : Math.max(0, Math.min(100, Math.floor(progress * 100)))

  return (
    <div className={classNames('loading-screen', className)} role="status" aria-live="polite">
      <div className="wrapper">
        <div className="dial" aria-hidden="true">
          <div className="glow" />
          <div className="orbit">
            {MOTES.map((index) => (
              <span key={index} className="mote" style={{ ['--i' as string]: index }} />
            ))}
          </div>
          <svg className="face" viewBox="0 0 100 100">
            <defs>
              <linearGradient id="loading-arc" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#ffe89a" />
                <stop offset="45%" stopColor="#ffc93c" />
                <stop offset="100%" stopColor="#8a5cff" />
              </linearGradient>
              <radialGradient id="loading-core" cx="50%" cy="40%" r="60%">
                <stop offset="0%" stopColor="#ffffff" />
                <stop offset="100%" stopColor="#ede7ff" />
              </radialGradient>
            </defs>
            <circle cx="50" cy="50" r="40" fill="url(#loading-core)" stroke="#c98a22" strokeWidth="2.4" />
            <circle
              className="ring-dashed"
              cx="50"
              cy="50"
              r="33"
              fill="none"
              stroke="#8a5cff"
              strokeWidth="1"
              strokeDasharray="2 4"
            />
            {TICKS.map((index) => (
              <rect
                key={index}
                x="49"
                y="12.5"
                width="2"
                height={index % 3 === 0 ? 6 : 3.5}
                rx="1"
                fill="#3b2a6e"
                transform={`rotate(${index * 30} 50 50)`}
              />
            ))}
            <circle
              className="arc"
              cx="50"
              cy="50"
              r="46"
              fill="none"
              stroke="url(#loading-arc)"
              strokeWidth="4.5"
              strokeLinecap="round"
              pathLength="100"
              strokeDasharray="28 72"
            />
            <g className="hand">
              <path d="M50 50 L50 22" stroke="#3b2a6e" strokeWidth="2.6" strokeLinecap="round" />
              <path d="M50 18 l3.5 6 h-7z" fill="#c98a22" />
            </g>
            <g className="hand-short">
              <path d="M50 50 L66 50" stroke="#3b2a6e" strokeWidth="3" strokeLinecap="round" />
            </g>
            <circle className="gem" cx="50" cy="50" r="5" fill="#8a5cff" stroke="#3b2a6e" strokeWidth="1.4" />
          </svg>
        </div>
        {message && <p className="message">{message}</p>}
        {percent != null && (
          <div className="progress" role="progressbar" aria-valuemin={0} aria-valuemax={100} aria-valuenow={percent}>
            <div className="bar">
              <div className="fill" style={{ transform: `scaleX(${percent / 100})` }} />
            </div>
            <span className="percent">{percent}%</span>
          </div>
        )}
      </div>
    </div>
  )
}

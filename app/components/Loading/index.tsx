import './index.scss'
import classNames from 'classnames'

interface LoadingProps {
  message?: string
  /** How much has loaded, from 0 to 1: shown as a percentage under the hourglass (nothing when not known). */
  progress?: number | null
  className?: string
}

/** Full-area loading overlay: a turning hourglass over a soft pastel veil. */
export default function Loading({ message, progress, className }: LoadingProps) {
  const percent = progress == null ? null : Math.max(0, Math.min(100, Math.floor(progress * 100)))

  return (
    <div className={classNames('loading-screen', className)}>
      <div className="wrapper">
        <svg className="hourglass" viewBox="0 0 24 32" aria-hidden="true">
          <path
            d="M4 2h16v4c0 4-4 7-6 10 2 3 6 6 6 10v4H4v-4c0-4 4-7 6-10-2-3-6-6-6-10V2z"
            fill="#ffffff"
            stroke="var(--color-outline)"
            strokeWidth="2.2"
            strokeLinejoin="round"
          />
          <path className="top" d="M7 7h10c-1 2.5-3 4.5-5 7-2-2.5-4-4.5-5-7z" />
          <path className="bottom" d="M12 21c2 1.6 4.5 3.6 5 6H7c.5-2.4 3-4.4 5-6z" />
        </svg>
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

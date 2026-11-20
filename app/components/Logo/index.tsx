import './index.scss'
import classNames from 'classnames'

/** ChronoCast wordmark: an hourglass and the name in two vivid colors with an ink outline. */
export default function Logo({
  size = 'medium',
  className
}: {
  size?: 'small' | 'medium' | 'large'
  className?: string
}) {
  return (
    <span className={classNames('logo', `size-${size}`, className)}>
      <svg className="hourglass" viewBox="0 0 24 32" aria-hidden="true">
        <path
          d="M4 2h16v4c0 4-4 7-6 10 2 3 6 6 6 10v4H4v-4c0-4 4-7 6-10-2-3-6-6-6-10V2z"
          fill="#ffffff"
          stroke="var(--color-outline)"
          strokeWidth="2.2"
          strokeLinejoin="round"
        />
        <path d="M7 7h10c-1 2.5-3 4.5-5 7-2-2.5-4-4.5-5-7z" fill="var(--color-magenta)" />
        <path d="M12 21c2 1.6 4.5 3.6 5 6H7c.5-2.4 3-4.4 5-6z" fill="var(--color-cyan)" />
      </svg>
      <span className="word">
        <span className="chrono">Chrono</span>
        <span className="cast">Cast</span>
      </span>
    </span>
  )
}

import './index.scss'
import classNames from 'classnames'

/** ChronoCast wordmark: a brass hourglass inside an arcane ring and the name engraved in gold. */
export default function Logo({
  size = 'medium',
  className
}: {
  size?: 'small' | 'medium' | 'large'
  className?: string
}) {
  return (
    <span className={classNames('logo', `size-${size}`, className)}>
      <svg className="emblem" viewBox="0 0 40 40" aria-hidden="true">
        <circle cx="20" cy="20" r="18" fill="none" stroke="#c98a22" strokeWidth="1.6" />
        <circle cx="20" cy="20" r="15.2" fill="none" stroke="#3b2a6e" strokeWidth="0.6" strokeDasharray="1.2 2.2" />
        {Array.from({ length: 12 }, (_, index) => (
          <rect
            key={index}
            x="19.4"
            y="1.2"
            width="1.2"
            height={index % 3 === 0 ? 3.4 : 2}
            fill="#3b2a6e"
            transform={`rotate(${index * 30} 20 20)`}
          />
        ))}
        <path d="M12.5 8.5h15" stroke="#c98a22" strokeWidth="2.4" strokeLinecap="round" />
        <path d="M12.5 31.5h15" stroke="#c98a22" strokeWidth="2.4" strokeLinecap="round" />
        <path
          d="M14 9.5c0 5 4.2 7.4 4.2 10.5S14 25.5 14 30.5h12c0-5-4.2-7.4-4.2-10.5S26 14.5 26 9.5z"
          fill="rgba(255, 252, 240, 0.85)"
          stroke="#3b2a6e"
          strokeWidth="1"
          strokeLinejoin="round"
        />
        <path d="M15.6 12h8.8c-.6 2.6-3 4.6-4.4 6.6-1.4-2-3.8-4-4.4-6.6z" fill="#7a52e6" />
        <path d="M20 21.5v4.5" stroke="#8a5cff" strokeWidth="0.7" strokeDasharray="0.8 0.9" />
        <path d="M15.4 29.5c.8-2.2 2.6-3.4 4.6-3.4s3.8 1.2 4.6 3.4z" fill="#7a52e6" />
      </svg>
      <span className="word">
        <span className="chrono">Chrono</span>
        <span className="cast">Cast</span>
      </span>
    </span>
  )
}

'use client'

import './index.scss'
import ButtonBase, { ButtonBaseProps } from '@mui/material/ButtonBase'
import CircularProgress from '@mui/material/CircularProgress'
import classNames from 'classnames'
import Link from 'next/link'
import { ReactNode } from 'react'

export type GameButtonColor = 'primary' | 'secondary' | 'danger'
export type GameButtonSize = 'small' | 'medium' | 'large'

interface GameButtonProps extends Omit<ButtonBaseProps, 'color'> {
  color?: GameButtonColor
  size?: GameButtonSize
  fullWidth?: boolean
  loading?: boolean
  startIcon?: ReactNode
  endIcon?: ReactNode
  /** When set, the button renders as a Next.js link. */
  href?: string
}

/**
 * Game button: a chunky glossy button with a dark ink outline, in one of the
 * three colors of the app: primary (gold, the main call to action of each
 * screen), secondary (white, for secondary and neutral actions) or danger
 * (red, only for destructive actions such as deleting).
 */
export default function GameButton({
  color = 'primary',
  size = 'medium',
  fullWidth,
  loading,
  startIcon,
  endIcon,
  href,
  disabled,
  className,
  children,
  ...props
}: GameButtonProps) {
  const classes = classNames('game-button', `color-${color}`, `size-${size}`, className, {
    'full-width': fullWidth,
    loading
  })
  const content = (
    <>
      {loading ? <CircularProgress size="1.1em" color="inherit" className="icon" /> : startIcon}
      <span className="label">{children}</span>
      {!loading && endIcon}
    </>
  )

  if (href) {
    return (
      <ButtonBase component={Link} href={href} className={classes} disabled={disabled || loading} {...props}>
        {content}
      </ButtonBase>
    )
  }

  return (
    <ButtonBase className={classes} disabled={disabled || loading} {...props}>
      {content}
    </ButtonBase>
  )
}

'use client'

import './index.scss'
import classNames from 'classnames'
import { useI18n } from '@/app/i18n/I18nProvider'

/** An amount of gold, with its coin. */
export default function GoldAmount({ amount, className }: { amount: number; className?: string }) {
  const { locale } = useI18n()

  return (
    <span className={classNames('gold-amount', className)}>
      <span aria-hidden="true">🪙</span>
      {amount.toLocaleString(locale)}
    </span>
  )
}

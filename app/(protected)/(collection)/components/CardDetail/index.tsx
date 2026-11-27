'use client'

import './index.scss'
import { ReactNode } from 'react'
import CardView from '@/app/(protected)/(cards)/components/CardView'
import { restrictionText } from '@/app/(protected)/(collection)/utils/filters'
import { getCard } from '@/app/(protected)/(engine)/utils/registry'
import GameButton from '@/app/components/GameButton'
import { useCardName } from '@/app/i18n/cards/useCardName'
import { useT } from '@/app/i18n/I18nProvider'

interface CardDetailProps {
  cardId: string
  owned: number
  onClose: () => void
  /** Extra actions (buy, sell...), above the close button. */
  children?: ReactNode
  /** Close with a small ✕ at the top right corner instead of a button at the bottom. */
  cornerClose?: boolean
}

/** A card in big, with how many the player owns and who can use it. */
export default function CardDetail({ cardId, owned, onClose, children, cornerClose }: CardDetailProps) {
  const t = useT()
  const cardName = useCardName()
  const card = getCard(cardId)

  return (
    <div className="card-detail" onClick={onClose}>
      <div className="card-detail__panel" onClick={(event) => event.stopPropagation()}>
        {cornerClose && (
          <button type="button" className="card-detail__x" aria-label={t('common.close')} onClick={onClose}>
            ✕
          </button>
        )}
        <div className="card-detail__card">
          <CardView card={card} />
        </div>
        <div className="card-detail__info">
          <h2>{cardName(card)}</h2>
          <p>
            {t(`game.types.${card.type}`)} · {t(`game.rarities.${card.rarity}`)} · {t(`game.factions.${card.faction}`)}
          </p>
          <p className={owned > 0 ? 'owned' : 'missing'}>
            {owned > 0 ? t('collection.owned', { count: owned }) : t('collection.notOwned')}
          </p>
          <h3>{t('collection.whoCanUse')}</h3>
          <p>{card.type === 'hero' ? '—' : restrictionText(card, t)}</p>
          {children}
          {!cornerClose && (
            <GameButton color="secondary" size="small" onClick={onClose}>
              {t('common.close')}
            </GameButton>
          )}
        </div>
      </div>
    </div>
  )
}

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
}

/** A card in big, with how many the player owns and who can use it. */
export default function CardDetail({ cardId, owned, onClose, children }: CardDetailProps) {
  const t = useT()
  const cardName = useCardName()
  const card = getCard(cardId)

  return (
    <div className="card-detail" onClick={onClose}>
      <div className="card-detail__panel" onClick={(event) => event.stopPropagation()}>
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
          <GameButton color="secondary" size="small" onClick={onClose}>
            {t('common.close')}
          </GameButton>
        </div>
      </div>
    </div>
  )
}

'use client'

import './index.scss'
import classNames from 'classnames'
import { useState } from 'react'
import { CardBack } from '@/app/(protected)/(cards)/components/FlipCard'
import { CARD_BACKS, cardBackNameKey } from '@/app/(protected)/(cards)/data/cardBacks'
import GoldAmount from '@/app/(protected)/(shop)/components/GoldAmount'
import { useShop } from '@/app/(protected)/(shop)/hooks/useShop'
import { ShopState } from '@/app/(protected)/(shop)/models/ShopState'
import GameButton from '@/app/components/GameButton'
import { useNotifications } from '@/app/hooks/useNotifications'
import { useT } from '@/app/i18n/I18nProvider'

interface CardBackShopProps {
  state: ShopState
  onChange: (state: ShopState) => void
}

/**
 * The card backs tab: every back for sale in one grid, cheapest first (the
 * pricier, the more elaborate), each with its price or as already owned. A tap on one shows it
 * big, with the button to buy it. Each deck picks its back in the deck editor.
 */
export default function CardBackShop({ state, onChange }: CardBackShopProps) {
  const t = useT()
  const { buyCardBack } = useShop()
  const { showSuccessMessage } = useNotifications()
  const [preview, setPreview] = useState<string | null>(null)
  const [buying, setBuying] = useState<string | null>(null)
  const owned = new Set(state.cardBacks)
  const name = (id: string) => t(cardBackNameKey(id))

  const buy = async (id: string) => {
    setBuying(id)

    try {
      onChange(await buyCardBack(id))
      showSuccessMessage(t('shop.backs.bought', { back: name(id) }))
    } catch {
      // The error is already shown as a toast.
    } finally {
      setBuying(null)
    }
  }

  const action = (id: string, price: number) =>
    owned.has(id) ? (
      <span className="card-back-shop__owned">✔ {t('shop.backs.owned')}</span>
    ) : (
      <GameButton
        size="small"
        color="primary"
        disabled={state.gold < price || (buying != null && buying !== id)}
        loading={buying === id}
        onClick={() => buy(id)}
      >
        <GoldAmount amount={price} />
      </GameButton>
    )
  const shown = preview ? CARD_BACKS.find((back) => back.id === preview) : null

  return (
    <div className="card-back-shop">
      <p className="card-back-shop__intro">{t('shop.backs.intro')}</p>
      <div className="card-back-shop__grid">
        {CARD_BACKS.filter((back) => back.price > 0).map((back) => (
          <article
            key={back.id}
            className={classNames('card-back-shop__item', `tier-${back.tier}`, { owned: owned.has(back.id) })}
          >
            <button
              type="button"
              className="card-back-shop__thumb"
              aria-label={name(back.id)}
              onClick={() => setPreview(back.id)}
            >
              <CardBack back={back.id} />
            </button>
            <strong>{name(back.id)}</strong>
            {action(back.id, back.price)}
          </article>
        ))}
      </div>

      {shown && (
        <div
          className="card-back-shop__preview"
          role="dialog"
          aria-label={name(shown.id)}
          onClick={() => setPreview(null)}
        >
          <div className="card-back-shop__preview-card">
            <CardBack back={shown.id} />
          </div>
          <div className="card-back-shop__preview-info" onClick={(event) => event.stopPropagation()}>
            <h2>{name(shown.id)}</h2>
            {owned.has(shown.id) ? (
              <>
                <span className="card-back-shop__owned">✔ {t('shop.backs.owned')}</span>
                <p>{t('shop.backs.useInDeck')}</p>
              </>
            ) : (
              <>
                <GameButton
                  color="primary"
                  disabled={state.gold < shown.price || buying != null}
                  loading={buying === shown.id}
                  onClick={() => buy(shown.id)}
                >
                  {t('shop.buy')} · <GoldAmount amount={shown.price} />
                </GameButton>
                {state.gold < shown.price && <p>{t('shop.backs.noGold')}</p>}
              </>
            )}
            <GameButton color="secondary" size="small" onClick={() => setPreview(null)}>
              {t('common.close')}
            </GameButton>
          </div>
        </div>
      )}
    </div>
  )
}

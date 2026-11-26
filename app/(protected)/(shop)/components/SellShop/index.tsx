'use client'

import './index.scss'
import { useMemo, useState } from 'react'
import CardView from '@/app/(protected)/(cards)/components/CardView'
import CardDetail from '@/app/(protected)/(collection)/components/CardDetail'
import { compareCards } from '@/app/(protected)/(collection)/utils/filters'
import { getCard, hasCard } from '@/app/(protected)/(engine)/utils/registry'
import GoldAmount from '@/app/(protected)/(shop)/components/GoldAmount'
import { useShop } from '@/app/(protected)/(shop)/hooks/useShop'
import { Sale, ShopState } from '@/app/(protected)/(shop)/models/ShopState'
import {
  copyLimit,
  isSellable,
  isValuable,
  quickSellPlan,
  sellableCopies,
  sellPrice
} from '@/app/(protected)/(shop)/utils/prices'
import GameButton from '@/app/components/GameButton'
import { useIncrementalList } from '@/app/hooks/useIncrementalList'
import { useNotifications } from '@/app/hooks/useNotifications'
import { useI18n } from '@/app/i18n/I18nProvider'

interface SellShopProps {
  state: ShopState
  onChange: (state: ShopState) => void
}

/** A sale waiting for the player's yes: what and why it asks. */
interface PendingSale {
  cardId: string
  count: number
}

/**
 * The sell tab (docs/PLAN.md, section 11.3): quick sell of the spare copies
 * with its total before confirming, and the sale of single copies, which asks
 * first for an epic or better. The copies the active deck holds cannot be sold,
 * so the list shows only the free copies of each card and leaves out the cards
 * with none.
 */
export default function SellShop({ state, onChange }: SellShopProps) {
  const { t, locale } = useI18n()
  const { sellCards, quickSell } = useShop()
  const { showSuccessMessage } = useNotifications()
  const [detail, setDetail] = useState<string | null>(null)
  const [pending, setPending] = useState<PendingSale | null>(null)
  const [confirmingQuick, setConfirmingQuick] = useState(false)
  const [busy, setBusy] = useState(false)
  const plan = useMemo(() => quickSellPlan(state.collection, state.deckUsage), [state.collection, state.deckUsage])
  const planCount = Object.values(plan.cards).reduce((sum, count) => sum + count, 0)
  const cards = useMemo(
    () =>
      Object.keys(state.collection)
        .filter(
          (cardId) =>
            hasCard(cardId) &&
            isSellable(getCard(cardId)) &&
            sellableCopies(state.collection[cardId] ?? 0, state.deckUsage[cardId]) > 0
        )
        .map(getCard)
        .sort(compareCards),
    [state.collection, state.deckUsage]
  )
  const freeCopies = (cardId: string) => sellableCopies(state.collection[cardId] ?? 0, state.deckUsage[cardId])

  const finish = async (action: () => Promise<Sale>) => {
    setBusy(true)

    try {
      const sale = await action()
      const count = Object.values(sale.cards).reduce((sum, value) => sum + value, 0)

      onChange(sale.state)
      showSuccessMessage(t('shop.sell.sold', { count, gold: sale.gold.toLocaleString(locale) }))

      if (detail && sellableCopies(sale.state.collection[detail] ?? 0, sale.state.deckUsage[detail]) === 0) {
        setDetail(null)
      }
    } catch {
      // The error is already shown as a toast.
    } finally {
      setBusy(false)
      setPending(null)
      setConfirmingQuick(false)
    }
  }

  const sell = (cardId: string, count: number) => {
    if (isValuable(getCard(cardId))) {
      setPending({ cardId, count })
    } else {
      finish(() => sellCards({ [cardId]: count }))
    }
  }

  const actions = (cardId: string) => {
    const card = getCard(cardId)
    const owned = state.collection[cardId] ?? 0
    const used = state.deckUsage[cardId] ?? 0
    const free = sellableCopies(owned, used)
    const spare = owned - Math.max(copyLimit(card), used)

    if (pending?.cardId === cardId) {
      return (
        <div className="sell-shop__confirm">
          <p>{t('shop.sell.confirmValuable', { rarity: t(`game.rarities.${card.rarity}`) })}</p>
          <div>
            <GameButton
              size="small"
              color="primary"
              loading={busy}
              onClick={() => finish(() => sellCards({ [cardId]: pending.count }))}
            >
              {t('shop.sell.confirm')}
            </GameButton>
            <GameButton size="small" color="secondary" onClick={() => setPending(null)}>
              {t('shop.sell.cancel')}
            </GameButton>
          </div>
        </div>
      )
    }

    if (free === 0) {
      return null
    }

    return (
      <div className="sell-shop__actions">
        {used > 0 && <p className="sell-shop__locked">{t('shop.sell.freeCopies', { count: free })}</p>}
        <GameButton size="small" color="primary" disabled={busy} onClick={() => sell(cardId, 1)}>
          {t('shop.sell.sellOne')} · <GoldAmount amount={sellPrice(card)} />
        </GameButton>
        {spare > 1 && (
          <GameButton size="small" color="secondary" disabled={busy} onClick={() => sell(cardId, spare)}>
            {t('shop.sell.sellExtra', { count: spare, gold: (sellPrice(card) * spare).toLocaleString(locale) })}
          </GameButton>
        )}
      </div>
    )
  }

  const { visible: visibleCards, sentinel: sentinelCards } = useIncrementalList(cards)

  return (
    <div className="sell-shop">
      <section className="sell-shop__quick">
        <div>
          <h2>⚡ {t('shop.sell.quick')}</h2>
          <p>{t('shop.sell.quickText')}</p>
          <strong>
            {planCount > 0
              ? t('shop.sell.quickPreview', { count: planCount, gold: plan.gold.toLocaleString(locale) })
              : t('shop.sell.quickNothing')}
          </strong>
        </div>
        {confirmingQuick ? (
          <div className="sell-shop__quick-confirm">
            <GameButton color="primary" loading={busy} onClick={() => finish(quickSell)}>
              {t('shop.sell.confirm')}
            </GameButton>
            <GameButton color="secondary" onClick={() => setConfirmingQuick(false)}>
              {t('shop.sell.cancel')}
            </GameButton>
          </div>
        ) : (
          <GameButton color="primary" disabled={planCount === 0} onClick={() => setConfirmingQuick(true)}>
            {t('shop.sell.quickButton')}
          </GameButton>
        )}
      </section>
      {cards.length === 0 && <p className="sell-shop__empty">{t('shop.sell.empty')}</p>}
      <div className="sell-shop__grid">
        {visibleCards.map((card) => (
          <button key={card.id} type="button" className="sell-shop__card" onClick={() => setDetail(card.id)}>
            <span className="sell-shop__zoom">
              <CardView card={card} />
            </span>
            <span className="sell-shop__owned">×{freeCopies(card.id)}</span>
            <span className="sell-shop__tags">
              <span className="sell-shop__price" title={t('shop.sell.price', { gold: sellPrice(card) })}>
                +<GoldAmount amount={sellPrice(card)} />
              </span>
            </span>
          </button>
        ))}
        <span ref={sentinelCards} className="incremental-sentinel" aria-hidden="true" />
      </div>
      {detail && (
        <CardDetail
          cardId={detail}
          owned={freeCopies(detail)}
          onClose={() => {
            setDetail(null)
            setPending(null)
          }}
        >
          {actions(detail)}
        </CardDetail>
      )}
    </div>
  )
}

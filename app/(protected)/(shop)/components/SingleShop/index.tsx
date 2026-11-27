'use client'

import './index.scss'
import classNames from 'classnames'
import { useMemo, useState } from 'react'
import CardView from '@/app/(protected)/(cards)/components/CardView'
import { CARDS, HEROES } from '@/app/(protected)/(cards)/utils/catalog'
import CardDetail from '@/app/(protected)/(collection)/components/CardDetail'
import CardFilters from '@/app/(protected)/(collection)/components/CardFilters'
import { CardFilter, compareCards, EMPTY_FILTER, matchesFilter } from '@/app/(protected)/(collection)/utils/filters'
import { CardDefinition } from '@/app/(protected)/(engine)/models/CardDefinition'
import { getCard } from '@/app/(protected)/(engine)/utils/registry'
import { rarityLevel } from '@/app/(protected)/(progression)/utils/levels'
import GoldAmount from '@/app/(protected)/(shop)/components/GoldAmount'
import { useShop } from '@/app/(protected)/(shop)/hooks/useShop'
import { Sale, ShopState } from '@/app/(protected)/(shop)/models/ShopState'
import {
  isBuyable,
  isSellable,
  isValuable,
  quickSellPlan,
  sellableCopies,
  sellPrice,
  shopPrice
} from '@/app/(protected)/(shop)/utils/prices'
import GameButton from '@/app/components/GameButton'
import { useIncrementalList } from '@/app/hooks/useIncrementalList'
import { useNotifications } from '@/app/hooks/useNotifications'
import { useCardName } from '@/app/i18n/cards/useCardName'
import { useI18n } from '@/app/i18n/I18nProvider'

interface SingleShopProps {
  state: ShopState
  onChange: (state: ShopState) => void
}

/**
 * The cards tab (docs/PLAN.md, sections 11.2 and 11.3): buying and selling
 * single cards in one place. Every card for sale is listed, with the filters of
 * the collection and the copies the player owns, plus the owned cards the shop
 * does not sell (campaign rewards) so they can still be sold. Opening a card
 * shows the buy and sell buttons, disabled with the reason when they can't be
 * used. The rarities the player's level has not opened are blurred, with a
 * padlock and the level that opens them (RARITY_LEVELS), unless the player
 * already owns copies (from a pack): then the card shows, but can't be bought
 * yet. A small quick sell button at the top sells the spare copies.
 */
export default function SingleShop({ state, onChange }: SingleShopProps) {
  const { t, locale } = useI18n()
  const cardName = useCardName()
  const { buyCard, sellCards, quickSell } = useShop()
  const { showSuccessMessage } = useNotifications()
  const [filter, setFilter] = useState<CardFilter>(EMPTY_FILTER)
  const [detail, setDetail] = useState<string | null>(null)
  const [busy, setBusy] = useState<'buy' | 'sell' | 'quick' | null>(null)
  const [confirmingSale, setConfirmingSale] = useState(false)
  const [confirmingQuick, setConfirmingQuick] = useState(false)
  const owned = (cardId: string) => state.collection[cardId] ?? 0
  const freeCopies = (cardId: string) => sellableCopies(owned(cardId), state.deckUsage[cardId])
  const isUnlocked = (card: CardDefinition) => state.unlocked.includes(card.rarity)
  // A locked rarity stays a mystery, unless the player already holds the card.
  const isHidden = (card: CardDefinition) => !isUnlocked(card) && owned(card.id) === 0
  const plan = useMemo(() => quickSellPlan(state.collection, state.deckUsage), [state.collection, state.deckUsage])
  const planCount = Object.values(plan.cards).reduce((sum, count) => sum + count, 0)
  const cards = useMemo(
    () =>
      CARDS.filter(
        (card) =>
          (isBuyable(card) || (isSellable(card) && owned(card.id) > 0)) &&
          matchesFilter(card, filter, owned(card.id)) &&
          // A search by name or text never finds a hidden card: what it holds is a mystery.
          (!filter.search.trim() || !isHidden(card))
      )
        .slice()
        .sort(
          (a, b) =>
            Number(isHidden(a)) - Number(isHidden(b)) ||
            (isHidden(a) ? rarityLevel(a.rarity) - rarityLevel(b.rarity) : 0) ||
            compareCards(a, b)
        ),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [filter, state.collection, state.unlocked]
  )

  const run = async (
    kind: 'buy' | 'sell' | 'quick',
    action: () => Promise<ShopState>,
    success: (state: ShopState) => string
  ) => {
    setBusy(kind)

    try {
      const next = await action()

      onChange(next)
      showSuccessMessage(success(next))
    } catch {
      // The error is already shown as a toast.
    } finally {
      setBusy(null)
      setConfirmingSale(false)
      setConfirmingQuick(false)
    }
  }

  const soldMessage = (sale: Sale) =>
    t('shop.sell.sold', {
      count: Object.values(sale.cards).reduce((sum, value) => sum + value, 0),
      gold: sale.gold.toLocaleString(locale)
    })

  const sale = (kind: 'sell' | 'quick', action: () => Promise<Sale>) => {
    let message = ''

    return run(
      kind,
      async () => {
        const result = await action()

        message = soldMessage(result)

        return result.state
      },
      () => message
    )
  }

  const buy = (cardId: string) =>
    run(
      'buy',
      () => buyCard(cardId, 1),
      () => t('shop.cards.bought', { count: 1, card: cardName(cardId) })
    )

  const sell = (cardId: string) => {
    if (isValuable(getCard(cardId)) && !confirmingSale) {
      setConfirmingSale(true)
    } else {
      sale('sell', () => sellCards({ [cardId]: 1 }))
    }
  }

  const closeDetail = () => {
    setDetail(null)
    setConfirmingSale(false)
  }

  /** Why a copy of the card can't be bought now (null: it can). */
  const buyBlock = (card: CardDefinition): string | null => {
    if (!isBuyable(card)) {
      return t('shop.cards.notForSale')
    }

    if (!isUnlocked(card)) {
      return t('shop.cards.lockedLevel', { level: rarityLevel(card.rarity) })
    }

    if (card.type === 'hero' && owned(card.id) > 0) {
      return t('shop.cards.heroOwned')
    }

    if (state.gold < shopPrice(card)) {
      return t('shop.cards.noGold')
    }

    return null
  }

  /** Why a copy of the card can't be sold now (null: it can). */
  const sellBlock = (card: CardDefinition): string | null => {
    if (!isSellable(card)) {
      return t('shop.sell.notSellable')
    }

    if (owned(card.id) === 0) {
      return t('shop.sell.noneOwned')
    }

    if (freeCopies(card.id) === 0) {
      return t('shop.sell.allInDeck')
    }

    return null
  }

  const actions = (cardId: string) => {
    const card = getCard(cardId)
    const cantBuy = buyBlock(card)
    const cantSell = sellBlock(card)
    const free = freeCopies(cardId)
    const used = state.deckUsage[cardId] ?? 0

    if (confirmingSale) {
      return (
        <div className="single-shop__confirm">
          <p>{t('shop.sell.confirmValuable', { rarity: t(`game.rarities.${card.rarity}`) })}</p>
          <div>
            <GameButton size="small" color="primary" loading={busy === 'sell'} onClick={() => sell(cardId)}>
              {t('shop.sell.confirm')}
            </GameButton>
            <GameButton size="small" color="secondary" onClick={() => setConfirmingSale(false)}>
              {t('shop.sell.cancel')}
            </GameButton>
          </div>
        </div>
      )
    }

    return (
      <div className="single-shop__actions">
        <div className="single-shop__buttons">
          <GameButton
            fullWidth
            color="primary"
            disabled={cantBuy != null || busy != null}
            loading={busy === 'buy'}
            onClick={() => buy(cardId)}
          >
            {t('shop.buy')} · <GoldAmount amount={shopPrice(card)} />
          </GameButton>
          <GameButton
            fullWidth
            color="secondary"
            disabled={cantSell != null || busy != null}
            loading={busy === 'sell'}
            onClick={() => sell(cardId)}
          >
            {t('shop.sell.sellOne')} · <GoldAmount amount={sellPrice(card)} />
          </GameButton>
        </div>
        {cantBuy && <p className="single-shop__why">🛒 {cantBuy}</p>}
        {cantSell ? (
          <p className="single-shop__why">💰 {cantSell}</p>
        ) : (
          used > 0 && <p className="single-shop__why">💰 {t('shop.sell.freeCopies', { count: free })}</p>
        )}
      </div>
    )
  }

  const { visible: visibleCards, sentinel: sentinelCards } = useIncrementalList(cards)

  return (
    <div className="single-shop">
      <div className="single-shop__bar">
        <CardFilters filter={filter} onChange={setFilter} heroes={HEROES.map((hero) => hero.id)} />
        <GameButton
          size="small"
          color="primary"
          className="single-shop__quick"
          disabled={planCount === 0 || busy != null}
          onClick={() => setConfirmingQuick(true)}
        >
          ⚡ {t('shop.sell.quick')}
        </GameButton>
      </div>
      {cards.length === 0 && <p className="single-shop__empty">{t('shop.cards.empty')}</p>}
      <div className="single-shop__grid">
        {visibleCards.map((card) => {
          const hidden = isHidden(card)

          return (
            <button
              key={card.id}
              type="button"
              className={classNames('single-shop__card', { 'single-shop__card--locked': hidden })}
              disabled={hidden}
              onClick={() => setDetail(card.id)}
            >
              <span className="single-shop__zoom" aria-hidden={hidden}>
                <CardView card={card} />
              </span>
              {hidden ? (
                <span className="single-shop__lock">
                  <span aria-hidden="true">🔒</span>
                  {t('shop.cards.lockedLevel', { level: rarityLevel(card.rarity) })}
                </span>
              ) : (
                <span
                  className={classNames('single-shop__owned', { 'single-shop__owned--none': owned(card.id) === 0 })}
                >
                  ×{owned(card.id)}
                </span>
              )}
            </button>
          )
        })}
        <span ref={sentinelCards} className="incremental-sentinel" aria-hidden="true" />
      </div>
      {detail && (
        <CardDetail cardId={detail} owned={owned(detail)} onClose={closeDetail} cornerClose>
          {actions(detail)}
        </CardDetail>
      )}
      {confirmingQuick && (
        <div className="single-shop__dialog" onClick={() => setConfirmingQuick(false)}>
          <div className="single-shop__dialog-panel" onClick={(event) => event.stopPropagation()}>
            <h2>⚡ {t('shop.sell.quick')}</h2>
            <p>{t('shop.sell.quickText')}</p>
            <strong>{t('shop.sell.quickPreview', { count: planCount, gold: plan.gold.toLocaleString(locale) })}</strong>
            <div>
              <GameButton
                size="small"
                color="primary"
                loading={busy === 'quick'}
                onClick={() => sale('quick', quickSell)}
              >
                {t('shop.sell.confirm')}
              </GameButton>
              <GameButton size="small" color="secondary" onClick={() => setConfirmingQuick(false)}>
                {t('shop.sell.cancel')}
              </GameButton>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

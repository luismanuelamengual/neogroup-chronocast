'use client'

import './index.scss'
import classNames from 'classnames'
import { useMemo, useState } from 'react'
import CardView from '@/app/(protected)/(cards)/components/CardView'
import { CARDS, HEROES } from '@/app/(protected)/(cards)/utils/catalog'
import CardDetail from '@/app/(protected)/(collection)/components/CardDetail'
import CardFilters from '@/app/(protected)/(collection)/components/CardFilters'
import { CardFilter, compareCards, EMPTY_FILTER, matchesFilter } from '@/app/(protected)/(collection)/utils/filters'
import { Rarity } from '@/app/(protected)/(engine)/models/Rarity'
import { getCard } from '@/app/(protected)/(engine)/utils/registry'
import { rarityLevel } from '@/app/(protected)/(progression)/utils/levels'
import GoldAmount from '@/app/(protected)/(shop)/components/GoldAmount'
import { useShop } from '@/app/(protected)/(shop)/hooks/useShop'
import { ShopState } from '@/app/(protected)/(shop)/models/ShopState'
import { isBuyable, shopPrice } from '@/app/(protected)/(shop)/utils/prices'
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
 * The cards tab (docs/PLAN.md, section 11.2): every card for sale at its own
 * price, with the filters of the collection. The rarities the player's level
 * has not opened yet are shown too, after the open ones: blurred, with a
 * padlock and the level that opens them (RARITY_LEVELS). They stay a mystery:
 * they can't be opened in detail and a search never finds them.
 */
export default function SingleShop({ state, onChange }: SingleShopProps) {
  const { t, locale } = useI18n()
  const cardName = useCardName()
  const { buyCard } = useShop()
  const { showSuccessMessage } = useNotifications()
  const [filter, setFilter] = useState<CardFilter>(EMPTY_FILTER)
  const [detail, setDetail] = useState<string | null>(null)
  const [busy, setBusy] = useState<string | null>(null)
  const isLocked = (rarity: Rarity) => !state.unlocked.includes(rarity)
  const cards = useMemo(
    () =>
      CARDS.filter(
        (card) =>
          isBuyable(card) &&
          matchesFilter(card, filter, state.collection[card.id] ?? 0) &&
          // A search by name or text never finds a locked card: what it holds is a mystery.
          (!filter.search.trim() || state.unlocked.includes(card.rarity))
      )
        .slice()
        .sort(
          (a, b) =>
            Number(!state.unlocked.includes(a.rarity)) - Number(!state.unlocked.includes(b.rarity)) ||
            (state.unlocked.includes(a.rarity) ? 0 : rarityLevel(a.rarity) - rarityLevel(b.rarity)) ||
            compareCards(a, b)
        ),
    [filter, state.collection, state.unlocked]
  )

  const run = async (key: string, action: () => Promise<ShopState>, success: string) => {
    setBusy(key)

    try {
      onChange(await action())
      showSuccessMessage(success)
    } catch {
      // The error is already shown as a toast.
    } finally {
      setBusy(null)
    }
  }

  const buy = (cardId: string) =>
    run('buy', () => buyCard(cardId, 1), t('shop.cards.bought', { count: 1, card: cardName(cardId) }))

  const actions = (cardId: string) => {
    const card = getCard(cardId)
    const owned = state.collection[cardId] ?? 0
    const price = shopPrice(card)

    if (card.type === 'hero' && owned > 0) {
      return <p className="single-shop__owned-hero">✓ {t('shop.cards.heroOwned')}</p>
    }

    return (
      <div className="single-shop__buy">
        <GameButton
          size="small"
          color="primary"
          disabled={state.gold < price || busy != null}
          loading={busy === 'buy'}
          onClick={() => buy(cardId)}
        >
          {t('shop.cards.buyOne', { price: price.toLocaleString(locale) })}
        </GameButton>
      </div>
    )
  }

  const { visible: visibleCards, sentinel: sentinelCards } = useIncrementalList(cards)

  return (
    <div className="single-shop">
      <CardFilters filter={filter} onChange={setFilter} heroes={HEROES.map((hero) => hero.id)} />
      {cards.length === 0 && <p className="single-shop__empty">{t('shop.cards.empty')}</p>}
      <div className="single-shop__grid">
        {visibleCards.map((card) => {
          const locked = isLocked(card.rarity)

          return (
            <button
              key={card.id}
              type="button"
              className={classNames('single-shop__card', { 'single-shop__card--locked': locked })}
              disabled={locked}
              onClick={() => setDetail(card.id)}
            >
              <span className="single-shop__zoom" aria-hidden={locked}>
                <CardView card={card} />
              </span>
              {locked ? (
                <span className="single-shop__lock">
                  <span aria-hidden="true">🔒</span>
                  {t('shop.cards.lockedLevel', { level: rarityLevel(card.rarity) })}
                </span>
              ) : (
                <span className="single-shop__owned">×{state.collection[card.id] ?? 0}</span>
              )}
              <span className="single-shop__price">
                <GoldAmount amount={shopPrice(card)} />
              </span>
            </button>
          )
        })}
        <span ref={sentinelCards} className="incremental-sentinel" aria-hidden="true" />
      </div>
      {detail && (
        <CardDetail cardId={detail} owned={state.collection[detail] ?? 0} onClose={() => setDetail(null)}>
          {actions(detail)}
        </CardDetail>
      )}
    </div>
  )
}

'use client'

import './index.scss'
import classNames from 'classnames'
import { useMemo, useState } from 'react'
import CardView from '@/app/(protected)/(cards)/components/CardView'
import { CARDS, HEROES } from '@/app/(protected)/(cards)/utils/catalog'
import CardDetail from '@/app/(protected)/(collection)/components/CardDetail'
import CardFilters from '@/app/(protected)/(collection)/components/CardFilters'
import { CardFilter, compareCards, EMPTY_FILTER, matchesFilter } from '@/app/(protected)/(collection)/utils/filters'
import { RARITIES, Rarity } from '@/app/(protected)/(engine)/models/Rarity'
import { getCard } from '@/app/(protected)/(engine)/utils/registry'
import GoldAmount from '@/app/(protected)/(shop)/components/GoldAmount'
import { UNLOCK_COSTS } from '@/app/(protected)/(shop)/data/prices'
import { useShop } from '@/app/(protected)/(shop)/hooks/useShop'
import { ShopState } from '@/app/(protected)/(shop)/models/ShopState'
import { copyLimit, isBuyable, nextUnlock } from '@/app/(protected)/(shop)/utils/prices'
import GameButton from '@/app/components/GameButton'
import { useNotifications } from '@/app/hooks/useNotifications'
import { useCardName } from '@/app/i18n/cards/useCardName'
import { useI18n } from '@/app/i18n/I18nProvider'

interface SingleShopProps {
  state: ShopState
  onChange: (state: ShopState) => void
}

/**
 * The cards tab (docs/PLAN.md, section 11.2): every card for sale at its own
 * price, with the filters of the collection; the locked rarities show a lock
 * and the next one can be unlocked from here.
 */
export default function SingleShop({ state, onChange }: SingleShopProps) {
  const { t, locale } = useI18n()
  const cardName = useCardName()
  const { buyCard, unlockRarity } = useShop()
  const { showSuccessMessage } = useNotifications()
  const [filter, setFilter] = useState<CardFilter>(EMPTY_FILTER)
  const [detail, setDetail] = useState<string | null>(null)
  const [busy, setBusy] = useState<string | null>(null)
  const next = nextUnlock(state.unlocked)
  const cards = useMemo(
    () =>
      CARDS.filter((card) => isBuyable(card) && matchesFilter(card, filter, state.collection[card.id] ?? 0))
        .slice()
        .sort(compareCards),
    [filter, state.collection]
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

  const unlock = (rarity: Rarity) =>
    run('unlock', () => unlockRarity(rarity), t('shop.cards.unlocked', { rarity: t(`game.rarities.${rarity}`) }))
  const buy = (cardId: string, count: number) =>
    run(`buy-${count}`, () => buyCard(cardId, count), t('shop.cards.bought', { count, card: cardName(cardId) }))
  const unlockButton = next && (
    <GameButton
      size="small"
      color="violet"
      disabled={state.gold < next.cost}
      loading={busy === 'unlock'}
      onClick={() => unlock(next.rarity)}
    >
      🔓 {t('shop.cards.unlock', { rarity: t(`game.rarities.${next.rarity}`), cost: next.cost.toLocaleString(locale) })}
    </GameButton>
  )

  const actions = (cardId: string) => {
    const card = getCard(cardId)
    const owned = state.collection[cardId] ?? 0
    const missing = copyLimit(card) - owned

    if (!state.unlocked.includes(card.rarity)) {
      return (
        <>
          <p className="single-shop__locked-text">
            🔒 {t('shop.cards.lockedText', { rarity: t(`game.rarities.${card.rarity}`) })}
          </p>
          {next?.rarity === card.rarity && unlockButton}
        </>
      )
    }

    return (
      <div className="single-shop__buy">
        <GameButton
          size="small"
          color="gold"
          disabled={state.gold < card.price! || busy != null}
          loading={busy === 'buy-1'}
          onClick={() => buy(cardId, 1)}
        >
          {t('shop.cards.buyOne', { price: card.price!.toLocaleString(locale) })}
        </GameButton>
        {missing > 1 && (
          <GameButton
            size="small"
            color="lime"
            disabled={state.gold < card.price! * missing || busy != null}
            loading={busy === `buy-${missing}`}
            onClick={() => buy(cardId, missing)}
          >
            {t('shop.cards.complete', {
              count: copyLimit(card),
              price: (card.price! * missing).toLocaleString(locale)
            })}
          </GameButton>
        )}
      </div>
    )
  }

  return (
    <div className="single-shop">
      <section className="single-shop__unlocks">
        <h2>{t('shop.cards.unlocks')}</h2>
        <ol>
          {RARITIES.map((rarity) => {
            const open = state.unlocked.includes(rarity)

            return (
              <li key={rarity} className={classNames(`rarity-${rarity}`, { open, next: next?.rarity === rarity })}>
                {open ? '✓' : '🔒'} {t(`game.rarities.${rarity}`)}
                {!open && <GoldAmount amount={UNLOCK_COSTS[rarity]} />}
              </li>
            )
          })}
        </ol>
        {unlockButton ?? <span>{t('shop.cards.allUnlocked')}</span>}
        <p>{t('shop.cards.unlockHint')}</p>
      </section>
      <CardFilters filter={filter} onChange={setFilter} heroes={HEROES.map((hero) => hero.id)} hide={['type']} />
      {cards.length === 0 && <p className="single-shop__empty">{t('shop.cards.empty')}</p>}
      <div className="single-shop__grid">
        {cards.map((card) => {
          const locked = !state.unlocked.includes(card.rarity)

          return (
            <button
              key={card.id}
              type="button"
              className={classNames('single-shop__card', { locked })}
              onClick={() => setDetail(card.id)}
            >
              <span className="single-shop__zoom">
                <CardView card={card} />
              </span>
              <span className="single-shop__owned">×{state.collection[card.id] ?? 0}</span>
              <span className="single-shop__price">
                {locked && <span aria-label={t('shop.cards.locked')}>🔒 </span>}
                <GoldAmount amount={card.price!} />
              </span>
            </button>
          )
        })}
      </div>
      {detail && (
        <CardDetail cardId={detail} owned={state.collection[detail] ?? 0} onClose={() => setDetail(null)}>
          {actions(detail)}
        </CardDetail>
      )}
    </div>
  )
}

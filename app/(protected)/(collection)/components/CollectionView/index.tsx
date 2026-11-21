'use client'

import './index.scss'
import classNames from 'classnames'
import { useMemo, useState } from 'react'
import { useMusic } from '@/app/(protected)/(art)/hooks/useMusic'
import CardView from '@/app/(protected)/(cards)/components/CardView'
import { CARDS, HEROES } from '@/app/(protected)/(cards)/utils/catalog'
import CardDetail from '@/app/(protected)/(collection)/components/CardDetail'
import CardFilters from '@/app/(protected)/(collection)/components/CardFilters'
import { Collection } from '@/app/(protected)/(collection)/models/Collection'
import { CardFilter, compareCards, EMPTY_FILTER, matchesFilter } from '@/app/(protected)/(collection)/utils/filters'
import GameButton from '@/app/components/GameButton'
import { useIncrementalList } from '@/app/hooks/useIncrementalList'
import { useT } from '@/app/i18n/I18nProvider'

/**
 * The collection (/collection): the whole catalog with what the player owns
 * (the rest is dimmed), filters, and the detail of each card.
 */
export default function CollectionView({ collection }: { collection: Collection }) {
  useMusic('menu')
  const t = useT()
  const [filter, setFilter] = useState<CardFilter>(EMPTY_FILTER)
  const [detail, setDetail] = useState<string | null>(null)
  const cards = useMemo(
    () =>
      CARDS.filter((card) => matchesFilter(card, filter, collection[card.id] ?? 0))
        .slice()
        .sort(compareCards),
    [filter, collection]
  )
  const ownedDistinct = CARDS.filter((card) => (collection[card.id] ?? 0) > 0).length
  const { visible: visibleCards, sentinel: sentinelCards } = useIncrementalList(cards)

  return (
    <div className="collection-view">
      <header>
        <GameButton color="ghost" size="small" href="/menu">
          ← {t('collection.back')}
        </GameButton>
        <h1>{t('collection.title')}</h1>
        <span className="collection-view__count">
          {t('collection.distinct', { owned: ownedDistinct, total: CARDS.length })}
        </span>
      </header>
      <CardFilters filter={filter} onChange={setFilter} heroes={HEROES.map((hero) => hero.id)} />
      {cards.length === 0 && <p className="collection-view__empty">{t('collection.empty')}</p>}
      <div className="collection-view__grid">
        {visibleCards.map((card) => {
          const owned = collection[card.id] ?? 0

          return (
            <button
              key={card.id}
              type="button"
              className={classNames('collection-view__card', { missing: owned === 0 })}
              onClick={() => setDetail(card.id)}
            >
              <span className="collection-view__zoom">
                <CardView card={card} />
              </span>
              <span className="collection-view__owned">×{owned}</span>
            </button>
          )
        })}
        <span ref={sentinelCards} className="incremental-sentinel" aria-hidden="true" />
      </div>
      {detail && <CardDetail cardId={detail} owned={collection[detail] ?? 0} onClose={() => setDetail(null)} />}
    </div>
  )
}

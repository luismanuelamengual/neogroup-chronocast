'use client'

import './index.scss'
import '@/app/(protected)/(cards)/utils/catalog'
import classNames from 'classnames'
import { useState } from 'react'
import GoldAmount from '@/app/(protected)/(shop)/components/GoldAmount'
import PackOpening, { OpenedPack } from '@/app/(protected)/(shop)/components/PackOpening'
import PackShop from '@/app/(protected)/(shop)/components/PackShop'
import SellShop from '@/app/(protected)/(shop)/components/SellShop'
import SingleShop from '@/app/(protected)/(shop)/components/SingleShop'
import { ShopState } from '@/app/(protected)/(shop)/models/ShopState'
import GameButton from '@/app/components/GameButton'
import { useT } from '@/app/i18n/I18nProvider'

export type ShopTab = 'packs' | 'cards' | 'sell'

const TABS: { key: ShopTab; icon: string }[] = [
  { key: 'packs', icon: '🎁' },
  { key: 'cards', icon: '🃏' },
  { key: 'sell', icon: '💰' }
]

/**
 * The shop (/shop, docs/PLAN.md section 11): packs, single cards and selling,
 * with the player's gold always in sight. Every purchase or sale answers with
 * the shop updated.
 */
export default function ShopView({ initial, tab: initialTab }: { initial: ShopState; tab: ShopTab }) {
  const t = useT()
  const [state, setState] = useState(initial)
  const [tab, setTab] = useState<ShopTab>(initialTab)
  const [opened, setOpened] = useState<OpenedPack | null>(null)

  return (
    <div className="shop-view">
      <header>
        <GameButton color="ghost" size="small" href="/menu">
          ← {t('shop.back')}
        </GameButton>
        <h1>{t('shop.title')}</h1>
        <nav className="shop-view__tabs" role="tablist">
          {TABS.map(({ key, icon }) => (
            <button
              key={key}
              type="button"
              role="tab"
              aria-selected={tab === key}
              className={classNames('shop-view__tab', { active: tab === key })}
              onClick={() => setTab(key)}
            >
              <span aria-hidden="true">{icon}</span> {t(`shop.tabs.${key}`)}
            </button>
          ))}
        </nav>
        <span className="shop-view__gold" title={t('shop.gold')}>
          <GoldAmount amount={state.gold} />
        </span>
      </header>
      {tab === 'packs' && <PackShop state={state} onChange={setState} onOpened={setOpened} />}
      {tab === 'cards' && <SingleShop state={state} onChange={setState} />}
      {tab === 'sell' && <SellShop state={state} onChange={setState} />}
      {opened && (
        <PackOpening
          key={opened.key}
          pack={opened}
          gold={state.gold}
          onChange={setState}
          onOpened={setOpened}
          onClose={() => setOpened(null)}
        />
      )}
    </div>
  )
}

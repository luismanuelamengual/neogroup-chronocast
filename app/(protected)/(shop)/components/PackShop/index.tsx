'use client'

import './index.scss'
import classNames from 'classnames'
import { useState } from 'react'
import GoldAmount from '@/app/(protected)/(shop)/components/GoldAmount'
import type { OpenedPack } from '@/app/(protected)/(shop)/components/PackOpening'
import PackWrapper from '@/app/(protected)/(shop)/components/PackWrapper'
import { PACK_SIZE, PackDefinition, PACKS, PITY_PACKS } from '@/app/(protected)/(shop)/data/packs'
import { usePackPurchase } from '@/app/(protected)/(shop)/hooks/usePackPurchase'
import { ShopState } from '@/app/(protected)/(shop)/models/ShopState'
import { slotOdds } from '@/app/(protected)/(shop)/utils/odds'
import { packName, packText } from '@/app/(protected)/(shop)/utils/packName'
import GameButton from '@/app/components/GameButton'
import { useT } from '@/app/i18n/I18nProvider'

const ICONS: Record<string, string> = { traveler: '🧭', chronicler: '📜', guardian: '🛡️', eternal: '⏳' }
/** The card whose art goes on each pack (faction packs by their faction). */
const ARTS: Record<string, string> = {
  traveler: 'cave-scout',
  chronicler: 'candle-keeper',
  guardian: 'bronze-colossus-guard',
  eternal: 'eternal-emperor',
  primal: 'cave-bear',
  bronze: 'legate-varro-portrait',
  arcane: 'archmage-of-the-spire',
  clockwork: 'ada-copperwick-portrait',
  neon: 'queen-static-portrait',
  void: 'morgrath-lich-abbot-portrait'
}

interface PackShopProps {
  state: ShopState
  onChange: (state: ShopState) => void
  onOpened: (pack: OpenedPack) => void
}

/** The packs tab: each pack as a foil booster with its price, what it brings and its odds (on request). */
export default function PackShop({ state, onChange, onOpened }: PackShopProps) {
  const t = useT()
  const [odds, setOdds] = useState<string | null>(null)
  const { buy, buying } = usePackPurchase(onChange, onOpened)
  const left = Math.max(0, PITY_PACKS - state.packsWithoutLegendary)
  const tile = (pack: PackDefinition) => (
    <article key={pack.id} className={classNames('pack-shop__pack', `pack-${pack.faction ?? pack.id}`)}>
      <PackWrapper
        name={packName(pack, t)}
        art={ARTS[pack.faction ?? pack.id]}
        icon={pack.faction ? '✦' : ICONS[pack.id]}
        count={PACK_SIZE}
      />
      <div className="pack-shop__info">
        <p>{packText(pack, t)}</p>
        {odds === pack.id ? (
          <ul className="pack-shop__odds">
            {pack.slots.map((slot, index) => (
              <li key={index}>
                <strong>{slot.count}×</strong>{' '}
                {slotOdds(slot)
                  .map(({ rarity, percent }) =>
                    percent === 100
                      ? t(`game.rarities.${rarity}`)
                      : t('shop.chance', { rarity: t(`game.rarities.${rarity}`), percent })
                  )
                  .join(' · ')}
              </li>
            ))}
            <li>
              <button type="button" className="pack-shop__link" onClick={() => setOdds(null)}>
                {t('shop.hideOdds')}
              </button>
            </li>
          </ul>
        ) : (
          <button type="button" className="pack-shop__link" onClick={() => setOdds(pack.id)}>
            {t('shop.odds')}
          </button>
        )}
      </div>
      <GameButton
        size="small"
        color="primary"
        disabled={state.gold < pack.price || (buying != null && buying !== pack.id)}
        loading={buying === pack.id}
        onClick={() => buy(pack.id, state.collection)}
      >
        {t('shop.buy')} · <GoldAmount amount={pack.price} />
      </GameButton>
    </article>
  )

  return (
    <div className="pack-shop">
      <p className="pack-shop__pity">{left === 0 ? t('shop.pityReady') : t('shop.pityLeft', { count: left })}</p>
      <div className="pack-shop__grid">{PACKS.filter((pack) => !pack.faction).map(tile)}</div>
      <h2>{t('shop.factionPacks')}</h2>
      <div className="pack-shop__grid">{PACKS.filter((pack) => pack.faction).map(tile)}</div>
      <p className="pack-shop__note">{t('shop.oddsNote')}</p>
    </div>
  )
}

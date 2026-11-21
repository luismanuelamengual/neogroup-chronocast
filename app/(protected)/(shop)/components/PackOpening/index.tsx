'use client'

import './index.scss'
import { useEffect, useRef } from 'react'
import { playSfx } from '@/app/(protected)/(art)/utils/sound'
import CardSpotlight from '@/app/(protected)/(cards)/components/CardSpotlight'
import CardView from '@/app/(protected)/(cards)/components/CardView'
import FlipCard from '@/app/(protected)/(cards)/components/FlipCard'
import { shines, useFlipReveal } from '@/app/(protected)/(cards)/hooks/useFlipReveal'
import { Collection } from '@/app/(protected)/(collection)/models/Collection'
import { getCard } from '@/app/(protected)/(engine)/utils/registry'
import GoldAmount from '@/app/(protected)/(shop)/components/GoldAmount'
import { findPack } from '@/app/(protected)/(shop)/data/packs'
import { usePackPurchase } from '@/app/(protected)/(shop)/hooks/usePackPurchase'
import { ShopState } from '@/app/(protected)/(shop)/models/ShopState'
import { packName } from '@/app/(protected)/(shop)/utils/packName'
import GameButton from '@/app/components/GameButton'
import { useT } from '@/app/i18n/I18nProvider'

/** A pack just bought, to open. */
export interface OpenedPack {
  key: number
  packId: string
  /** From the lowest rarity to the highest. */
  cards: string[]
  guaranteed: boolean
  /** The collection before the pack (to mark the new cards). */
  before: Collection
}

/** Pause between two cards when they flip by themselves (ms). */
const FLIP_STEP = 320

interface PackOpeningProps {
  pack: OpenedPack
  gold: number
  onChange: (state: ShopState) => void
  onOpened: (pack: OpenedPack) => void
  onClose: () => void
}

/**
 * The opening of a pack: the 8 cards dealt face down, flipped one by one (a
 * tap, or all of them in a row) from the lowest rarity to the highest; the
 * best ones shine and the new ones get a badge. A card turned by hand, or
 * tapped once face up, is shown big.
 */
export default function PackOpening({ pack, gold, onChange, onOpened, onClose }: PackOpeningProps) {
  const t = useT()
  const definition = findPack(pack.packId)!
  const { buy, buying } = usePackPurchase(onChange, onOpened)
  const { flipped, flip, revealAll, revealing, done, spotlight, open, close } = useFlipReveal(pack.cards, FLIP_STEP)
  const firstSeen = new Set<string>()
  const isNew = pack.cards.map((cardId) => {
    const fresh = !pack.before[cardId] && !firstSeen.has(cardId)

    firstSeen.add(cardId)

    return fresh
  })
  const torn = useRef(false)

  // The tear of the pack, once.
  useEffect(() => {
    if (!torn.current) {
      torn.current = true
      playSfx('pack-open')
    }
  }, [])

  return (
    <div className="pack-opening">
      <h2>{done ? t('shop.opening.done') : t('shop.opening.title', { pack: packName(definition, t) })}</h2>
      {pack.guaranteed && <p className="pack-opening__guaranteed">{t('shop.opening.guaranteed')}</p>}
      <div className="pack-opening__cards">
        {pack.cards.map((cardId, index) => {
          const card = getCard(cardId)

          return (
            <FlipCard
              key={index}
              className="pack-opening__card"
              rarity={card.rarity}
              shine={shines(cardId)}
              flipped={flipped[index]}
              onFlip={() => flip(index)}
              onOpen={() => open(index)}
              label={t('shop.opening.tap')}
              openLabel={card.name}
              style={{ animationDelay: `${index * 90}ms` }}
            >
              <span className="pack-opening__zoom">
                <CardView card={card} />
              </span>
              {isNew[index] && <span className="pack-opening__new">{t('shop.opening.isNew')}</span>}
            </FlipCard>
          )
        })}
      </div>
      {spotlight != null && (
        <CardSpotlight
          cardId={pack.cards[spotlight]}
          shine={shines(pack.cards[spotlight])}
          onClose={close}
          badge={isNew[spotlight] && <span className="pack-opening__new">{t('shop.opening.isNew')}</span>}
        />
      )}
      <div className="pack-opening__actions">
        {done ? (
          <>
            <GameButton color="ghost" onClick={onClose}>
              {t('shop.opening.close')}
            </GameButton>
            <GameButton
              color="gold"
              disabled={gold < definition.price}
              loading={buying != null}
              onClick={() => buy(pack.packId, pack.before)}
            >
              {t('shop.opening.again')} · <GoldAmount amount={definition.price} />
            </GameButton>
          </>
        ) : (
          <>
            <span className="pack-opening__hint">{t('shop.opening.tap')}</span>
            <GameButton color="cyan" disabled={revealing} onClick={revealAll}>
              {t('shop.opening.revealAll')}
            </GameButton>
          </>
        )}
      </div>
    </div>
  )
}

'use client'

import './index.scss'
import classNames from 'classnames'
import { useEffect, useRef, useState } from 'react'
import { playSfx } from '@/app/(protected)/(art)/utils/sound'
import CardView from '@/app/(protected)/(cards)/components/CardView'
import { Collection } from '@/app/(protected)/(collection)/models/Collection'
import { RARITIES } from '@/app/(protected)/(engine)/models/Rarity'
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
/** From this rarity up a card shines when it flips. */
const SHINE_FROM = RARITIES.indexOf('rare')

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
 * best ones shine and the new ones get a badge.
 */
export default function PackOpening({ pack, gold, onChange, onOpened, onClose }: PackOpeningProps) {
  const t = useT()
  const definition = findPack(pack.packId)!
  const [flipped, setFlipped] = useState<boolean[]>(() => pack.cards.map(() => false))
  const [auto, setAuto] = useState(false)
  const { buy, buying } = usePackPurchase(onChange, onOpened)
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null)
  const done = flipped.every(Boolean)
  const firstSeen = new Set<string>()
  const isNew = pack.cards.map((cardId) => {
    const fresh = !pack.before[cardId] && !firstSeen.has(cardId)

    firstSeen.add(cardId)

    return fresh
  })

  useEffect(() => {
    if (!auto || done) {
      return
    }

    timer.current = setTimeout(() => {
      setFlipped((current) => {
        const next = [...current]

        next[next.indexOf(false)] = true

        return next
      })
    }, FLIP_STEP)

    return () => {
      if (timer.current) {
        clearTimeout(timer.current)
      }
    }
  }, [auto, done, flipped])

  const lastFlipped = useRef<boolean[] | null>(null)

  // The tear of the pack, then a sound for each card that turns (a brighter one for the best).
  useEffect(() => {
    const before = lastFlipped.current

    lastFlipped.current = flipped

    if (!before) {
      playSfx('pack-open')

      return
    }

    const turned = pack.cards.filter((_, index) => flipped[index] && !before[index])

    if (turned.length > 0) {
      const shines = turned.some((cardId) => RARITIES.indexOf(getCard(cardId).rarity) >= SHINE_FROM)

      playSfx(shines ? 'rare-reveal' : 'card-flip')
    }
  }, [flipped, pack.cards])

  const flip = (index: number) => setFlipped((current) => current.map((value, i) => value || i === index))

  return (
    <div className="pack-opening">
      <h2>{done ? t('shop.opening.done') : t('shop.opening.title', { pack: packName(definition, t) })}</h2>
      {pack.guaranteed && <p className="pack-opening__guaranteed">{t('shop.opening.guaranteed')}</p>}
      <div className="pack-opening__cards">
        {pack.cards.map((cardId, index) => {
          const card = getCard(cardId)

          return (
            <button
              key={index}
              type="button"
              className={classNames('pack-opening__card', `rarity-${card.rarity}`, {
                flipped: flipped[index],
                shine: RARITIES.indexOf(card.rarity) >= SHINE_FROM
              })}
              style={{ animationDelay: `${index * 90}ms` }}
              onClick={() => flip(index)}
              data-silent
              aria-label={flipped[index] ? card.name : t('shop.opening.tap')}
            >
              <span className="pack-opening__inner">
                <span className="pack-opening__face back" aria-hidden="true">
                  <span>⏳</span>
                </span>
                <span className="pack-opening__face front">
                  <span className="pack-opening__zoom">
                    <CardView card={card} />
                  </span>
                  {isNew[index] && <span className="pack-opening__new">{t('shop.opening.isNew')}</span>}
                </span>
              </span>
            </button>
          )
        })}
      </div>
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
            <GameButton color="cyan" disabled={auto} onClick={() => setAuto(true)}>
              {t('shop.opening.revealAll')}
            </GameButton>
          </>
        )}
      </div>
    </div>
  )
}

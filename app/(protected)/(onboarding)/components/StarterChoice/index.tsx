'use client'

import './index.scss'
import '@/app/(protected)/(cards)/utils/catalog'
import classNames from 'classnames'
import { CSSProperties, useEffect, useState } from 'react'
import { useMusic } from '@/app/(protected)/(art)/hooks/useMusic'
import CardSpotlight from '@/app/(protected)/(cards)/components/CardSpotlight'
import CardView from '@/app/(protected)/(cards)/components/CardView'
import FlipCard from '@/app/(protected)/(cards)/components/FlipCard'
import { STARTER_HERO_IDS } from '@/app/(protected)/(cards)/data/starters'
import { shines, useFlipReveal } from '@/app/(protected)/(cards)/hooks/useFlipReveal'
import { useCollection } from '@/app/(protected)/(collection)/hooks/useCollection'
import { getCard } from '@/app/(protected)/(engine)/utils/registry'
import Backdrop from '@/app/components/Backdrop'
import GameButton from '@/app/components/GameButton'
import { useT } from '@/app/i18n/I18nProvider'
import type { MessageKey } from '@/app/i18n/messages'

/** How long each card of the starter takes to be dealt (ms). */
const DEAL_STEP = 40
/** Pause between two cards when "Flip them all" turns them (ms). */
const FLIP_STEP = 90

/**
 * The first visit (docs/PLAN.md, section 6.2): the 3 starter heroes with their
 * faction, class, health and style; the chosen one's starter deck is dealt face
 * down, to turn card by card (or all at once), and then the tutorial or the menu.
 */
export default function StarterChoice() {
  useMusic('menu')
  const t = useT()
  const { chooseStarter } = useCollection()
  const [heroId, setHeroId] = useState(STARTER_HERO_IDS[0])
  const [loading, setLoading] = useState(false)
  const [cards, setCards] = useState<string[] | null>(null)
  const hero = getCard(heroId)

  const choose = async () => {
    setLoading(true)

    try {
      const result = await chooseStarter(heroId)
      const sorted = [...result.cards].sort(
        (a, b) =>
          Number(getCard(b).type === 'hero') - Number(getCard(a).type === 'hero') || getCard(a).cost - getCard(b).cost
      )

      setCards(sorted)
    } catch {
      setLoading(false)
    }
  }

  if (cards) {
    return <StarterOpening cards={cards} />
  }

  return (
    <div className="starter-choice">
      <Backdrop />
      <header>
        <h1>{t('onboarding.title')}</h1>
        <p>{t('onboarding.text')}</p>
      </header>
      <div className="starter-choice__heroes">
        {STARTER_HERO_IDS.map((id) => {
          const card = getCard(id)

          return (
            <button
              key={id}
              type="button"
              className={classNames('starter-choice__hero', { selected: id === heroId })}
              onClick={() => setHeroId(id)}
            >
              <span className="starter-choice__art">
                <CardView card={card} />
              </span>
              <span className="starter-choice__info">
                <strong>
                  {t(`game.factions.${card.faction}`)} · {t(`game.classes.${card.heroClass!}`)}
                </strong>
                <span>{t('onboarding.health', { health: card.health ?? 0 })}</span>
                <span>{t(`onboarding.styles.${id}` as MessageKey)}</span>
              </span>
            </button>
          )
        })}
      </div>
      <GameButton color="gold" size="large" loading={loading} onClick={choose}>
        {t('onboarding.choose', { hero: hero.name })}
      </GameButton>
    </div>
  )
}

/** The width of a CardView at zoom 1. */
const CARD_WIDTH = 220
/** Phones in landscape (as in index.scss): the 40 cards in 3 rows of 14. */
const PHONE_MAX_HEIGHT = 560
const PHONE_COLUMNS = 14
const PHONE_ROWS = 3
const GAP = 5
/** Height taken by the title, the hint and the buttons on a phone (px). */
const PHONE_CHROME = 118

/** How wide each card of the starter can be on this screen (px). */
function cardWidth(): number {
  const { innerWidth: width, innerHeight: height } = window

  if (height <= PHONE_MAX_HEIGHT) {
    return Math.floor(
      Math.min(
        (width - 32 - (PHONE_COLUMNS - 1) * GAP) / PHONE_COLUMNS,
        (height - PHONE_CHROME - (PHONE_ROWS - 1) * GAP) / PHONE_ROWS / 1.4
      )
    )
  }

  return Math.round(Math.min(Math.max(width * 0.07, 44), 70))
}

/**
 * The starter deck, dealt face down: each card turns with a tap (and is shown
 * big), or all of them with the button; a card face up is shown big again with
 * another tap.
 */
function StarterOpening({ cards }: { cards: string[] }) {
  const t = useT()
  const { flipped, flip, revealAll, revealing, done, spotlight, open, close } = useFlipReveal(cards, FLIP_STEP)
  const [width, setWidth] = useState(cardWidth)

  useEffect(() => {
    const resize = () => setWidth(cardWidth())

    window.addEventListener('resize', resize)

    return () => window.removeEventListener('resize', resize)
  }, [])

  return (
    <div className="starter-choice opening">
      <Backdrop />
      <h1>{done ? t('onboarding.opened') : t('onboarding.opening')}</h1>
      <div className="starter-choice__pack" style={{ '--card-w': `${width}px` } as CSSProperties}>
        {cards.map((cardId, index) => (
          <FlipCard
            key={index}
            className="starter-choice__card"
            rarity={getCard(cardId).rarity}
            shine={shines(cardId)}
            flipped={flipped[index]}
            onFlip={() => flip(index)}
            onOpen={() => open(index)}
            label={t('onboarding.tap')}
            openLabel={getCard(cardId).name}
            style={{ animationDelay: `${index * DEAL_STEP}ms` }}
          >
            <span className="starter-choice__zoom" style={{ zoom: width / CARD_WIDTH }}>
              <CardView card={getCard(cardId)} />
            </span>
          </FlipCard>
        ))}
      </div>
      {spotlight != null && (
        <CardSpotlight cardId={cards[spotlight]} shine={shines(cards[spotlight])} onClose={close} />
      )}
      {done ? (
        <div className="starter-choice__done">
          <p>{t('onboarding.openedText')}</p>
          <div>
            <GameButton color="gold" size="large" href="/practice?tutorial=1">
              {t('onboarding.tutorial')}
            </GameButton>
            <GameButton color="ghost" href="/menu">
              {t('onboarding.menu')}
            </GameButton>
          </div>
        </div>
      ) : (
        <div className="starter-choice__done">
          <p>{t('onboarding.tap')}</p>
          <div>
            <GameButton color="cyan" disabled={revealing} onClick={revealAll}>
              {t('onboarding.revealAll')}
            </GameButton>
          </div>
        </div>
      )}
    </div>
  )
}

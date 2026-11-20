'use client'

import './index.scss'
import '@/app/(protected)/(cards)/utils/catalog'
import classNames from 'classnames'
import { useState } from 'react'
import HandCard from '@/app/(protected)/(battle)/components/HandCard'
import CardView from '@/app/(protected)/(cards)/components/CardView'
import { STARTER_HERO_IDS } from '@/app/(protected)/(cards)/data/starters'
import { useCollection } from '@/app/(protected)/(collection)/hooks/useCollection'
import { getCard } from '@/app/(protected)/(engine)/utils/registry'
import Backdrop from '@/app/components/Backdrop'
import GameButton from '@/app/components/GameButton'
import { useT } from '@/app/i18n/I18nProvider'
import type { MessageKey } from '@/app/i18n/messages'

/** How long each card of the starter takes to appear (ms). */
const REVEAL_STEP = 70

/**
 * The first visit (docs/PLAN.md, section 6.2): the 3 starter heroes with their
 * faction, class, health and style; the chosen one's starter deck opens card by
 * card, and then the tutorial or the menu.
 */
export default function StarterChoice() {
  const t = useT()
  const { chooseStarter } = useCollection()
  const [heroId, setHeroId] = useState(STARTER_HERO_IDS[0])
  const [loading, setLoading] = useState(false)
  const [cards, setCards] = useState<string[] | null>(null)
  const [revealed, setRevealed] = useState(false)
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
      setTimeout(() => setRevealed(true), sorted.length * REVEAL_STEP + 500)
    } catch {
      setLoading(false)
    }
  }

  if (cards) {
    return (
      <div className="starter-choice opening">
        <Backdrop />
        <h1>{revealed ? t('onboarding.opened') : t('onboarding.opening')}</h1>
        <div className="starter-choice__pack">
          {cards.map((cardId, index) => (
            <span key={index} className="starter-choice__card" style={{ animationDelay: `${index * REVEAL_STEP}ms` }}>
              <HandCard cardId={cardId} />
            </span>
          ))}
        </div>
        {revealed && (
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
        )}
      </div>
    )
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

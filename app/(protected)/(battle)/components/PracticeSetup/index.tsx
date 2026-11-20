'use client'

import './index.scss'
import classNames from 'classnames'
import { useEffect, useState } from 'react'
import BattleScreen from '@/app/(protected)/(battle)/components/BattleScreen'
import { initials } from '@/app/(protected)/(battle)/components/UnitToken'
import { useBattleStore } from '@/app/(protected)/(battle)/stores/battle'
import CardView from '@/app/(protected)/(cards)/components/CardView'
import { STARTER_HERO_IDS, starterDeck } from '@/app/(protected)/(cards)/data/starters'
import { DeckDto } from '@/app/(protected)/(collection)/models/DeckDto'
import { expandCards } from '@/app/(protected)/(collection)/utils/deckProblems'
import { DeckList } from '@/app/(protected)/(engine)/models/DeckList'
import { getCard } from '@/app/(protected)/(engine)/utils/registry'
import GameButton from '@/app/components/GameButton'
import { useCardName } from '@/app/i18n/cards/useCardName'
import { useT } from '@/app/i18n/I18nProvider'

interface PracticeSetupProps {
  /** The player's playable decks (empty: the starter decks are offered instead). */
  decks: DeckDto[]
  /** The guided first match: starts right away with the first deck and shows the tips. */
  tutorial?: boolean
}

/**
 * Practice (/practice): the player picks one of its decks and the computer's
 * hero, then plays the battle against the computer. Nothing is saved and there
 * are no rewards.
 */
export default function PracticeSetup({ decks, tutorial = false }: PracticeSetupProps) {
  const t = useT()
  const cardName = useCardName()
  const mode = useBattleStore((store) => store.mode)
  const start = useBattleStore((store) => store.start)
  const leave = useBattleStore((store) => store.leave)
  const options: { key: string; name: string; deck: DeckList }[] =
    decks.length > 0
      ? decks.map((deck) => ({
          key: `deck-${deck.id}`,
          name: deck.name,
          deck: { heroId: deck.heroId, cards: expandCards(deck.cards) }
        }))
      : STARTER_HERO_IDS.map((heroId) => ({ key: heroId, name: cardName(heroId), deck: starterDeck(heroId) }))
  const [choice, setChoice] = useState(options[0].key)
  const chosen = options.find((option) => option.key === choice) ?? options[0]
  const [rivalHeroId, setRivalHeroId] = useState(
    STARTER_HERO_IDS.find((heroId) => heroId !== chosen.deck.heroId) ?? STARTER_HERO_IDS[0]
  )
  const [playing, setPlaying] = useState(false)
  const [guided, setGuided] = useState(tutorial)

  useEffect(() => {
    if (tutorial) {
      start(chosen.deck, rivalHeroId)
      setPlaying(true)
    }
    // Only when the page opens.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // Leaving the page stops the match.
  useEffect(() => () => leave(), [leave])

  if (playing && mode !== 'idle') {
    return (
      <BattleScreen
        tutorial={guided}
        onChangeHeroes={() => {
          setPlaying(false)
          setGuided(false)
        }}
      />
    )
  }

  return (
    <div className="practice-setup">
      <header>
        <h1>{t('battle.practice.title')}</h1>
        <p>{t('battle.practice.text')}</p>
      </header>
      <section>
        <h2>{t('battle.practice.yourDeck')}</h2>
        <div className="practice-setup__decks">
          {options.map((option) => {
            const hero = getCard(option.deck.heroId)

            return (
              <button
                key={option.key}
                type="button"
                className={classNames('practice-setup__deck', `faction-${hero.faction}`, {
                  selected: option.key === chosen.key
                })}
                onClick={() => setChoice(option.key)}
              >
                <span className="practice-setup__hero">{initials(hero.name)}</span>
                <span>
                  <strong>{option.name}</strong>
                  <small>{cardName(hero)}</small>
                </span>
              </button>
            )
          })}
        </div>
      </section>
      <section className="practice-setup__rival">
        <h2>{t('battle.practice.rivalHero')}</h2>
        <div className="practice-setup__rivals">
          {STARTER_HERO_IDS.map((id) => (
            <button
              key={id}
              type="button"
              className={classNames('practice-setup__rival-card', { selected: id === rivalHeroId })}
              onClick={() => setRivalHeroId(id)}
            >
              <CardView card={getCard(id)} />
            </button>
          ))}
        </div>
      </section>
      <footer>
        <GameButton color="ghost" href="/menu">
          {t('battle.practice.back')}
        </GameButton>
        <GameButton
          color="gold"
          size="large"
          onClick={() => {
            start(chosen.deck, rivalHeroId)
            setPlaying(true)
          }}
        >
          {t('battle.practice.start')}
        </GameButton>
      </footer>
    </div>
  )
}

'use client'

import './index.scss'
import classNames from 'classnames'
import { useEffect, useState } from 'react'
import { useMusic } from '@/app/(protected)/(art)/hooks/useMusic'
import BattleScreen from '@/app/(protected)/(battle)/components/BattleScreen'
import { useBattleStore } from '@/app/(protected)/(battle)/stores/battle'
import CardView from '@/app/(protected)/(cards)/components/CardView'
import { STARTER_HERO_IDS } from '@/app/(protected)/(cards)/data/starters'
import ActiveDeckChip, { canPlayWith } from '@/app/(protected)/(collection)/components/ActiveDeckChip'
import { ActiveDeck } from '@/app/(protected)/(collection)/models/DeckDto'
import { expandCards } from '@/app/(protected)/(collection)/utils/deckProblems'
import { DeckList } from '@/app/(protected)/(engine)/models/DeckList'
import { getCard } from '@/app/(protected)/(engine)/utils/registry'
import GameButton from '@/app/components/GameButton'
import { useT } from '@/app/i18n/I18nProvider'

interface PracticeSetupProps {
  /** The deck every mode plays with (null: the player has no decks). */
  deck: ActiveDeck | null
  /** The guided first match: starts right away with the active deck and shows the tips. */
  tutorial?: boolean
}

/**
 * Practice (/practice): the player picks the computer's hero and plays its
 * active deck against it. Nothing is saved and there are no rewards.
 */
export default function PracticeSetup({ deck: active, tutorial = false }: PracticeSetupProps) {
  const t = useT()
  const mode = useBattleStore((store) => store.mode)
  const start = useBattleStore((store) => store.start)
  const leave = useBattleStore((store) => store.leave)
  const ready = canPlayWith(active)
  const deck: DeckList | null = ready ? { heroId: active.heroId, cards: expandCards(active.cards) } : null
  const [rivalHeroId, setRivalHeroId] = useState(
    STARTER_HERO_IDS.find((heroId) => heroId !== deck?.heroId) ?? STARTER_HERO_IDS[0]
  )
  const [playing, setPlaying] = useState(false)
  const [guided, setGuided] = useState(tutorial)

  useMusic(playing && mode !== 'idle' ? null : 'menu')

  useEffect(() => {
    if (tutorial && deck) {
      start(deck, rivalHeroId)
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
      <ActiveDeckChip deck={active} />
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
          disabled={!deck}
          onClick={() => {
            start(deck!, rivalHeroId)
            setPlaying(true)
          }}
        >
          {t('battle.practice.start')}
        </GameButton>
      </footer>
    </div>
  )
}

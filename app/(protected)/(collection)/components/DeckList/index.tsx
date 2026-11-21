'use client'

import './index.scss'
import '@/app/(protected)/(cards)/utils/catalog'
import classNames from 'classnames'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import toast from 'react-hot-toast'
import { useMusic } from '@/app/(protected)/(art)/hooks/useMusic'
import { initials } from '@/app/(protected)/(battle)/components/UnitToken'
import { useCollection } from '@/app/(protected)/(collection)/hooks/useCollection'
import { DeckSummary } from '@/app/(protected)/(collection)/models/DeckDto'
import { getCard } from '@/app/(protected)/(engine)/utils/registry'
import GameButton from '@/app/components/GameButton'
import { useCardName } from '@/app/i18n/cards/useCardName'
import { useT } from '@/app/i18n/I18nProvider'

/**
 * The decks of the player (/decks): play-ready or not, which one is active (the
 * one every game mode plays with), edit, delete, and a new one for any owned hero.
 */
export default function DeckList({ decks: initialDecks, heroes }: { decks: DeckSummary[]; heroes: string[] }) {
  useMusic('menu')
  const t = useT()
  const cardName = useCardName()
  const router = useRouter()
  const { deleteDeck, setActiveDeck } = useCollection()
  const [decks, setDecks] = useState(initialDecks)
  const [choosingHero, setChoosingHero] = useState(false)
  const [confirming, setConfirming] = useState<number | null>(null)

  const remove = async (deck: DeckSummary) => {
    await deleteDeck(deck.id)
    setDecks((current) => current.filter((candidate) => candidate.id !== deck.id))
    setConfirming(null)
    toast.success(t('decks.deleted'))
    // The server picks another active deck when this one was: the list shows it on the next visit.
    router.refresh()
  }

  const activate = async (deck: DeckSummary) => {
    await setActiveDeck(deck.id)
    setDecks((current) => current.map((candidate) => ({ ...candidate, active: candidate.id === deck.id })))
    toast.success(t('decks.activated', { name: deck.name }))
  }

  return (
    <div className="deck-list">
      <header>
        <GameButton color="ghost" size="small" href="/menu">
          ← {t('decks.back')}
        </GameButton>
        <h1>{t('decks.title')}</h1>
        <GameButton color="gold" size="small" onClick={() => setChoosingHero(true)}>
          + {t('decks.new')}
        </GameButton>
      </header>

      {decks.length === 0 ? (
        <p className="deck-list__empty">{t('decks.empty')}</p>
      ) : (
        <p className="deck-list__hint">{t('decks.activeHint')}</p>
      )}

      <div className="deck-list__grid">
        {decks.map((deck) => {
          const hero = getCard(deck.heroId)

          return (
            <article
              key={deck.id}
              className={classNames('deck-list__deck', `faction-${hero.faction}`, { active: deck.active })}
            >
              {deck.active && <span className="deck-list__active">★ {t('decks.active')}</span>}
              <span className="deck-list__hero">{initials(hero.name)}</span>
              <div className="deck-list__info">
                <h2>{deck.name}</h2>
                <span>
                  {cardName(hero)} · {t('decks.size', { count: deck.size })}
                </span>
                <span className={deck.playable ? 'playable' : 'incomplete'}>
                  {deck.playable ? `✔ ${t('decks.playable')}` : `⚠ ${t('decks.notPlayable')}`}
                </span>
              </div>
              <div className="deck-list__actions">
                {confirming === deck.id ? (
                  <>
                    <p>{t('decks.deleteConfirm', { name: deck.name })}</p>
                    <GameButton size="small" color="magenta" onClick={() => remove(deck)}>
                      {t('decks.delete')}
                    </GameButton>
                    <GameButton size="small" color="ghost" onClick={() => setConfirming(null)}>
                      {t('common.cancel')}
                    </GameButton>
                  </>
                ) : (
                  <>
                    {!deck.active && deck.playable && (
                      <GameButton size="small" color="gold" onClick={() => activate(deck)}>
                        {t('decks.setActive')}
                      </GameButton>
                    )}
                    <GameButton size="small" color="cyan" href={`/decks/${deck.id}`}>
                      {t('decks.edit')}
                    </GameButton>
                    <GameButton size="small" color="ghost" onClick={() => setConfirming(deck.id)}>
                      {t('decks.delete')}
                    </GameButton>
                  </>
                )}
              </div>
            </article>
          )
        })}
      </div>

      {choosingHero && (
        <div className="deck-list__overlay" onClick={() => setChoosingHero(false)}>
          <div className="deck-list__picker" onClick={(event) => event.stopPropagation()}>
            <h2>{t('decks.chooseHero')}</h2>
            <div>
              {heroes.map((heroId) => (
                <GameButton key={heroId} color="violet" onClick={() => router.push(`/decks/new?hero=${heroId}`)}>
                  {cardName(heroId)}
                </GameButton>
              ))}
            </div>
            <GameButton size="small" color="ghost" onClick={() => setChoosingHero(false)}>
              {t('common.cancel')}
            </GameButton>
          </div>
        </div>
      )}
    </div>
  )
}

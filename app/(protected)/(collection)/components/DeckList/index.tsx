'use client'

import './index.scss'
import '@/app/(protected)/(cards)/utils/catalog'
import DeleteIcon from '@mui/icons-material/Delete'
import classNames from 'classnames'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import toast from 'react-hot-toast'
import { useMusic } from '@/app/(protected)/(art)/hooks/useMusic'
import { initials } from '@/app/(protected)/(battle)/components/UnitToken'
import { useCardArt } from '@/app/(protected)/(cards)/stores/cardArt'
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
/** The hero's illustration behind a deck tile (nothing while it has none: the tile keeps its faction color). */
function HeroBackdrop({ heroId }: { heroId: string }) {
  const art = useCardArt(heroId)

  // eslint-disable-next-line @next/next/no-img-element
  return art ? <img className="deck-list__backdrop" src={art} alt="" aria-hidden="true" /> : null
}

export default function DeckList({ decks: initialDecks }: { decks: DeckSummary[] }) {
  useMusic('menu')
  const t = useT()
  const cardName = useCardName()
  const router = useRouter()
  const { deleteDeck, setActiveDeck } = useCollection()
  const [decks, setDecks] = useState(initialDecks)
  const [confirming, setConfirming] = useState<DeckSummary | null>(null)

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
        <GameButton color="gold" size="small" href="/decks/new">
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
            // The whole tile opens the editor; its buttons (activate, delete) stop the tap.
            <article
              key={deck.id}
              role="link"
              tabIndex={0}
              aria-label={t('decks.edit')}
              className={classNames('deck-list__deck', `faction-${hero.faction}`, { active: deck.active })}
              onClick={() => router.push(`/decks/${deck.id}`)}
              onKeyDown={(event) => event.key === 'Enter' && router.push(`/decks/${deck.id}`)}
            >
              <HeroBackdrop heroId={deck.heroId} />
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
              {!deck.active && deck.playable && (
                <div className="deck-list__actions" onClick={(event) => event.stopPropagation()}>
                  <GameButton size="small" color="gold" onClick={() => activate(deck)}>
                    {t('decks.setActive')}
                  </GameButton>
                </div>
              )}
              <button
                type="button"
                className="deck-list__delete"
                aria-label={t('decks.delete')}
                title={t('decks.delete')}
                onClick={(event) => {
                  event.stopPropagation()
                  setConfirming(deck)
                }}
              >
                <DeleteIcon fontSize="small" />
              </button>
            </article>
          )
        })}
      </div>

      {confirming && (
        <div className="deck-list__overlay" role="dialog" aria-modal="true" onClick={() => setConfirming(null)}>
          <div className="deck-list__confirm" onClick={(event) => event.stopPropagation()}>
            <h2>{t('decks.deleteTitle')}</h2>
            <p>{t('decks.deleteConfirm', { name: confirming.name })}</p>
            <div>
              <GameButton size="small" color="ghost" onClick={() => setConfirming(null)}>
                {t('common.cancel')}
              </GameButton>
              <GameButton size="small" color="magenta" onClick={() => remove(confirming)}>
                {t('decks.delete')}
              </GameButton>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

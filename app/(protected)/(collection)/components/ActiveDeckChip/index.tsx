'use client'

import './index.scss'
import '@/app/(protected)/(cards)/utils/catalog'
import classNames from 'classnames'
import { initials } from '@/app/(protected)/(battle)/components/UnitToken'
import { ActiveDeck } from '@/app/(protected)/(collection)/models/DeckDto'
import { getCard } from '@/app/(protected)/(engine)/utils/registry'
import GameButton from '@/app/components/GameButton'
import { useCardName } from '@/app/i18n/cards/useCardName'
import { useT } from '@/app/i18n/I18nProvider'

/** Whether a game mode can start with the active deck (`heroId`: the hero the mode requires, if any). */
export function canPlayWith(deck: ActiveDeck | null, heroId?: string): deck is ActiveDeck {
  return !!deck?.playable && (!heroId || deck.heroId === heroId)
}

interface ActiveDeckChipProps {
  deck: ActiveDeck | null
  /** The hero the mode requires (a hero's campaign). */
  heroId?: string
  className?: string
}

/**
 * The active deck in a game mode (docs/PLAN.md, section 6): every mode plays
 * with it, so it is shown, not chosen, with a link to change it in Decks and
 * what keeps it from playing, if anything.
 */
export default function ActiveDeckChip({ deck, heroId, className }: ActiveDeckChipProps) {
  const t = useT()
  const cardName = useCardName()
  const hero = deck ? getCard(deck.heroId) : null
  const problem = !deck
    ? t('activeDeck.none')
    : !deck.playable
      ? t('activeDeck.notPlayable', { name: deck.name })
      : heroId && deck.heroId !== heroId
        ? t('activeDeck.wrongHero', { hero: cardName(heroId), other: cardName(deck.heroId) })
        : null

  return (
    <div className={classNames('active-deck-chip', className, { problem })}>
      {deck && hero && (
        <div className={classNames('active-deck-chip__deck', `faction-${hero.faction}`)}>
          <span className="active-deck-chip__hero">{initials(hero.name)}</span>
          <span className="active-deck-chip__name">
            <small>{t('activeDeck.title')}</small>
            <strong>{deck.name}</strong>
          </span>
          <GameButton size="small" color="secondary" href="/decks">
            {t('activeDeck.change')}
          </GameButton>
        </div>
      )}
      {problem && (
        <p className="active-deck-chip__problem">
          ⚠ {problem}
          {!deck && (
            <>
              {' '}
              <GameButton size="small" color="primary" href="/decks">
                {t('lobby.goToDecks')}
              </GameButton>
            </>
          )}
        </p>
      )}
    </div>
  )
}

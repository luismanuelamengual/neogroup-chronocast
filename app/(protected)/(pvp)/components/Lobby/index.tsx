'use client'

import './index.scss'
import '@/app/(protected)/(cards)/utils/catalog'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { useMusic } from '@/app/(protected)/(art)/hooks/useMusic'
import { initials } from '@/app/(protected)/(battle)/components/UnitToken'
import { DeckDto } from '@/app/(protected)/(collection)/models/DeckDto'
import { getCard } from '@/app/(protected)/(engine)/utils/registry'
import { leagueOf } from '@/app/(protected)/(pvp)/data/leagues'
import { ROOMS_POLL_MS } from '@/app/(protected)/(pvp)/data/pvp'
import { usePvp } from '@/app/(protected)/(pvp)/hooks/usePvp'
import { MatchVisibility, RoomSummary } from '@/app/(protected)/(pvp)/models/MatchView'
import GameButton from '@/app/components/GameButton'
import { useCardName } from '@/app/i18n/cards/useCardName'
import { useI18n } from '@/app/i18n/I18nProvider'

interface LobbyProps {
  decks: DeckDto[]
  rooms: RoomSummary[]
  /** The match the player is already in, to go back to it. */
  activeMatch: number | null
  rating: number
  /** A code from a shared link (/lobby?code=...). */
  code: string
}

/**
 * The lobby (docs/PLAN.md, section 12.1): the deck to play with, quick match,
 * create a public or private room, join with a code, the public rooms waiting
 * for a rival (refreshed every few seconds) and the practice against the CPU.
 */
export default function Lobby({ decks, rooms: initialRooms, activeMatch, rating, code: initialCode }: LobbyProps) {
  useMusic('menu')
  const { t, locale } = useI18n()
  const cardName = useCardName()
  const router = useRouter()
  const pvp = usePvp()
  const [rooms, setRooms] = useState(initialRooms)
  const [deckId, setDeckId] = useState<number | null>(decks[0]?.id ?? null)
  const [code, setCode] = useState(initialCode)
  const [busy, setBusy] = useState<string | null>(null)
  const league = leagueOf(rating)

  useEffect(() => {
    const timer = setInterval(() => {
      pvp
        .listRooms()
        .then(setRooms)
        .catch(() => undefined)
    }, ROOMS_POLL_MS)

    return () => clearInterval(timer)
  }, [pvp])

  const go = async (key: string, action: () => Promise<{ id: number }>) => {
    setBusy(key)

    try {
      const { id } = await action()

      router.push(`/match/${id}`)
    } catch {
      setBusy(null)
    }
  }

  const create = (visibility: MatchVisibility) => go(visibility, () => pvp.createRoom(visibility, deckId!))
  const disabled = deckId == null || busy != null || activeMatch != null

  return (
    <div className="lobby">
      <header>
        <GameButton color="ghost" size="small" href="/menu">
          ← {t('lobby.back')}
        </GameButton>
        <h1>{t('lobby.title')}</h1>
        <span className={`lobby__league league-${league}`}>
          ⭐ {rating.toLocaleString(locale)} · {t(`leagues.${league}`)}
        </span>
      </header>

      {activeMatch != null && (
        <div className="lobby__active">
          <span>{t('lobby.activeMatch')}</span>
          <GameButton color="magenta" size="small" href={`/match/${activeMatch}`}>
            {t('lobby.resume')}
          </GameButton>
        </div>
      )}

      <div className="lobby__columns">
        <section className="lobby__panel">
          <h2>{t('lobby.yourDeck')}</h2>
          {decks.length === 0 ? (
            <p className="lobby__empty">
              {t('lobby.noDecks')}{' '}
              <GameButton size="small" color="violet" href="/decks">
                {t('lobby.goToDecks')}
              </GameButton>
            </p>
          ) : (
            <select value={deckId ?? ''} onChange={(event) => setDeckId(Number(event.target.value))}>
              {decks.map((deck) => (
                <option key={deck.id} value={deck.id}>
                  {deck.name} · {getCard(deck.heroId).name}
                </option>
              ))}
            </select>
          )}
          <GameButton
            color="gold"
            size="large"
            disabled={disabled}
            loading={busy === 'quick'}
            onClick={() => go('quick', () => pvp.quickMatch(deckId!))}
          >
            ⚡ {t('lobby.quickMatch')}
          </GameButton>
          <div className="lobby__row">
            <GameButton color="cyan" disabled={disabled} loading={busy === 'public'} onClick={() => create('public')}>
              {t('lobby.createPublic')}
            </GameButton>
            <GameButton
              color="violet"
              disabled={disabled}
              loading={busy === 'private'}
              onClick={() => create('private')}
            >
              🔒 {t('lobby.createPrivate')}
            </GameButton>
          </div>
          <form
            className="lobby__code"
            onSubmit={(event) => {
              event.preventDefault()
              void go('code', () => pvp.joinRoom({ code }, deckId!))
            }}
          >
            <input
              value={code}
              maxLength={6}
              placeholder={t('lobby.codePlaceholder')}
              aria-label={t('lobby.code')}
              onChange={(event) => setCode(event.target.value.toUpperCase().replace(/[^A-Z]/g, ''))}
            />
            <GameButton type="submit" color="lime" disabled={disabled || code.length !== 6} loading={busy === 'code'}>
              {t('lobby.join')}
            </GameButton>
          </form>
          <p className="lobby__note">{t('lobby.publicNote')}</p>
          <GameButton color="ghost" size="small" href="/practice">
            🤖 {t('lobby.practice')}
          </GameButton>
        </section>

        <section className="lobby__panel lobby__rooms">
          <h2>{t('lobby.rooms')}</h2>
          {rooms.length === 0 ? (
            <p className="lobby__empty">{t('lobby.noRooms')}</p>
          ) : (
            <ul>
              {rooms.map((room) => {
                const hero = getCard(room.heroId)

                return (
                  <li key={room.id}>
                    <span className={`lobby__hero faction-${hero.faction}`} title={cardName(hero)}>
                      {initials(hero.name)}
                    </span>
                    <span className="lobby__host">
                      <strong>{room.host}</strong>
                      <small>
                        ⭐ {room.rating.toLocaleString(locale)} · {cardName(hero)}
                      </small>
                    </span>
                    <GameButton
                      size="small"
                      color="lime"
                      disabled={disabled}
                      loading={busy === `room-${room.id}`}
                      onClick={() => go(`room-${room.id}`, () => pvp.joinRoom({ matchId: room.id }, deckId!))}
                    >
                      {t('lobby.join')}
                    </GameButton>
                  </li>
                )
              })}
            </ul>
          )}
        </section>
      </div>
    </div>
  )
}

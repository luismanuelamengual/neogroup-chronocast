'use client'

import './index.scss'
import classNames from 'classnames'
import { useRouter } from 'next/navigation'
import { useEffect, useMemo, useState } from 'react'
import toast from 'react-hot-toast'
import CardSpotlight, { SpotlightAction } from '@/app/(protected)/(cards)/components/CardSpotlight'
import CardView from '@/app/(protected)/(cards)/components/CardView'
import { CARDS, HEROES } from '@/app/(protected)/(cards)/utils/catalog'
import CardFilters from '@/app/(protected)/(collection)/components/CardFilters'
import { useCollection } from '@/app/(protected)/(collection)/hooks/useCollection'
import { Collection } from '@/app/(protected)/(collection)/models/Collection'
import { DeckDto } from '@/app/(protected)/(collection)/models/DeckDto'
import {
  CollectionProblem,
  costCurve,
  deckProblems,
  expandCards
} from '@/app/(protected)/(collection)/utils/deckProblems'
import { CardFilter, compareCards, EMPTY_FILTER, matchesFilter } from '@/app/(protected)/(collection)/utils/filters'
import { MAX_COPIES, MAX_DECK_SIZE, MAX_UNIQUE_COPIES, MIN_DECK_SIZE } from '@/app/(protected)/(engine)/data/rules'
import { canUseCard } from '@/app/(protected)/(engine)/utils/deckRules'
import { getCard } from '@/app/(protected)/(engine)/utils/registry'
import GameButton from '@/app/components/GameButton'
import { useIncrementalList } from '@/app/hooks/useIncrementalList'
import { useCardName } from '@/app/i18n/cards/useCardName'
import { useT } from '@/app/i18n/I18nProvider'
import { Translator } from '@/app/i18n/translate'

function problemText(problem: CollectionProblem, t: Translator): string {
  const card = 'cardId' in problem ? (getCard(problem.cardId)?.name ?? problem.cardId) : ''

  return t(`decks.problems.${problem.code}`, { ...problem, card } as unknown as Record<string, string | number>)
}

interface DeckEditorProps {
  /** The deck being edited (null: a new one). */
  deck: DeckDto | null
  /** The hero of the deck (null: a new deck whose hero is not chosen yet). */
  heroId: string | null
  collection: Collection
}

/**
 * The deck editor (docs/PLAN.md, section 14.2), laid out for a phone in
 * landscape: a bar on top (back, name, X/40 counter with the cost curve and the
 * broken rules, clear, save), the deck itself as a strip of whole cards with
 * their ×N counts, and below it the owned cards the hero can use, with
 * filters. A tap on any card shows it big, with buttons to add or remove it.
 *
 * The hero is always the first card: a new or cleared deck only offers the
 * owned heroes, and once one is in, the pool shows the cards that hero can use.
 */
export default function DeckEditor({ deck, heroId: initialHeroId, collection }: DeckEditorProps) {
  const t = useT()
  const cardName = useCardName()
  const router = useRouter()
  const { saveDeck } = useCollection()
  const [heroId, setHeroId] = useState<string | null>(initialHeroId)
  const hero = heroId ? getCard(heroId) : null
  const [name, setName] = useState(deck?.name ?? (hero ? t('decks.editor.newName', { hero: hero.name }) : ''))
  // A name the player typed stays when the hero changes; the default one follows the hero.
  const [namedByPlayer, setNamedByPlayer] = useState(!!deck)
  const [cards, setCards] = useState<Record<string, number>>(deck?.cards ?? {})
  const [filter, setFilter] = useState<CardFilter>(EMPTY_FILTER)
  const [saving, setSaving] = useState(false)
  const [dirty, setDirty] = useState(!deck)
  const [details, setDetails] = useState(false)
  const [confirmClear, setConfirmClear] = useState(false)
  /** The card shown big (tapped in the deck or the pool), with its add/remove buttons. */
  const [spotlight, setSpotlight] = useState<string | null>(null)
  const list = useMemo(() => expandCards(cards), [cards])
  const problems = useMemo(
    () => (heroId ? deckProblems({ heroId, cards: list }, collection) : []),
    [heroId, list, collection]
  )
  const curve = useMemo(() => costCurve(list.map((cardId) => getCard(cardId))), [list])
  const heroes = useMemo(() => HEROES.filter((candidate) => (collection[candidate.id] ?? 0) > 0), [collection])
  const pool = useMemo(
    () =>
      hero
        ? CARDS.filter(
            (card) =>
              card.type !== 'hero' &&
              (collection[card.id] ?? 0) > 0 &&
              canUseCard(hero, card) &&
              matchesFilter(card, filter, collection[card.id] ?? 0)
          ).sort(compareCards)
        : heroes,
    [collection, hero, heroes, filter]
  )
  const entries = Object.entries(cards)
    .filter(([, count]) => count > 0)
    .map(([cardId, count]) => ({ card: getCard(cardId), count }))
    .sort((a, b) => compareCards(a.card, b.card))
  const size = list.length + (hero ? 1 : 0)
  // What the server needs to save: a hero, a name and only owned cards (an incomplete deck can be saved and finished later).
  const canSave =
    !!hero &&
    name.trim().length > 0 &&
    !problems.some((problem) => problem.code === 'notOwned' || problem.code === 'heroNotOwned')
  const tallest = Math.max(1, ...curve)

  // The clear button asks once: a second tap within a few seconds empties the deck.
  useEffect(() => {
    if (!confirmClear) {
      return
    }

    const timer = setTimeout(() => setConfirmClear(false), 3000)

    return () => clearTimeout(timer)
  }, [confirmClear])

  const chooseHero = (id: string) => {
    setHeroId(id)
    setFilter(EMPTY_FILTER)
    setDirty(true)

    if (!namedByPlayer) {
      setName(t('decks.editor.newName', { hero: getCard(id).name }))
    }
  }

  /** Empties the deck, hero included: only the heroes are offered again. */
  const clear = () => {
    setHeroId(null)
    setCards({})
    setFilter(EMPTY_FILTER)
    setConfirmClear(false)
    setDetails(false)
    setSpotlight(null)
    setDirty(true)
  }

  const change = (cardId: string, delta: number) => {
    const card = getCard(cardId)
    const current = cards[cardId] ?? 0
    const max = Math.min(collection[cardId] ?? 0, card.keywords?.includes('unique') ? MAX_UNIQUE_COPIES : MAX_COPIES)
    const next = Math.max(0, Math.min(max, current + delta))

    if (next !== current && (delta < 0 || size < MAX_DECK_SIZE)) {
      setCards({ ...cards, [cardId]: next })
      setDirty(true)
    }
  }

  /** The buttons beside the card shown big: choose a hero, take the hero out, or add/remove a copy. */
  const spotlightActions = (cardId: string): SpotlightAction[] => {
    const card = getCard(cardId)

    if (card.type === 'hero') {
      return cardId === heroId
        ? [{ label: t('decks.editor.removeHero'), color: 'secondary', onClick: clear }]
        : [
            {
              label: t('decks.editor.chooseThisHero'),
              color: 'primary',
              onClick: () => {
                chooseHero(cardId)
                setSpotlight(null)
              }
            }
          ]
    }

    const inDeck = cards[cardId] ?? 0
    const owned = collection[cardId] ?? 0
    const max = Math.min(owned, card.keywords?.includes('unique') ? MAX_UNIQUE_COPIES : MAX_COPIES)

    return [
      {
        label: t('decks.editor.add'),
        color: 'primary',
        disabledReason:
          inDeck >= owned
            ? t('decks.editor.noneLeft')
            : inDeck >= max
              ? t('decks.editor.maxCopies', { max })
              : size >= MAX_DECK_SIZE
                ? t('decks.editor.deckFull', { max: MAX_DECK_SIZE })
                : null,
        onClick: () => change(cardId, 1)
      },
      {
        label: t('decks.editor.remove'),
        color: 'secondary',
        disabledReason: inDeck === 0 ? t('decks.editor.notInDeck') : null,
        onClick: () => change(cardId, -1)
      }
    ]
  }

  const spotlightNote = (cardId: string): string | null => {
    if (getCard(cardId).type === 'hero') {
      return null
    }

    const owned = collection[cardId] ?? 0
    const inDeck = cards[cardId] ?? 0

    return t('decks.editor.copies', { inDeck, owned })
  }

  const save = async () => {
    if (!heroId || !canSave) {
      return
    }

    setSaving(true)

    try {
      const saved = await saveDeck({ id: deck?.id, name, heroId, cards })

      setDirty(false)
      toast.success(t('decks.editor.saved'))

      if (!deck) {
        router.replace(`/decks/${saved.id}`)
      }
    } catch {
      // The error is already shown as a toast.
    } finally {
      setSaving(false)
    }
  }

  const { visible: visiblePool, sentinel: sentinelPool } = useIncrementalList(pool)

  return (
    <div className="deck-editor">
      <header className="deck-editor__bar">
        <GameButton color="secondary" size="small" href="/decks">
          ← {t('decks.editor.back')}
        </GameButton>
        <input
          className="deck-editor__name"
          value={name}
          maxLength={40}
          placeholder={t('decks.editor.name')}
          aria-label={t('decks.editor.name')}
          onChange={(event) => {
            setName(event.target.value)
            setNamedByPlayer(true)
            setDirty(true)
          }}
        />
        <button
          type="button"
          className={classNames('deck-editor__counter', {
            ok: size >= MIN_DECK_SIZE && problems.length === 0,
            open: details
          })}
          onClick={() => setDetails(!details)}
          aria-expanded={details}
        >
          <strong>{t('decks.editor.counter', { count: size, min: MIN_DECK_SIZE })}</strong>
          {hero && <span>{problems.length === 0 ? '✔' : `⚠ ${problems.length}`}</span>}
        </button>
        <GameButton
          size="small"
          color={confirmClear ? 'danger' : 'secondary'}
          disabled={!hero}
          onClick={() => (confirmClear ? clear() : setConfirmClear(true))}
        >
          {confirmClear ? t('decks.editor.clearConfirm') : t('decks.editor.clear')}
        </GameButton>
        <GameButton size="small" color="primary" loading={saving} disabled={!canSave || !dirty} onClick={save}>
          {t('decks.editor.save')}
        </GameButton>

        {details && hero && (
          <div className="deck-editor__details">
            <div className="deck-editor__summary">
              <span className="deck-editor__max">{t('decks.editor.max', { max: MAX_DECK_SIZE })}</span>
              <div className="deck-editor__curve" title={t('decks.editor.curve')}>
                {curve.map((count, cost) => (
                  <span key={cost} className="deck-editor__bar-col">
                    <em>{count || ''}</em>
                    <span style={{ height: `${(count / tallest) * 100}%` }} />
                    <small>{cost === curve.length - 1 ? `${cost}+` : cost}</small>
                  </span>
                ))}
              </div>
            </div>
            <ul className={classNames('deck-editor__problems', { ok: problems.length === 0 })}>
              {problems.length === 0 ? (
                <li>✔ {t('decks.editor.ok')}</li>
              ) : (
                problems.map((problem, index) => <li key={index}>⚠ {problemText(problem, t)}</li>)
              )}
            </ul>
          </div>
        )}
      </header>

      <section className="deck-editor__deck" aria-label={t('decks.editor.list')}>
        {hero ? (
          <button
            type="button"
            className="deck-editor__slot hero"
            title={cardName(hero)}
            onClick={() => setSpotlight(hero.id)}
          >
            <span className="deck-editor__zoom">
              <CardView card={hero} />
            </span>
          </button>
        ) : (
          <div className="deck-editor__slot deck-editor__slot--empty">
            <span>👑</span>
            <small>{t('decks.editor.heroFirst')}</small>
          </div>
        )}
        {entries.map(({ card, count }) => (
          <button
            key={card.id}
            type="button"
            className="deck-editor__slot"
            title={cardName(card)}
            onClick={() => setSpotlight(card.id)}
          >
            <span className="deck-editor__zoom">
              <CardView card={card} />
            </span>
            <span className="deck-editor__count">×{count}</span>
          </button>
        ))}
        {hero && entries.length === 0 && <p className="deck-editor__hint">{t('decks.editor.emptyDeck')}</p>}
      </section>

      <section className="deck-editor__pool">
        <header>
          {hero ? (
            <CardFilters filter={filter} onChange={setFilter} hide={['usableBy', 'ownedOnly', 'rarity']} />
          ) : (
            <h2>{t('decks.chooseHero')}</h2>
          )}
        </header>
        <div className="deck-editor__scroller">
          <div className="deck-editor__grid">
            {visiblePool.map((card) => {
              const left = (collection[card.id] ?? 0) - (cards[card.id] ?? 0)

              // A card with no copies left to add is hidden (filtered here and not in the pool,
              // so adding a card does not start the incremental list over).
              if (hero && left <= 0) {
                return null
              }

              return (
                <button key={card.id} type="button" className="deck-editor__card" onClick={() => setSpotlight(card.id)}>
                  <span className="deck-editor__zoom">
                    <CardView card={card} />
                  </span>
                  {/* The copies still free to add (more than the deck takes: spares to sell). */}
                  {hero && <span className="deck-editor__count">×{Math.max(0, left)}</span>}
                </button>
              )
            })}
            {!hero && heroes.length === 0 && <p className="deck-editor__hint">{t('decks.editor.noHeroes')}</p>}
            <span ref={sentinelPool} className="incremental-sentinel" aria-hidden="true" />
          </div>
        </div>
      </section>

      {spotlight && (
        <CardSpotlight
          cardId={spotlight}
          onClose={() => setSpotlight(null)}
          actions={spotlightActions(spotlight)}
          note={spotlightNote(spotlight)}
        />
      )}
    </div>
  )
}

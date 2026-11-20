'use client'

import './index.scss'
import classNames from 'classnames'
import { useRouter } from 'next/navigation'
import { useMemo, useState } from 'react'
import toast from 'react-hot-toast'
import CardView from '@/app/(protected)/(cards)/components/CardView'
import { CARDS } from '@/app/(protected)/(cards)/utils/catalog'
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
  heroId: string
  collection: Collection
}

/**
 * The deck editor (docs/PLAN.md, section 14.2): on the left the owned cards the
 * hero can use, with filters; on the right the deck: name, the X/40 counter,
 * the cost curve, the broken rules (live) and the list with its counts.
 */
export default function DeckEditor({ deck, heroId, collection }: DeckEditorProps) {
  const t = useT()
  const cardName = useCardName()
  const router = useRouter()
  const { saveDeck } = useCollection()
  const hero = getCard(heroId)
  const [name, setName] = useState(deck?.name ?? t('decks.editor.newName', { hero: hero.name }))
  const [cards, setCards] = useState<Record<string, number>>(deck?.cards ?? {})
  const [filter, setFilter] = useState<CardFilter>(EMPTY_FILTER)
  const [saving, setSaving] = useState(false)
  const [dirty, setDirty] = useState(!deck)
  const list = useMemo(() => expandCards(cards), [cards])
  const problems = useMemo(() => deckProblems({ heroId, cards: list }, collection), [heroId, list, collection])
  const curve = useMemo(() => costCurve(list.map((cardId) => getCard(cardId))), [list])
  const pool = useMemo(
    () =>
      CARDS.filter(
        (card) =>
          (collection[card.id] ?? 0) > 0 &&
          canUseCard(hero, card) &&
          matchesFilter(card, filter, collection[card.id] ?? 0)
      ).sort(compareCards),
    [collection, hero, filter]
  )
  const entries = Object.entries(cards)
    .filter(([, count]) => count > 0)
    .map(([cardId, count]) => ({ card: getCard(cardId), count }))
    .sort((a, b) => compareCards(a.card, b.card))
  const size = list.length + 1
  const tallest = Math.max(1, ...curve)

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

  const save = async () => {
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

  return (
    <div className="deck-editor">
      <section className="deck-editor__pool">
        <header>
          <GameButton color="ghost" size="small" href="/decks">
            ← {t('decks.editor.back')}
          </GameButton>
          <h2>{t('decks.editor.pool', { hero: hero.name })}</h2>
        </header>
        <CardFilters filter={filter} onChange={setFilter} hide={['usableBy', 'ownedOnly']} />
        <div className="deck-editor__grid">
          {pool.map((card) => {
            const owned = collection[card.id] ?? 0
            const left = owned - (cards[card.id] ?? 0)

            return (
              <button
                key={card.id}
                type="button"
                className={classNames('deck-editor__card', { exhausted: left <= 0 })}
                onClick={() => change(card.id, 1)}
              >
                <span className="deck-editor__zoom">
                  <CardView card={card} />
                </span>
                <span className="deck-editor__left">{t('decks.editor.available', { left, owned })}</span>
              </button>
            )
          })}
        </div>
      </section>

      <aside className="deck-editor__deck">
        <input
          className="deck-editor__name"
          value={name}
          maxLength={40}
          aria-label={t('decks.editor.name')}
          onChange={(event) => {
            setName(event.target.value)
            setDirty(true)
          }}
        />
        <div className="deck-editor__summary">
          <span className={classNames('deck-editor__counter', { ok: size >= MIN_DECK_SIZE })}>
            {t('decks.editor.counter', { count: size, min: MIN_DECK_SIZE })}
          </span>
          <span className="deck-editor__max">{t('decks.editor.max', { max: MAX_DECK_SIZE })}</span>
          <div className="deck-editor__curve" title={t('decks.editor.curve')}>
            {curve.map((count, cost) => (
              <span key={cost} className="deck-editor__bar">
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
        <h3>{t('decks.editor.list')}</h3>
        <ul className="deck-editor__list">
          <li className="hero">
            <span className="cost">👑</span>
            <span className="name">{cardName(hero)}</span>
          </li>
          {entries.length === 0 && <li className="empty">{t('decks.editor.emptyDeck')}</li>}
          {entries.map(({ card, count }) => (
            <li key={card.id} className={`rarity-${card.rarity}`}>
              <span className="cost">{card.cost}</span>
              <span className="name">{cardName(card)}</span>
              <button type="button" onClick={() => change(card.id, -1)} aria-label="-">
                −
              </button>
              <span className="count">{count}</span>
              <button type="button" onClick={() => change(card.id, 1)} aria-label="+">
                +
              </button>
            </li>
          ))}
        </ul>
        <div className="deck-editor__save">
          {dirty && <span>{t('decks.editor.unsaved')}</span>}
          <GameButton color="lime" loading={saving} onClick={save}>
            {t('decks.editor.save')}
          </GameButton>
        </div>
      </aside>
    </div>
  )
}

'use client'

import { useMemo, useState } from 'react'
import { CARD_FILES } from '@/app/(protected)/(cards)/cards/index.generated'
import CardView from '@/app/(protected)/(cards)/components/CardView'
import { HEROES } from '@/app/(protected)/(cards)/utils/catalog'
import CardFilters from '@/app/(protected)/(collection)/components/CardFilters'
import { CardFilter, EMPTY_FILTER, matchesFilter } from '@/app/(protected)/(collection)/utils/filters'
import { CardDefinition } from '@/app/(protected)/(engine)/models/CardDefinition'
import { cardName } from '@/app/i18n/cards'
import { useI18n } from '@/app/i18n/I18nProvider'

/** The groups of the catalog, in the order the page shows them (by folder of cards/). */
const GROUPS = [
  { folder: 'heroes', title: 'Heroes and signature cards' },
  { folder: 'neutral', title: 'Neutral' },
  { folder: 'factions', title: 'Factions' },
  { folder: 'classes', title: 'Classes' }
]
/** Dev-only filter: the special kinds of cards players never own. */
const KINDS = {
  '': 'All kinds',
  playable: 'Playable',
  boss: 'Bosses',
  token: 'Tokens',
  reward: 'Rewards'
} as const

type Kind = keyof typeof KINDS

function matchesKind(card: CardDefinition, kind: Kind): boolean {
  switch (kind) {
    case '':
      return true
    case 'playable':
      return !card.boss && !card.token
    default:
      return Boolean(card[kind])
  }
}

/**
 * The whole catalog drawn with CardView, grouped by folder, with the filters of
 * the collection (plus the file path in the search and the kind of card). A
 * client component: the card definitions carry their logic (functions), which
 * can't cross from the server.
 */
export default function CardsCatalog() {
  const { locale } = useI18n()
  const [filter, setFilter] = useState<CardFilter>(EMPTY_FILTER)
  const [kind, setKind] = useState<Kind>('')
  const files = useMemo(() => {
    const search = filter.search.trim().toLowerCase()

    return CARD_FILES.filter(
      ({ file, card }) =>
        matchesFilter(card, { ...filter, search: '' }, 1) &&
        matchesKind(card, kind) &&
        (!search ||
          [file, card.name, card.text, cardName(card, locale)].some((value) => value.toLowerCase().includes(search)))
    )
  }, [filter, kind, locale])
  const filtered = files.length < CARD_FILES.length

  return (
    <>
      <div className="dev-cards__toolbar">
        <h1>Cards · {filtered ? `${files.length} / ${CARD_FILES.length}` : CARD_FILES.length}</h1>
        <CardFilters filter={filter} onChange={setFilter} heroes={HEROES.map((hero) => hero.id)} hide={['ownedOnly']} />
        <select className="dev-cards__kind" value={kind} onChange={(event) => setKind(event.target.value as Kind)}>
          {Object.entries(KINDS).map(([value, label]) => (
            <option key={value} value={value}>
              {label}
            </option>
          ))}
        </select>
        {(filter !== EMPTY_FILTER || kind !== '') && (
          <button
            type="button"
            className="dev-cards__clear"
            onClick={() => {
              setFilter(EMPTY_FILTER)
              setKind('')
            }}
          >
            Clear
          </button>
        )}
      </div>
      {files.length === 0 && <p className="dev-cards__empty">No card matches the filters.</p>}
      {GROUPS.map(({ folder, title }) => {
        const group = files.filter(({ file }) => file.startsWith(`${folder}/`))

        return (
          group.length > 0 && (
            <section key={folder}>
              <h2>
                {title} · {group.length}
              </h2>
              <div className="dev-cards__grid">
                {group.map(({ file, card }) => (
                  <figure key={card.id} data-card-id={card.id}>
                    <CardView card={card} />
                    <figcaption>{file}</figcaption>
                  </figure>
                ))}
              </div>
            </section>
          )
        )
      })}
    </>
  )
}

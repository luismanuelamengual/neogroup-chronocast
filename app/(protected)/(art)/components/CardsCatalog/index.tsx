'use client'

import { CARD_FILES } from '@/app/(protected)/(cards)/cards/index.generated'
import CardView from '@/app/(protected)/(cards)/components/CardView'

/** The groups of the catalog, in the order the page shows them (by folder of cards/). */
const GROUPS = [
  { folder: 'heroes', title: 'Heroes and signature cards' },
  { folder: 'neutral', title: 'Neutral' },
  { folder: 'factions', title: 'Factions' },
  { folder: 'classes', title: 'Classes' }
]

/**
 * The whole catalog drawn with CardView, grouped by folder. A client component:
 * the card definitions carry their logic (functions), which can't cross from
 * the server.
 */
export default function CardsCatalog() {
  return (
    <>
      <h1>Cards · {CARD_FILES.length}</h1>
      {GROUPS.map(({ folder, title }) => {
        const files = CARD_FILES.filter(({ file }) => file.startsWith(`${folder}/`))

        return (
          files.length > 0 && (
            <section key={folder}>
              <h2>
                {title} · {files.length}
              </h2>
              <div className="dev-cards__grid">
                {files.map(({ file, card }) => (
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

import './page.scss'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import CardsCatalog from '@/app/(protected)/(art)/components/CardsCatalog'
import { isProduction } from '@/app/utils/environment'

export const metadata: Metadata = { title: 'Cards (dev)' }

/**
 * Development page (/dev/cards): the whole catalog drawn with CardView, grouped
 * by folder, to check how each card looks while it is written and illustrated.
 * Not available in production.
 */
export default function DevCardsPage() {
  if (isProduction) {
    notFound()
  }

  return (
    <main className="dev-cards">
      <CardsCatalog />
    </main>
  )
}

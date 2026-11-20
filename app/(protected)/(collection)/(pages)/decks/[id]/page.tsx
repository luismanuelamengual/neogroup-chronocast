import '@/app/(protected)/(cards)/utils/catalog'
import type { Metadata } from 'next'
import { notFound, redirect } from 'next/navigation'
import { auth } from '@/app/(auth)/services/auth'
import DeckEditor from '@/app/(protected)/(collection)/components/DeckEditor'
import { DeckDto } from '@/app/(protected)/(collection)/models/DeckDto'
import { getCollection } from '@/app/(protected)/(collection)/services/collection'
import { getDeck } from '@/app/(protected)/(collection)/services/decks'
import { getT } from '@/app/i18n/server'

export async function generateMetadata(): Promise<Metadata> {
  return { title: (await getT())('metadata.decks') }
}

/** The deck editor: /decks/<id> edits a deck, /decks/new?hero=<hero-id> starts one for an owned hero. */
export default async function DeckEditorPage({
  params,
  searchParams
}: {
  params: Promise<{ id: string }>
  searchParams: Promise<{ hero?: string }>
}) {
  const userId = Number((await auth())!.user.id)
  const { id } = await params
  const { hero } = await searchParams
  const collection = await getCollection(userId)
  let deck: DeckDto | null = null

  if (id !== 'new') {
    deck = await getDeck(userId, Number(id)).catch(() => null)

    if (!deck) {
      notFound()
    }
  } else if (!hero || !collection[hero]) {
    redirect('/decks')
  }

  return <DeckEditor deck={deck} heroId={deck?.heroId ?? hero!} collection={collection} />
}

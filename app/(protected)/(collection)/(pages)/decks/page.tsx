import type { Metadata } from 'next'
import { auth } from '@/app/(auth)/services/auth'
import { HEROES } from '@/app/(protected)/(cards)/utils/catalog'
import DeckList from '@/app/(protected)/(collection)/components/DeckList'
import { getCollection } from '@/app/(protected)/(collection)/services/collection'
import { listDecks } from '@/app/(protected)/(collection)/services/decks'
import { getT } from '@/app/i18n/server'

export async function generateMetadata(): Promise<Metadata> {
  return { title: (await getT())('metadata.decks') }
}

export default async function DecksPage() {
  const userId = Number((await auth())!.user.id)
  const [decks, collection] = await Promise.all([listDecks(userId), getCollection(userId)])

  return <DeckList decks={decks} heroes={HEROES.filter((hero) => collection[hero.id]).map((hero) => hero.id)} />
}

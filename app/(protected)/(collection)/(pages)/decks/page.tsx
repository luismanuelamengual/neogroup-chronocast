import type { Metadata } from 'next'
import { auth } from '@/app/(auth)/services/auth'
import DeckList from '@/app/(protected)/(collection)/components/DeckList'
import { listDecks } from '@/app/(protected)/(collection)/services/decks'
import { getT } from '@/app/i18n/server'

export async function generateMetadata(): Promise<Metadata> {
  return { title: (await getT())('metadata.decks') }
}

export default async function DecksPage() {
  const userId = Number((await auth())!.user.id)
  const decks = await listDecks(userId)

  return <DeckList decks={decks} />
}

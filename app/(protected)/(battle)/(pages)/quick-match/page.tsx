import type { Metadata } from 'next'
import { auth } from '@/app/(auth)/services/auth'
import QuickMatch from '@/app/(protected)/(battle)/components/QuickMatch'
import { getActiveDeck } from '@/app/(protected)/(collection)/services/decks'
import { getT } from '@/app/i18n/server'

export async function generateMetadata(): Promise<Metadata> {
  return { title: (await getT())('metadata.quickMatch') }
}

/** Quick match against the computer (/quick-match): the active deck against a random hero and deck. */
export default async function QuickMatchPage() {
  const userId = Number((await auth())!.user.id)

  return <QuickMatch deck={await getActiveDeck(userId)} />
}

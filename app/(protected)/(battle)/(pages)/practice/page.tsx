import type { Metadata } from 'next'
import { auth } from '@/app/(auth)/services/auth'
import PracticeSetup from '@/app/(protected)/(battle)/components/PracticeSetup'
import { getActiveDeck } from '@/app/(protected)/(collection)/services/decks'
import { getT } from '@/app/i18n/server'

export async function generateMetadata(): Promise<Metadata> {
  return { title: (await getT())('metadata.practice') }
}

/** Practice against the computer (/practice), or the guided first match (/practice?tutorial=1). */
export default async function PracticePage({ searchParams }: { searchParams: Promise<{ tutorial?: string }> }) {
  const userId = Number((await auth())!.user.id)
  const { tutorial } = await searchParams

  return <PracticeSetup deck={await getActiveDeck(userId)} tutorial={tutorial === '1'} />
}

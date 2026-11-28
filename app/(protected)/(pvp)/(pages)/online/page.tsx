import type { Metadata } from 'next'
import { redirect } from 'next/navigation'
import { auth } from '@/app/(auth)/services/auth'
import { getActiveDeck } from '@/app/(protected)/(collection)/services/decks'
import Matchmaking from '@/app/(protected)/(pvp)/components/Matchmaking'
import { findMatch } from '@/app/(protected)/(pvp)/services/matchRows'
import { activeMatchId } from '@/app/(protected)/(pvp)/services/rooms'
import { getT } from '@/app/i18n/server'
import { User } from '@/app/models/User'

export async function generateMetadata(): Promise<Metadata> {
  return { title: (await getT())('metadata.lobby') }
}

/** Online match (/online): searches a rival of similar Prestige at once, or goes back to a match in progress. */
export default async function OnlinePage() {
  const userId = Number((await auth())!.user.id)
  const user = await User.find(userId)

  if (!user?.starterHeroId) {
    redirect('/welcome')
  }

  const active = await activeMatchId(userId)

  if (active != null && (await findMatch(active))?.status === 'playing') {
    redirect(`/match/${active}`)
  }

  return <Matchmaking deck={await getActiveDeck(userId)} rating={user.rating} />
}

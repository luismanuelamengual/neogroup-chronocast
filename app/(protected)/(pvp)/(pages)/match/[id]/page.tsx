import type { Metadata } from 'next'
import { redirect } from 'next/navigation'
import { auth } from '@/app/(auth)/services/auth'
import OnlineMatch from '@/app/(protected)/(pvp)/components/OnlineMatch'
import { getMatchState } from '@/app/(protected)/(pvp)/services/matches'
import { getT } from '@/app/i18n/server'
import { ApiException } from '@/app/models/ApiException'

export async function generateMetadata(): Promise<Metadata> {
  return { title: (await getT())('metadata.match') }
}

/** A PvP match (/match/<id>): the battle (a room still waiting goes back to the matchmaking). */
export default async function MatchPage({ params }: { params: Promise<{ id: string }> }) {
  const userId = Number((await auth())!.user.id)
  const { id } = await params

  try {
    return <OnlineMatch initial={(await getMatchState(userId, Number(id), null))!} />
  } catch (error) {
    if (error instanceof ApiException) {
      redirect('/play')
    }

    throw error
  }
}

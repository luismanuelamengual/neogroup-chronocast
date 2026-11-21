import type { Metadata } from 'next'
import { redirect } from 'next/navigation'
import { auth } from '@/app/(auth)/services/auth'
import { getActiveDeck } from '@/app/(protected)/(collection)/services/decks'
import Lobby from '@/app/(protected)/(pvp)/components/Lobby'
import { activeMatchId, listRooms } from '@/app/(protected)/(pvp)/services/rooms'
import { getT } from '@/app/i18n/server'
import { User } from '@/app/models/User'

export async function generateMetadata(): Promise<Metadata> {
  return { title: (await getT())('metadata.lobby') }
}

/** The lobby (/lobby): public rooms, create a room, join with a code, quick match and practice. */
export default async function LobbyPage({ searchParams }: { searchParams: Promise<{ code?: string }> }) {
  const userId = Number((await auth())!.user.id)
  const user = await User.find(userId)

  if (!user?.starterHeroId) {
    redirect('/welcome')
  }

  const { code } = await searchParams
  const [deck, rooms, active] = await Promise.all([getActiveDeck(userId), listRooms(userId), activeMatchId(userId)])

  return (
    <Lobby
      deck={deck}
      rooms={rooms}
      activeMatch={active}
      rating={user.rating}
      code={(code ?? '').toUpperCase().slice(0, 6)}
    />
  )
}

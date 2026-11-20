import type { Metadata } from 'next'
import { auth } from '@/app/(auth)/services/auth'
import RankingView from '@/app/(protected)/(ranking)/components/RankingView'
import { getRanking } from '@/app/(protected)/(ranking)/services/ranking'
import { getT } from '@/app/i18n/server'

export async function generateMetadata(): Promise<Metadata> {
  return { title: (await getT())('metadata.ranking') }
}

/** The ranking (/ranking): the top 100 by Prestige and the player's own position. */
export default async function RankingPage() {
  const userId = Number((await auth())!.user.id)

  return <RankingView ranking={await getRanking(userId)} userId={userId} />
}

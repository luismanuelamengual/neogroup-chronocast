import type { Metadata } from 'next'
import { redirect } from 'next/navigation'
import { auth } from '@/app/(auth)/services/auth'
import MainMenu from '@/app/(protected)/(home)/components/MainMenu'
import { levelProgress } from '@/app/(protected)/(progression)/utils/levels'
import { getT } from '@/app/i18n/server'
import { User } from '@/app/models/User'

export async function generateMetadata(): Promise<Metadata> {
  return { title: (await getT())('metadata.mainMenu') }
}

export default async function MenuPage() {
  const session = await auth()
  const user = await User.find(Number(session!.user.id))

  // First visit: the player chooses the starter hero before anything else.
  if (user && !user.starterHeroId) {
    redirect('/welcome')
  }

  return (
    <MainMenu
      gold={Number(user?.gold ?? 0)}
      rating={Number(user?.rating ?? 0)}
      progress={levelProgress(Number(user?.xp ?? 0))}
    />
  )
}

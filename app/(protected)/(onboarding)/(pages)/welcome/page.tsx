import type { Metadata } from 'next'
import { redirect } from 'next/navigation'
import { auth } from '@/app/(auth)/services/auth'
import StarterChoice from '@/app/(protected)/(onboarding)/components/StarterChoice'
import { getT } from '@/app/i18n/server'
import { User } from '@/app/models/User'

export async function generateMetadata(): Promise<Metadata> {
  return { title: (await getT())('metadata.welcome') }
}

/** First visit (/welcome): the player chooses the starter hero. Once chosen, it goes to the menu. */
export default async function WelcomePage() {
  const session = await auth()
  const user = await User.find(Number(session!.user.id))

  if (user?.starterHeroId) {
    redirect('/menu')
  }

  return <StarterChoice />
}

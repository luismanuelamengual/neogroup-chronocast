import type { Metadata } from 'next'
import { redirect } from 'next/navigation'
import { auth } from '@/app/(auth)/services/auth'
import PlayMenu from '@/app/(protected)/(home)/components/PlayMenu'
import { getT } from '@/app/i18n/server'
import { User } from '@/app/models/User'

export async function generateMetadata(): Promise<Metadata> {
  return { title: (await getT())('metadata.play') }
}

/** Play (/play): the campaign, the online match or the practice against the CPU. */
export default async function PlayPage() {
  const user = await User.find(Number((await auth())!.user.id))

  if (!user?.starterHeroId) {
    redirect('/welcome')
  }

  return <PlayMenu />
}

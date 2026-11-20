import type { Metadata } from 'next'
import { redirect } from 'next/navigation'
import { auth } from '@/app/(auth)/services/auth'
import CampaignList from '@/app/(protected)/(campaign)/components/CampaignList'
import { listCampaigns } from '@/app/(protected)/(campaign)/services/campaigns'
import { getT } from '@/app/i18n/server'
import { User } from '@/app/models/User'

export async function generateMetadata(): Promise<Metadata> {
  return { title: (await getT())('metadata.campaign') }
}

/** The campaigns (/campaign): one per hero, with the player's progress. */
export default async function CampaignsPage() {
  const userId = Number((await auth())!.user.id)
  const user = await User.find(userId)

  if (!user?.starterHeroId) {
    redirect('/welcome')
  }

  return <CampaignList campaigns={await listCampaigns(userId)} />
}

import type { Metadata } from 'next'
import { notFound, redirect } from 'next/navigation'
import { auth } from '@/app/(auth)/services/auth'
import CampaignMap from '@/app/(protected)/(campaign)/components/CampaignMap'
import { findCampaign } from '@/app/(protected)/(campaign)/data/campaigns'
import { getCampaignSummary } from '@/app/(protected)/(campaign)/services/campaigns'
import { storyKey } from '@/app/(protected)/(campaign)/utils/storyKey'
import { playableDecks } from '@/app/(protected)/(collection)/services/decks'
import { getT } from '@/app/i18n/server'

export async function generateMetadata({ params }: { params: Promise<{ heroId: string }> }): Promise<Metadata> {
  const { heroId } = await params
  const t = await getT()

  return { title: findCampaign(heroId) ? t(storyKey(heroId, 'title')) : t('metadata.campaign') }
}

/** A hero's campaign (/campaign/<hero-id>): the map of its 10 battles, and the battles themselves. */
export default async function CampaignPage({ params }: { params: Promise<{ heroId: string }> }) {
  const userId = Number((await auth())!.user.id)
  const { heroId } = await params

  if (!findCampaign(heroId)) {
    notFound()
  }

  const summary = await getCampaignSummary(userId, heroId)

  if (!summary.owned) {
    redirect('/campaign')
  }

  const decks = (await playableDecks(userId)).filter((deck) => deck.heroId === heroId)

  return <CampaignMap campaign={summary} decks={decks} />
}

import type { Metadata } from 'next'
import { redirect } from 'next/navigation'
import { auth } from '@/app/(auth)/services/auth'
import ShopView, { ShopTab } from '@/app/(protected)/(shop)/components/ShopView'
import { getShopState } from '@/app/(protected)/(shop)/services/shop'
import { getT } from '@/app/i18n/server'
import { User } from '@/app/models/User'

const TABS: ShopTab[] = ['packs', 'cards', 'sell']

export async function generateMetadata(): Promise<Metadata> {
  return { title: (await getT())('metadata.shop') }
}

export default async function ShopPage({ searchParams }: { searchParams: Promise<{ tab?: string }> }) {
  const userId = Number((await auth())!.user.id)
  const { tab } = await searchParams

  // Before choosing the starter hero there is nothing to play with: first the welcome.
  if (!(await User.find(userId))?.starterHeroId) {
    redirect('/welcome')
  }

  return (
    <ShopView initial={await getShopState(userId)} tab={TABS.includes(tab as ShopTab) ? (tab as ShopTab) : 'packs'} />
  )
}

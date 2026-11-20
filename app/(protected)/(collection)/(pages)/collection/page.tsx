import type { Metadata } from 'next'
import { auth } from '@/app/(auth)/services/auth'
import CollectionView from '@/app/(protected)/(collection)/components/CollectionView'
import { getCollection } from '@/app/(protected)/(collection)/services/collection'
import { getT } from '@/app/i18n/server'

export async function generateMetadata(): Promise<Metadata> {
  return { title: (await getT())('metadata.collection') }
}

export default async function CollectionPage() {
  const session = await auth()

  return <CollectionView collection={await getCollection(Number(session!.user.id))} />
}

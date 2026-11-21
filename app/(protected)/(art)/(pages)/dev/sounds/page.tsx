import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import SoundsPreview from '@/app/(protected)/(art)/components/SoundsPreview'
import { isProduction } from '@/app/utils/environment'

export const metadata: Metadata = { title: 'Sounds (dev)' }

/** Development page (/dev/sounds): every effect and theme, to hear them one by one. Not available in production. */
export default function DevSoundsPage() {
  if (isProduction) {
    notFound()
  }

  return <SoundsPreview />
}

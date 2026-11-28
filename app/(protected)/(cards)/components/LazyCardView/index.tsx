'use client'

import './index.scss'
import { ComponentProps, useRef } from 'react'
import CardView from '@/app/(protected)/(cards)/components/CardView'
import { useNearViewport } from '@/app/hooks/useNearViewport'

/**
 * A CardView for long grids (shop, collection, deck editor): drawn only while it is in view or close to
 * it (useNearViewport); further away, an empty box of the same size keeps its place in the grid.
 */
export default function LazyCardView(props: ComponentProps<typeof CardView>) {
  const ref = useRef<HTMLSpanElement>(null)
  const near = useNearViewport(ref)

  return (
    <span ref={ref} className="lazy-card-view">
      {near ? <CardView {...props} /> : <span className="lazy-card-view__empty" />}
    </span>
  )
}

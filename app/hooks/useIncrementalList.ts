'use client'

import { RefCallback, useCallback, useEffect, useRef, useState } from 'react'

/** How many items show at first, and how many more each time the end comes near. */
export const INCREMENTAL_PAGE = 40

/**
 * A long list (the 500 cards of the collection, the shop...) shown in pages:
 * the first ones at once and the next ones as the end of the list comes into
 * view, so a phone draws a few dozen cards instead of hundreds. Starts over
 * when the list changes (a new filter). Put `sentinel` on an element after the
 * items.
 */
export function useIncrementalList<T>(
  items: T[],
  page = INCREMENTAL_PAGE
): { visible: T[]; sentinel: RefCallback<HTMLElement> } {
  const [count, setCount] = useState(page)
  const observer = useRef<IntersectionObserver | null>(null)

  useEffect(() => setCount(page), [items, page])

  const sentinel = useCallback<RefCallback<HTMLElement>>(
    (element) => {
      observer.current?.disconnect()

      if (!element || typeof IntersectionObserver === 'undefined') {
        return
      }

      observer.current = new IntersectionObserver(
        (entries) => {
          if (entries.some((entry) => entry.isIntersecting)) {
            setCount((current) => Math.min(items.length, current + page))
          }
        },
        // Loads the next page a little before the end shows.
        { rootMargin: '600px 0px' }
      )
      observer.current.observe(element)
    },
    [items.length, page]
  )

  useEffect(() => () => observer.current?.disconnect(), [])

  return { visible: items.slice(0, count), sentinel }
}

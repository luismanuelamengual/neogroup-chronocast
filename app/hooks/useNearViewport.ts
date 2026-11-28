'use client'

import { RefObject, useEffect, useState } from 'react'

/** How far (px) above and below the visible area an element still counts as near. */
const NEAR_MARGIN = 900

type Listener = (near: boolean) => void

/** One observer per scrolling box (the page or a panel that scrolls), shared by all its elements. */
const observers = new Map<Element | null, { observer: IntersectionObserver; listeners: Map<Element, Listener> }>()

/** The nearest ancestor that scrolls vertically (null: the page). */
function scrollParent(element: Element): Element | null {
  for (let node = element.parentElement; node; node = node.parentElement) {
    const { overflowY } = getComputedStyle(node)

    if (overflowY === 'auto' || overflowY === 'scroll') {
      return node
    }
  }

  return null
}

function observe(element: Element, listener: Listener): () => void {
  const root = scrollParent(element)
  let entry = observers.get(root)

  if (!entry) {
    const listeners = new Map<Element, Listener>()
    const observer = new IntersectionObserver(
      (changes) => changes.forEach((change) => listeners.get(change.target)?.(change.isIntersecting)),
      { root, rootMargin: `${NEAR_MARGIN}px 0px` }
    )

    entry = { observer, listeners }
    observers.set(root, entry)
  }

  const current = entry

  current.listeners.set(element, listener)
  current.observer.observe(element)

  return () => {
    current.observer.unobserve(element)
    current.listeners.delete(element)

    if (current.listeners.size === 0) {
      current.observer.disconnect()
      observers.delete(root)
    }
  }
}

/**
 * Whether an element is in view or close to it, in the box that scrolls it: a long grid of cards draws
 * only those, and the rest as light empty boxes of the same size, so a phone does not hold hundreds of
 * illustrations in memory after a long scroll. Starts as near (no blank flash on the first paint).
 */
export function useNearViewport(ref: RefObject<Element | null>): boolean {
  const [near, setNear] = useState(true)

  useEffect(() => {
    const element = ref.current

    if (!element || typeof IntersectionObserver === 'undefined') {
      return
    }

    return observe(element, setNear)
  }, [ref])

  return near
}

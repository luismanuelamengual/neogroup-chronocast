'use client'

import { create } from 'zustand'

interface CardArtStore {
  /** The processed images by name (`<card-id>`, `<hero-id>-portrait`) and their version. */
  manifest: Record<string, string> | null
  load: () => void
}

let loading = false

/**
 * The card art processed by `yarn art` (public/cards/manifest.json), loaded
 * once per visit. The service worker keeps it (and each image once seen) for
 * offline play.
 */
export const useCardArtStore = create<CardArtStore>()((set) => ({
  manifest: null,
  load: () => {
    if (loading) {
      return
    }

    loading = true
    fetch('/cards/manifest.json')
      .then((response) => (response.ok ? response.json() : {}))
      .then((manifest: Record<string, string>) => set({ manifest }))
      .catch(() => set({ manifest: {} }))
  }
}))

/** The URL of an image of the art (undefined while it has none: the card draws its placeholder). */
export function useCardArt(name: string): string | undefined {
  const manifest = useCardArtStore((store) => store.manifest)
  const load = useCardArtStore((store) => store.load)

  if (!manifest) {
    load()

    return undefined
  }

  const version = manifest[name]

  return version ? `/cards/${name}.webp?v=${version}` : undefined
}

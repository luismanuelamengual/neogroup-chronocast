'use client'

import { create } from 'zustand'

interface CardArtStore {
  /** The processed images by name (`<card-id>`, `<hero-id>-portrait`) and their version. */
  manifest: Record<string, string> | null
  /** The card backs by id (public/backs/manifest.json) and their version. */
  backs: Record<string, string> | null
  load: () => void
}

let loading = false

/**
 * The card art processed by `yarn art` (public/cards/manifest.json, and the
 * card backs' public/backs/manifest.json), loaded
 * once per visit. The service worker keeps it (and each image once seen) for
 * offline play.
 */
export const useCardArtStore = create<CardArtStore>()((set) => ({
  manifest: null,
  backs: null,
  load: () => {
    if (loading) {
      return
    }

    loading = true
    const fetchManifest = (url: string): Promise<Record<string, string>> =>
      fetch(url)
        .then((response) => (response.ok ? response.json() : {}))
        .catch(() => ({}))

    void fetchManifest('/cards/manifest.json').then((manifest) => set({ manifest }))
    void fetchManifest('/backs/manifest.json').then((backs) => set({ backs }))
  }
}))

/**
 * The URL of an image of the art (undefined while it has none: the card draws its placeholder).
 * `thumb`: its small copy (public/cards/thumbs/, made by `yarn art`), for a card drawn small in a grid.
 */
export function useCardArt(name: string, thumb = false): string | undefined {
  const manifest = useCardArtStore((store) => store.manifest)
  const load = useCardArtStore((store) => store.load)

  if (!manifest) {
    load()

    return undefined
  }

  const version = manifest[name]

  return version ? `/cards/${thumb ? 'thumbs/' : ''}${name}.webp?v=${version}` : undefined
}

/** The URL of the image of a card back (undefined while it has none: the back draws its placeholder). */
export function useCardBackArt(id: string): string | undefined {
  const backs = useCardArtStore((store) => store.backs)
  const load = useCardArtStore((store) => store.load)

  if (!backs) {
    load()

    return undefined
  }

  const version = backs[id]

  return version ? `/backs/${id}.webp?v=${version}` : undefined
}

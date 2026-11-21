'use client'

import { useEffect } from 'react'
import { MusicId } from '@/app/(protected)/(art)/data/audio'
import { playMusic } from '@/app/(protected)/(art)/utils/sound'

/** Plays a theme while the screen is shown (the next screen's theme fades in over it). */
export function useMusic(id: MusicId | null): void {
  useEffect(() => {
    if (id) {
      void playMusic(id)
    }
  }, [id])
}

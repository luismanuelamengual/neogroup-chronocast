/**
 * The music and sound effects of the game, by name. The files go in
 * art/source/music/<name>.mp3|ogg and art/source/sfx/<name>.mp3|ogg and
 * `yarn art` copies them to public/audio/ (see art/music.md). A theme without
 * a file is silent; an effect without a file is synthesized (see sfxSynth.ts).
 */

export const MUSIC = ['menu', 'campaign', 'battle', 'boss', 'victory', 'defeat'] as const

export type MusicId = (typeof MUSIC)[number]

/** Themes that play once (the rest loop). */
export const ONE_SHOT_MUSIC: MusicId[] = ['victory', 'defeat']

/** Themes of a battle: they are never kept paused to go on later. */
export const BATTLE_MUSIC: MusicId[] = ['battle', 'boss', 'victory', 'defeat']

/** Volume of the themes that sound louder or softer than the rest (1 when not listed). */
export const MUSIC_LEVELS: Partial<Record<MusicId, number>> = {}

export const SFX = [
  // The resolution of a phase.
  'attack',
  'hit',
  'hero-hit',
  'miss',
  'armor',
  'shield',
  'heal',
  'buff',
  'stun',
  'summon',
  'death',
  'spell',
  'attach',
  'trap-set',
  'trap',
  'move',
  'chronos',
  'draw',
  'burn',
  'fail',
  'phase',
  'step',
  'victory-sting',
  'defeat-sting',
  // Programming the timeline.
  'place',
  'remove',
  'ready',
  'tick',
  // Menus, shop and packs.
  'button',
  'cursor',
  'menu-open',
  'menu-close',
  'coin',
  'pack-open',
  'card-flip',
  'rare-reveal'
] as const

export type SfxId = (typeof SFX)[number]

/** What `yarn art` found of the audio (public/audio/manifest.json): the files, as "battle.ogg". */
export interface AudioManifest {
  music: string[]
  sfx: string[]
}

export const EMPTY_AUDIO_MANIFEST: AudioManifest = { music: [], sfx: [] }

/* eslint-disable no-console */
/**
 * Copies the music and sound effects (art/source/music/ and art/source/sfx/,
 * .mp3 or .ogg, named as in app/(protected)/(art)/data/audio.ts) to
 * public/audio/ and lists them in public/audio/manifest.json, so the game
 * knows what there is. Run by `yarn art` (see art/music.md).
 */
import { copyFileSync, existsSync, mkdirSync, readdirSync, statSync, writeFileSync } from 'node:fs'
import path from 'node:path'
import { AudioManifest, MUSIC, SFX } from '@/app/(protected)/(art)/data/audio'

export const AUDIO_SOURCE_DIR = path.join(process.cwd(), 'art', 'source')
export const AUDIO_OUTPUT_DIR = path.join(process.cwd(), 'public', 'audio')
const AUDIO_FILE = /^(.+)\.(mp3|ogg)$/

/** Copies the files of one kind that changed. Returns the files there are, and the unknown ones. */
function copyKind(kind: 'music' | 'sfx', known: readonly string[]): { files: string[]; unknown: string[] } {
  const source = path.join(AUDIO_SOURCE_DIR, kind)
  const target = path.join(AUDIO_OUTPUT_DIR, kind)
  const files: string[] = []
  const unknown: string[] = []

  if (!existsSync(source)) {
    return { files, unknown }
  }

  mkdirSync(target, { recursive: true })

  for (const file of readdirSync(source).sort()) {
    const match = AUDIO_FILE.exec(file)

    if (!match) {
      continue
    }

    if (!known.includes(match[1])) {
      unknown.push(file)
      continue
    }

    const from = path.join(source, file)
    const to = path.join(target, file)

    if (!existsSync(to) || statSync(to).mtimeMs < statSync(from).mtimeMs) {
      copyFileSync(from, to)
    }

    files.push(file)
  }

  return { files, unknown }
}

/** Copies the audio and writes its manifest; prints the music still missing. */
export function processAudio(): AudioManifest {
  const music = copyKind('music', MUSIC)
  const sfx = copyKind('sfx', SFX)
  const manifest: AudioManifest = { music: music.files, sfx: sfx.files }
  const has = (files: string[], id: string) => files.some((file) => file.replace(AUDIO_FILE, '$1') === id)
  const missing = MUSIC.filter((id) => !has(music.files, id))

  mkdirSync(AUDIO_OUTPUT_DIR, { recursive: true })
  writeFileSync(path.join(AUDIO_OUTPUT_DIR, 'manifest.json'), `${JSON.stringify(manifest, null, 2)}\n`)
  console.log(
    `\nAudio: ${music.files.length} music files, ${sfx.files.length} effect files ` +
      `(the effects without a file are synthesized).`
  )

  if (missing.length > 0) {
    console.log(`  Music missing (silent): ${missing.join(', ')}`)
  }

  for (const file of [...music.unknown, ...sfx.unknown]) {
    console.log(`  ${file}: no sound uses this name (see art/music.md)`)
  }

  return manifest
}

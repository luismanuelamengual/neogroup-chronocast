'use client'

import './index.scss'
import classNames from 'classnames'
import { useEffect, useState } from 'react'
import SoundButton from '@/app/(protected)/(art)/components/SoundButton'
import { AudioManifest, MUSIC, MusicId, SFX, SfxId } from '@/app/(protected)/(art)/data/audio'
import { audioFile, loadAudioManifest, playMusic, playSfx, stopMusic } from '@/app/(protected)/(art)/utils/sound'

const GROUPS: { title: string; ids: SfxId[] }[] = [
  { title: 'Combat', ids: ['attack', 'hit', 'hero-hit', 'miss', 'armor', 'shield', 'death'] },
  {
    title: 'Cards',
    ids: ['summon', 'spell', 'attach', 'trap-set', 'trap', 'heal', 'buff', 'stun', 'move', 'chronos', 'draw', 'burn']
  },
  { title: 'Phases', ids: ['phase', 'step', 'fail', 'place', 'remove', 'ready', 'tick'] },
  { title: 'End of a match', ids: ['victory-sting', 'defeat-sting'] },
  {
    title: 'Menus and shop',
    ids: ['button', 'cursor', 'menu-open', 'menu-close', 'coin', 'pack-open', 'card-flip', 'rare-reveal']
  }
]

/**
 * Every sound effect (synthesized unless it has a file) and every theme
 * (with whether its file is there), to hear them one by one on a computer or
 * a phone.
 */
export default function SoundsPreview() {
  const [files, setFiles] = useState<AudioManifest | null>(null)
  const [playing, setPlaying] = useState<MusicId | null>(null)

  useEffect(() => {
    void loadAudioManifest().then(setFiles)

    return () => stopMusic()
  }, [])

  const others = SFX.filter((id) => !GROUPS.some((group) => group.ids.includes(id)))

  return (
    <div className="sounds-preview" data-silent>
      <header>
        <h1>Sounds</h1>
        <SoundButton />
      </header>

      {[...GROUPS, ...(others.length ? [{ title: 'Others', ids: others }] : [])].map((group) => (
        <section key={group.title}>
          <h2>{group.title}</h2>
          <div className="grid">
            {group.ids.map((id) => (
              <button key={id} type="button" onClick={() => playSfx(id)}>
                {id}
                {files && audioFile('sfx', id, files.sfx) && <small>file</small>}
              </button>
            ))}
          </div>
        </section>
      ))}

      <section>
        <h2>Music</h2>
        <div className="grid">
          {MUSIC.map((id) => {
            const src = files ? audioFile('music', id, files.music) : null

            return (
              <button
                key={id}
                type="button"
                className={classNames({ active: playing === id, missing: !src })}
                onClick={() => {
                  if (playing === id) {
                    stopMusic()
                    setPlaying(null)
                  } else {
                    void playMusic(id)
                    setPlaying(id)
                  }
                }}
              >
                {id}
                <small>{src ? src.split('/').pop() : 'missing'}</small>
              </button>
            )
          })}
        </div>
      </section>
    </div>
  )
}

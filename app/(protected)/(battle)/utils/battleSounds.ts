import { SfxId } from '@/app/(protected)/(art)/data/audio'
import { playSfx } from '@/app/(protected)/(art)/utils/sound'
import { MatchEvent } from '@/app/(protected)/(engine)/models/MatchEvent'

/** At most this many different effects for one moment of the resolution (more is noise). */
const MAX_SOUNDS = 4
/** Milliseconds between the effects of one moment, so they don't hit at once. */
const STAGGER_MS = 90

/** The effect of an event, if it has one. */
export function eventSound(event: MatchEvent): SfxId | null {
  switch (event.type) {
    case 'phaseStart':
      return 'phase'
    case 'step':
      return 'step'
    case 'fail':
      return 'fail'
    case 'draw':
      return 'draw'
    case 'burn':
      return 'burn'
    case 'fatigue':
      return 'hero-hit'
    case 'sacrifice':
    case 'chronos':
      return 'chronos'
    case 'play':
      return 'spell'
    case 'summon':
      return 'summon'
    case 'attach':
    case 'location':
      return 'attach'
    case 'trapSet':
      return 'trap-set'
    case 'trapTriggered':
      return 'trap'
    case 'attack':
      return 'attack'
    case 'miss':
      return 'miss'
    case 'damage':
      if (event.amount === 0) {
        return event.absorbed > 0 ? 'armor' : null
      }

      return event.target.slot === 'hero' ? 'hero-hit' : 'hit'
    case 'shieldBlock':
      return 'shield'
    case 'heal':
      return 'heal'
    case 'buff':
      return 'buff'
    case 'stun':
      return 'stun'
    case 'move':
      return 'move'
    case 'death':
    case 'heroFell':
      return 'death'
    case 'returnToHand':
      return 'draw'
    default:
      return null
  }
}

/**
 * The effects of one moment of the resolution: each kind once, the first
 * ones in order of the events, a little apart.
 */
export function momentSounds(events: MatchEvent[]): SfxId[] {
  const sounds: SfxId[] = []

  for (const event of events) {
    const sound = eventSound(event)

    if (sound && !sounds.includes(sound)) {
      sounds.push(sound)
    }
  }

  // A step with things happening doesn't need its tick.
  const meaningful = sounds.length > 1 ? sounds.filter((sound) => sound !== 'step') : sounds

  return meaningful.slice(0, MAX_SOUNDS)
}

/** Plays the effects of one moment of the resolution. */
export function playMoment(events: MatchEvent[], fast: boolean): void {
  momentSounds(events).forEach((sound, index) =>
    index === 0 ? playSfx(sound) : setTimeout(() => playSfx(sound), (index * STAGGER_MS) / (fast ? 2 : 1))
  )
}

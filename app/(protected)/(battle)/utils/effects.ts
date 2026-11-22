import { ELEMENT_ICONS } from '@/app/(protected)/(battle)/utils/icons'
import { MatchEvent } from '@/app/(protected)/(engine)/models/MatchEvent'
import { SlotRef } from '@/app/(protected)/(engine)/models/SlotRef'
import { Translator } from '@/app/i18n/translate'

export interface FloatText {
  text: string
  tone: 'damage' | 'heal' | 'buff' | 'info'
}

/** What a slot shows while a moment of the resolution plays. */
export interface SlotEffects {
  floats: FloatText[]
  attacking: boolean
  hit: boolean
  summoned: boolean
  /** An ally died here (its token is gone: the slot shows a puff). */
  dying: boolean
  /** The ally slid here from this many slots away (from − to), to animate the move. */
  shift: number
}

/** An attack of the moment, to draw its arrow. */
export interface AttackLine {
  from: SlotRef
  to: SlotRef
  missed: boolean
}

export function refKey(ref: SlotRef): string {
  return `${ref.player}:${ref.slot}`
}

/** The animations of each slot for the events of one moment of the resolution. */
export function slotEffects(events: MatchEvent[], t: Translator): Map<string, SlotEffects> {
  const effects = new Map<string, SlotEffects>()

  const of = (ref: SlotRef) => {
    const key = refKey(ref)

    if (!effects.has(key)) {
      effects.set(key, { floats: [], attacking: false, hit: false, summoned: false, dying: false, shift: 0 })
    }

    return effects.get(key)!
  }

  for (const event of events) {
    switch (event.type) {
      case 'attack':
        of(event.attacker).attacking = true
        of(event.target).hit = true
        break
      case 'miss':
        of(event.attacker).attacking = true
        of(event.target).floats.push({ text: t('battle.floats.miss'), tone: 'info' })
        break
      case 'damage':
        if (event.absorbed > 0) {
          of(event.target).floats.push({ text: `-${event.absorbed} 🛡️`, tone: 'info' })
        }

        if (event.amount > 0) {
          of(event.target).floats.push({
            text: `-${event.amount}${event.element ? ` ${ELEMENT_ICONS[event.element]}` : ''}`,
            tone: 'damage'
          })
          of(event.target).hit = true
        }

        break
      case 'heal':
        of(event.target).floats.push({ text: `+${event.amount}`, tone: 'heal' })
        break
      case 'buff':
        of(event.target).floats.push({
          text: event.health ? `+${event.attack}/+${event.health}` : `+${event.attack} ⚔️`,
          tone: 'buff'
        })
        break
      case 'shieldBlock':
        of(event.target).floats.push({ text: t('battle.floats.blocked'), tone: 'info' })
        break
      case 'stun':
        of(event.target).floats.push({ text: t('battle.floats.stun'), tone: 'info' })
        break
      case 'summon':
        of({ player: event.player, slot: event.slot }).summoned = true
        break

      case 'death': {
        const slot = of({ player: event.player, slot: event.slot })

        slot.floats.push({ text: '💀', tone: 'info' })
        slot.dying = true
        break
      }

      case 'move':
        of({ player: event.player, slot: event.to }).shift = event.from - event.to
        break
      default:
        break
    }
  }

  return effects
}

/** The attacks of one moment of the resolution (hits and misses), to draw their arrows. */
export function attackLines(events: MatchEvent[]): AttackLine[] {
  return events.flatMap((event) =>
    event.type === 'attack' || event.type === 'miss'
      ? [{ from: event.attacker, to: event.target, missed: event.type === 'miss' }]
      : []
  )
}

/** Whether a hero takes a heavy blow in this moment (the board shakes). */
export function heavyHeroHit(events: MatchEvent[], threshold = 10): boolean {
  return events.some((event) => event.type === 'damage' && event.target.slot === 'hero' && event.amount >= threshold)
}

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
      effects.set(key, { floats: [], attacking: false, hit: false, summoned: false })
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
          of(event.target).floats.push({ text: `-${event.amount}`, tone: 'damage' })
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
      case 'death':
        of({ player: event.player, slot: event.slot }).floats.push({ text: '💀', tone: 'info' })
        break
      default:
        break
    }
  }

  return effects
}

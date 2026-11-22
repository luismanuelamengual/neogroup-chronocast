import { MatchEvent } from '@/app/(protected)/(engine)/models/MatchEvent'
import { MatchState } from '@/app/(protected)/(engine)/models/MatchState'
import { PlayerId } from '@/app/(protected)/(engine)/models/PlayerId'
import { SlotRef } from '@/app/(protected)/(engine)/models/SlotRef'
import { getCard } from '@/app/(protected)/(engine)/utils/registry'
import { Translator } from '@/app/i18n/translate'

/**
 * One line of the battle log for an event, or null for the events that need no
 * line (steps, draws, the action announcements). Each side is named after its
 * hero; `state` gives the names of the allies in the slots (1 to 5 for the player).
 */
export function describeEvent(
  event: MatchEvent,
  t: Translator,
  state: MatchState,
  card: (id: string) => string = (id) => getCard(id).name
): string | null {
  const player = (id: PlayerId) => card(state.players[id].hero.cardId)

  const ref = (target: SlotRef) => {
    const side = state.players[target.player]

    if (target.slot === 'hero') {
      return card(side.hero.cardId)
    }

    const unit = side.allies[target.slot]

    return unit ? card(unit.cardId) : t('battle.slotOf', { slot: target.slot + 1, player: player(target.player) })
  }

  switch (event.type) {
    case 'phaseStart':
      return t('battle.events.phaseStart', { phase: event.phase })
    case 'burn':
      return t('battle.events.burn', { player: player(event.player), card: card(event.cardId) })
    case 'fatigue':
      return t('battle.events.fatigue', { player: player(event.player), amount: event.damage })
    case 'sacrifice':
      return t('battle.events.sacrifice', {
        player: player(event.player),
        card: card(event.cardId),
        capacity: event.capacity
      })
    case 'play':
      return t('battle.events.play', { player: player(event.player), card: card(event.cardId) })
    case 'summon':
      return t('battle.events.summon', { card: card(event.cardId), slot: event.slot + 1 })
    case 'attach':
      return event.target && event.target.slot !== 'hero'
        ? t('battle.events.attachAlly', {
            player: player(event.player),
            card: card(event.cardId),
            target: ref(event.target)
          })
        : t('battle.events.attach', { player: player(event.player), card: card(event.cardId) })
    case 'artifact':
      return t('battle.events.artifact', { player: player(event.player), card: card(event.cardId) })
    case 'gearDestroyed':
      return t(`battle.events.gearDestroyed_${event.kind}`, { player: player(event.player), card: card(event.cardId) })
    case 'gearWorn':
      return event.kind === 'weapon'
        ? t('battle.events.weaponWorn', { player: player(event.player), amount: event.amount })
        : t('battle.events.armorWorn', { player: player(event.player), amount: event.amount })
    case 'artifactSpent':
      return t('battle.events.artifactSpent', { card: card(event.cardId) })
    case 'location':
      return t('battle.events.location', { player: player(event.player), card: card(event.cardId) })
    case 'trapSet':
      return t('battle.events.trapSet', { player: player(event.player) })
    case 'trapTriggered':
      return t('battle.events.trapTriggered', { player: player(event.player), card: card(event.cardId) })
    case 'attack':
      return t('battle.events.attack', { attacker: ref(event.attacker), target: ref(event.target) })
    case 'miss':
      return t('battle.events.miss', { attacker: ref(event.attacker), target: ref(event.target) })
    case 'damage':
      if (event.status) {
        return t(`battle.events.damage_${event.status === 'burn' ? 'burn' : 'poison'}`, {
          target: ref(event.target),
          amount: event.amount
        })
      }

      return event.absorbed > 0
        ? t('battle.events.damageAbsorbed', {
            target: ref(event.target),
            amount: event.amount,
            absorbed: event.absorbed
          })
        : t('battle.events.damage', { target: ref(event.target), amount: event.amount })
    case 'shieldBlock':
      return t('battle.events.shieldBlock', { target: ref(event.target) })
    case 'heal':
      return t('battle.events.heal', { target: ref(event.target), amount: event.amount })
    case 'buff':
      return t('battle.events.buff', { target: ref(event.target), attack: event.attack, health: event.health })
    case 'stun':
      return t('battle.events.stun', { target: ref(event.target) })
    case 'status':
      return t(`battle.events.status_${event.status}`, { target: ref(event.target), amount: event.amount })
    case 'cleanse':
      return t('battle.events.cleanse', { target: ref(event.target) })
    case 'energy':
      return event.amount > 0
        ? t('battle.events.energyGain', { player: player(event.player), amount: event.amount })
        : t('battle.events.energyLoss', { player: player(event.player), amount: -event.amount })
    case 'move':
      return t('battle.events.move', { player: player(event.player), from: event.from + 1, to: event.to + 1 })
    case 'death':
      return t('battle.events.death', { card: card(event.cardId) })
    case 'returnToHand':
      return t('battle.events.returnToHand', { card: card(event.cardId) })
    case 'heroFell':
      return t('battle.events.heroFell', { player: player(event.player) })
    case 'chronos':
      return t('battle.events.chronos', { player: player(event.player), amount: event.amount })
    case 'fail':
      return t('battle.events.fail', {
        player: player(event.player),
        step: event.step + 1,
        reason: t(`battle.fail.${event.reason}`)
      })
    case 'end':
      return t('battle.events.end')
    default:
      return null
  }
}

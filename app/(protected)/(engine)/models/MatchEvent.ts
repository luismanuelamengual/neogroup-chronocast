import { PlannedAction } from '@/app/(protected)/(engine)/models/PlannedAction'
import { PlayerId } from '@/app/(protected)/(engine)/models/PlayerId'
import { SlotRef } from '@/app/(protected)/(engine)/models/SlotRef'
import { Speed } from '@/app/(protected)/(engine)/models/Speed'

/** Why an action failed when it resolved. */
export type FailReason =
  | 'noCard'
  | 'notEnoughChronos'
  | 'slotsFull'
  | 'noUnit'
  | 'notReady'
  | 'alreadyAttacked'
  | 'noWeapon'
  | 'noAbility'
  | 'abilityUsed'
  | 'sacrificeLimit'
  | 'invalidTarget'
  | 'stunned'
  | 'heroFallen'
  | 'trapsFull'
  | 'cancelled'

/**
 * What happened while a phase started or resolved, in order: the battle screen
 * animates them and the log shows them.
 */
export type MatchEvent =
  | { type: 'phaseStart'; phase: number }
  | { type: 'step'; step: number }
  | { type: 'action'; player: PlayerId; step: number; action: PlannedAction; speed: Speed }
  | { type: 'fail'; player: PlayerId; step: number; reason: FailReason }
  | { type: 'draw'; player: PlayerId; cardUid: number }
  | { type: 'burn'; player: PlayerId; cardId: string }
  | { type: 'fatigue'; player: PlayerId; damage: number }
  | { type: 'sacrifice'; player: PlayerId; cardId: string; capacity: number }
  | { type: 'play'; player: PlayerId; cardId: string }
  | { type: 'summon'; player: PlayerId; cardId: string; uid: number; slot: number }
  | { type: 'attach'; player: PlayerId; cardId: string }
  | { type: 'location'; player: PlayerId; cardId: string }
  | { type: 'trapSet'; player: PlayerId }
  | { type: 'trapTriggered'; player: PlayerId; cardId: string }
  | { type: 'attack'; attacker: SlotRef; target: SlotRef }
  | { type: 'miss'; attacker: SlotRef; target: SlotRef }
  | { type: 'damage'; target: SlotRef; amount: number; absorbed: number }
  | { type: 'shieldBlock'; target: SlotRef }
  | { type: 'heal'; target: SlotRef; amount: number }
  | { type: 'buff'; target: SlotRef; attack: number; health: number }
  | { type: 'stun'; target: SlotRef }
  | { type: 'move'; player: PlayerId; uid: number; from: number; to: number }
  | { type: 'death'; player: PlayerId; cardId: string; slot: number }
  | { type: 'returnToHand'; player: PlayerId; cardId: string }
  | { type: 'heroFell'; player: PlayerId }
  | { type: 'chronos'; player: PlayerId; amount: number }
  | { type: 'end'; winner: PlayerId | null; reason: string }

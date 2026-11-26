import { Element } from '@/app/(protected)/(engine)/models/Element'
import { BoonKind } from '@/app/(protected)/(engine)/models/MatchState'
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
  /** The ally already attacked or used its ability this phase. */
  | 'exhausted'
  | 'sacrificeLimit'
  | 'invalidTarget'
  | 'stunned'
  | 'heroFallen'
  /** The support slots (traps and artifacts) are full. */
  | 'supportFull'
  | 'cancelled'
  | 'notEnoughEnergy'
  /** An attachment keeps the ally from attacking. */
  | 'cantAttack'
  /** An attachment keeps the ally from using its ability. */
  | 'silenced'
  | 'frozen'
  /** There is no card for it to take (in the hand, the deck or the discard pile). */
  | 'noChoice'
  /** There is nothing in play for it to destroy. */
  | 'nothingToDestroy'
  /** Its cost asks to banish more cards than the discard pile has (Consume X). */
  | 'notEnoughDiscard'
  /** An enemy hack switched off this artifact for now. */
  | 'disabled'

/** A card of the hero or of the support slots that can be broken. */
export type GearKind = 'weapon' | 'armor' | 'artifact' | 'trap' | 'attachment'

/** A lasting status effect. */
export type StatusKind = 'poison' | 'burn' | 'freeze' | 'prey'

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
  | { type: 'attach'; player: PlayerId; cardId: string; target?: SlotRef }
  | { type: 'artifact'; player: PlayerId; cardId: string }
  | { type: 'artifactSpent'; player: PlayerId; cardId: string }
  | { type: 'gearDestroyed'; player: PlayerId; cardId: string; kind: GearKind }
  | { type: 'gearWorn'; player: PlayerId; kind: 'weapon' | 'armor'; amount: number }
  | { type: 'gearRepaired'; player: PlayerId; kind: 'weapon' | 'armor'; amount: number }
  | { type: 'location'; player: PlayerId; cardId: string }
  | { type: 'trapSet'; player: PlayerId }
  | { type: 'trapTriggered'; player: PlayerId; cardId: string }
  /** An artifact or a face-down trap of `player` switched off until the end of `untilPhase`. */
  | { type: 'disabled'; player: PlayerId; cardId: string; untilPhase: number }
  /** Cards of `player`'s discard pile banished to pay a Consume cost. */
  | { type: 'consume'; player: PlayerId; count: number }
  /** Artifacts of `player` that gained uses. */
  | { type: 'recharge'; player: PlayerId; cardId: string; amount: number }
  | { type: 'attack'; attacker: SlotRef; target: SlotRef }
  | { type: 'miss'; attacker: SlotRef; target: SlotRef }
  | { type: 'damage'; target: SlotRef; amount: number; absorbed: number; status?: StatusKind; element?: Element }
  | { type: 'status'; target: SlotRef; status: StatusKind; amount: number }
  | { type: 'cleanse'; target: SlotRef }
  | { type: 'energy'; player: PlayerId; amount: number }
  | { type: 'shieldBlock'; target: SlotRef }
  | { type: 'heal'; target: SlotRef; amount: number }
  | { type: 'buff'; target: SlotRef; attack: number; health: number }
  | { type: 'stun'; target: SlotRef }
  | { type: 'move'; player: PlayerId; uid: number; from: number; to: number }
  | { type: 'death'; player: PlayerId; cardId: string; slot: number }
  | { type: 'returnToHand'; player: PlayerId; cardId: string }
  | { type: 'heroFell'; player: PlayerId }
  | { type: 'chronos'; player: PlayerId; amount: number }
  | { type: 'boon'; player: PlayerId; kind: BoonKind; amount: number; untilPhase: number }
  /** A card of the hand discarded by an effect. */
  | { type: 'discard'; player: PlayerId; cardId: string }
  | { type: 'veil'; player: PlayerId; attack: number; untilPhase: number }
  | { type: 'end'; winner: PlayerId | null; reason: string }

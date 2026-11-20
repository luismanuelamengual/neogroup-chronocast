import { ACTIONS_PER_PHASE, ALLY_SLOTS } from '@/app/(protected)/(engine)/data/rules'
import { PlannedAction, Timeline, WAIT } from '@/app/(protected)/(engine)/models/PlannedAction'
import { SlotRef } from '@/app/(protected)/(engine)/models/SlotRef'
import { ApiException } from '@/app/models/ApiException'

type Raw = Record<string, unknown>

function fail(): never {
  throw new ApiException('errors.invalidPlan')
}

function int(value: unknown, min = 0, max = Number.MAX_SAFE_INTEGER): number {
  return Number.isInteger(value) && (value as number) >= min && (value as number) <= max ? (value as number) : fail()
}

function slotRef(value: unknown): SlotRef {
  const ref = (value ?? {}) as Raw

  if (ref.player !== 'a' && ref.player !== 'b') {
    fail()
  }

  return { player: ref.player, slot: ref.slot === 'hero' ? 'hero' : int(ref.slot, 0, ALLY_SLOTS - 1) }
}

function slotRefs(value: unknown): SlotRef[] | undefined {
  if (value == null) {
    return undefined
  }

  return Array.isArray(value) && value.length <= 3 ? value.map(slotRef) : fail()
}

function action(value: unknown): PlannedAction {
  const raw = (value ?? {}) as Raw

  switch (raw.kind) {
    case 'wait':
      return { ...WAIT }
    case 'sacrifice':
      return { kind: 'sacrifice', cardUid: int(raw.cardUid) }
    case 'play':
      return {
        kind: 'play',
        cardUid: int(raw.cardUid),
        ...(raw.slot != null ? { slot: int(raw.slot, 0, ALLY_SLOTS - 1) } : {}),
        ...(raw.targets != null ? { targets: slotRefs(raw.targets) } : {})
      }
    case 'allyAttack':
      return { kind: 'allyAttack', allyUid: int(raw.allyUid), target: slotRef(raw.target) }
    case 'heroAttack':
      return { kind: 'heroAttack', target: slotRef(raw.target) }
    case 'heroAbility':
      return { kind: 'heroAbility', ...(raw.targets != null ? { targets: slotRefs(raw.targets) } : {}) }
    case 'move':
      return { kind: 'move', allyUid: int(raw.allyUid), toSlot: int(raw.toSlot, 0, ALLY_SLOTS - 1) }
    default:
      return fail()
  }
}

/**
 * A timeline sent by a client, rebuilt field by field (anything else is
 * dropped): at most 5 well-formed actions, padded with "wait". Whether each
 * action can really happen is the engine's call when the phase resolves.
 */
export function sanitizeTimeline(value: unknown): Timeline {
  if (!Array.isArray(value) || value.length > ACTIONS_PER_PHASE) {
    fail()
  }

  const timeline = value.map(action)

  while (timeline.length < ACTIONS_PER_PHASE) {
    timeline.push({ ...WAIT })
  }

  return timeline
}

/**
 * What a card (or a hero ability) asks the player to choose when it is
 * programmed:
 *   - enemySlot:       any slot of the rival, hero included (an empty one misses)
 *   - enemyAlly:       a slot of the rival with an ally (fails if it is empty when it resolves)
 *   - friendlyAlly:    one of your allies
 *   - friendlySlot:    any of your slots, hero included
 *   - enemyGear:       the weapon or the armor of the rival's hero (the target's `attached`)
 *   - enemyAttachment: a card attached on the rival's side: its hero's weapon or armor, or a
 *                      card attached to one of its allies (the target's `attached`)
 */
export type TargetKind = 'enemySlot' | 'enemyAlly' | 'friendlyAlly' | 'friendlySlot' | 'enemyGear' | 'enemyAttachment'

/** The target kinds that aim at a card attached to a hero or an ally (the target carries its `attached` uid). */
export const ATTACHED_TARGETS: readonly TargetKind[] = ['enemyGear', 'enemyAttachment']

export function aimsAtAttached(kind: TargetKind): boolean {
  return ATTACHED_TARGETS.includes(kind)
}

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
 *   - enemyArtifact:   a card of the rival's support slots: an artifact or a face-down trap
 *                      (the target is its hero, with the card's uid in `attached`)
 *   - friendlyArtifact: one of your artifacts (the target is your hero, with its uid in `attached`)
 */
export type TargetKind =
  | 'enemySlot'
  | 'enemyAlly'
  | 'friendlyAlly'
  | 'friendlySlot'
  | 'enemyGear'
  | 'enemyAttachment'
  | 'enemyArtifact'
  | 'friendlyArtifact'

/**
 * The target kinds that aim at a card attached to a hero or an ally, or at a support card (the target carries
 * its `attached` uid).
 */
export const ATTACHED_TARGETS: readonly TargetKind[] = [
  'enemyGear',
  'enemyAttachment',
  'enemyArtifact',
  'friendlyArtifact'
]

/** The target kinds that aim at a card of the support slots (an artifact, or a face-down trap of the rival). */
export const SUPPORT_TARGETS: readonly TargetKind[] = ['enemyArtifact', 'friendlyArtifact']

export function aimsAtAttached(kind: TargetKind): boolean {
  return ATTACHED_TARGETS.includes(kind)
}

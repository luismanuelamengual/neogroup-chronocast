/**
 * What a card (or a hero ability) asks the player to choose when it is
 * programmed:
 *   - enemySlot:    any slot of the rival, hero included (an empty one misses)
 *   - enemyAlly:    a slot of the rival with an ally (fails if it is empty when it resolves)
 *   - friendlyAlly: one of your allies
 *   - friendlySlot: any of your slots, hero included
 */
export type TargetKind = 'enemySlot' | 'enemyAlly' | 'friendlyAlly' | 'friendlySlot'

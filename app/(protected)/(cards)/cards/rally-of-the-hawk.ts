import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { buffAt, slotsNextTo, unitAt } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'rally-of-the-hawk',
  type: 'ability',
  subtype: 'tactic',
  name: 'Rally of the Hawk',
  text: 'An ally of yours gains +2 attack and +2 health for each ally of yours next to it. Instant.',
  flavor: 'The hawk circles. The hunters gather.',
  faction: 'bronze',
  restriction: { factions: ['bronze'] },
  rarity: 'common',
  price: 55,
  cost: 3,
  speed: 'instant',
  targets: ['friendlyAlly'],
  onPlay(ctx) {
    const count = slotsNextTo(ctx, ctx.targets[0]).filter((ref) => unitAt(ctx, ref)).length

    buffAt(ctx, ctx.targets[0], 2 * count, 2 * count)
  },
  ai: { value: 3, tags: ['buff'] },
  art: {
    subject:
      'Rally of the Hawk: a tattered war banner planted in the ground, glowing with rallying light, in a misty valley, diagonal dynamic composition, crimson accents, hunter style'
  }
})

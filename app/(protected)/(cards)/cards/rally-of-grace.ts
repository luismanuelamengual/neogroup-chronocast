import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { buffAt, slotsNextTo } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'rally-of-grace',
  type: 'ability',
  subtype: 'tactic',
  name: 'Rally of Grace',
  text: 'The allies next to an ally of yours gain +1 attack and +3 health.',
  flavor: 'Gather in the light.',
  faction: 'bronze',
  restriction: { factions: ['bronze'] },
  rarity: 'uncommon',
  price: 160,
  cost: 3,
  targets: ['friendlyAlly'],
  onPlay(ctx) {
    for (const ref of slotsNextTo(ctx, ctx.targets[0])) {
      buffAt(ctx, ref, 1, 3)
    }
  },
  ai: { value: 3, tags: ['buff'] },
  art: {
    subject:
      'Rally of Grace: a tattered war banner planted in the ground, glowing with rallying light, in a sunlit meadow, bursting toward the viewer, teal accents, mystic healer style'
  }
})

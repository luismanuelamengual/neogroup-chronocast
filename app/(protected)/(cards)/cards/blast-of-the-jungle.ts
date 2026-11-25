import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damage, tribeAllies } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'blast-of-the-jungle',
  type: 'ability',
  name: 'Blast of the Jungle',
  text: 'Deal 10 earth damage to an enemy slot, +2 for each Beast of yours.',
  faction: 'primal',
  restriction: { factions: ['primal'] },
  rarity: 'common',
  element: 'earth',
  price: 70,
  cost: 5,
  targets: ['enemySlot'],
  onPlay(ctx) {
    damage(ctx, ctx.targets[0], 10 + 2 * tribeAllies(ctx, ctx.owner, 'beast').length)
  },
  ai: { value: 5, tags: ['removal', 'tribe'] },
  art: {
    subject:
      'Blast of the Jungle: a violent explosion of energy, bursting with jagged rocks and dust, in a sunlit meadow, bursting toward the viewer, turquoise accents, prehistoric jungle era style'
  }
})

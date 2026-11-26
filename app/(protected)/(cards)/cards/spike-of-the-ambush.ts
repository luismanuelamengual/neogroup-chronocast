import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damage, tribeAllies } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'spike-of-the-ambush',
  type: 'ability',
  name: 'Spike of the Ambush',
  text: 'Deal 3 damage to an enemy slot, +2 for each Netrunner of yours.',
  faction: 'neutral',
  restriction: { sides: ['eclipse'] },
  rarity: 'rare',
  price: 360,
  cost: 2,
  targets: ['enemySlot'],
  onPlay(ctx) {
    damage(ctx, ctx.targets[0], 3 + 2 * tribeAllies(ctx, ctx.owner, 'netrunner').length)
  },
  ai: { value: 3, tags: ['removal', 'tribe'] },
  art: {
    subject:
      'Spike of the Ambush: a giant jagged spike bursting up from cracked ground, over a desert of red dunes, diagonal dynamic composition, tangerine accents, hunter style'
  }
})

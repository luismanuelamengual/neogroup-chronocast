import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damage, tribeAllies } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'spike-of-the-ambush',
  type: 'ability',
  name: 'Spike of the Ambush',
  text: 'Deal 3 damage to an enemy slot, +2 for each Netrunner of yours.',
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'hunter' },
  rarity: 'rare',
  price: 510,
  cost: 2,
  targets: ['enemySlot'],
  onPlay(ctx) {
    damage(ctx, ctx.targets[0], 3 + 2 * tribeAllies(ctx, ctx.owner, 'netrunner').length)
  },
  ai: { value: 3, tags: ['removal', 'tribe'] },
  art: {
    subject: 'Spike of the Ambush: a crackling bolt of energy striking a lone target, hunter style'
  }
})

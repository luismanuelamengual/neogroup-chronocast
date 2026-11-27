import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { buff, damage, tribeAllies } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'net-of-the-pack',
  type: 'trap',
  name: 'Net of the Pack',
  text: 'When an enemy ally is summoned: deal 6 damage to it and your Beasts gain +1 attack.',
  flavor: 'The pack drives, the net catches.',
  faction: 'primal',
  restriction: { factions: ['primal'] },
  rarity: 'common',
  price: 65,
  cost: 4,
  speed: 'instant',
  trigger: 'enemySummon',
  onTrigger(ctx, event) {
    if (event.unit) {
      damage(ctx, event.unit, 6)
    }

    for (const unit of tribeAllies(ctx, ctx.owner, 'beast')) {
      buff(ctx, unit, 1, 0)
    }
  },
  ai: { value: 4, tags: ['trap'] },
  art: {
    subject:
      'Net of the Pack: a weighted rope net hidden under leaves, about to spring, swirling around the center, ivory accents, hunter style'
  }
})

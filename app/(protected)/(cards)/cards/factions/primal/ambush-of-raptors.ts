import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damage, summonCard } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'ambush-of-raptors',
  type: 'trap',
  name: 'Raptor Ambush',
  text: 'When an enemy ally is summoned: deal 10 damage to it and summon a Raptor Pack.',
  flavor: 'Clever girls.',
  faction: 'primal',
  restriction: { kind: 'faction', faction: 'primal' },
  rarity: 'uncommon',
  price: 170,
  cost: 3,
  trigger: 'enemySummon',
  onTrigger(ctx, event) {
    if (event.unit) {
      damage(ctx, event.unit, 10)
    }

    summonCard(ctx, ctx.owner, 'raptor-pack')
  },
  ai: { value: 3, tags: ['trap', 'removal', 'summon'] },
  art: {
    subject: 'raptors leaping out of the bushes to ambush a surprised creature in the jungle'
  }
})

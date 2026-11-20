import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damage, damageAllAllies } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'meteor',
  type: 'ability',
  name: 'Meteor',
  text: 'Deal 26 damage to an enemy slot and deal 4 damage to every enemy ally. Slow.',
  flavor: 'Look up. Then run.',
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'mage' },
  rarity: 'rare',
  price: 675,
  cost: 6,
  speed: 'slow',
  targets: ['enemySlot'],
  onPlay(ctx) {
    damage(ctx, ctx.targets[0], 26)
    damageAllAllies(ctx, ctx.opponent, 4)
  },
  ai: { value: 7, tags: ['removal'] },
  art: {
    subject: 'a huge flaming meteor crashing down from a starry sky onto the battlefield'
  }
})

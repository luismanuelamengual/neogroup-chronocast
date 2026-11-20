import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damage, stunAt } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'ice-lance',
  type: 'ability',
  name: 'Ice Lance',
  text: 'Deal 8 damage to an enemy ally and stun it.',
  flavor: 'Cold, sharp and to the point.',
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'mage' },
  rarity: 'common',
  price: 50,
  cost: 2,
  targets: ['enemyAlly'],
  onPlay(ctx) {
    damage(ctx, ctx.targets[0], 8)
    stunAt(ctx, ctx.targets[0])
  },
  ai: { value: 2, tags: ['removal', 'control'] },
  art: {
    subject: 'a long jagged lance of ice flying through the air, frost trailing behind it'
  }
})

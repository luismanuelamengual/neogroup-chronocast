import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damage, stunAt } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'steam-blast',
  type: 'ability',
  name: 'Steam Blast',
  text: 'Deal 10 damage to an enemy ally and stun it.',
  flavor: 'Hot enough to cook a knight in his armor.',
  faction: 'clockwork',
  restriction: { kind: 'faction', faction: 'clockwork' },
  rarity: 'common',
  price: 50,
  cost: 2,
  targets: ['enemyAlly'],
  onPlay(ctx) {
    damage(ctx, ctx.targets[0], 10)
    stunAt(ctx, ctx.targets[0])
  },
  ai: { value: 2, tags: ['removal', 'control'] },
  art: {
    subject: 'a powerful blast of scalding steam bursting from a pipe and hitting a creature'
  }
})

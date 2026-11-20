import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damage, gainArmor } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'lightning-dash',
  type: 'ability',
  name: 'Lightning Dash',
  text: 'Deal 8 damage to an enemy ally and your hero gains 4 armor. Instant.',
  flavor: 'You blinked. She is already behind you.',
  faction: 'neon',
  restriction: { kind: 'hero', heroId: 'ryn-voltblade' },
  rarity: 'common',
  price: 50,
  cost: 2,
  speed: 'instant',
  targets: ['enemyAlly'],
  onPlay(ctx) {
    damage(ctx, ctx.targets[0], 8)
    gainArmor(ctx, ctx.owner, 4)
  },
  ai: { value: 2, tags: ['removal', 'defense'] },
  art: {
    subject: 'Ryn dashing through an enemy leaving a blue lightning trail'
  }
})

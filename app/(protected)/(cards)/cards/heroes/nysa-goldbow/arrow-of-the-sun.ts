import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damage, draw } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'arrow-of-the-sun',
  type: 'ability',
  name: 'Arrow of the Sun',
  text: 'Deal 8 damage to an enemy ally and draw a card. Fast.',
  flavor: 'Fired at dawn, it lands at noon.',
  faction: 'bronze',
  restriction: { kind: 'hero', heroId: 'nysa-goldbow' },
  rarity: 'common',
  price: 50,
  cost: 2,
  speed: 'fast',
  targets: ['enemyAlly'],
  onPlay(ctx) {
    damage(ctx, ctx.targets[0], 8)
    draw(ctx, ctx.owner, 1)
  },
  ai: { value: 2, tags: ['removal', 'draw'] },
  art: {
    subject: 'a golden arrow trailing sunlight flying toward a monster over a Greek valley'
  }
})

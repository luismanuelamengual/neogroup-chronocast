import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damage, draw } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'falling-star',
  type: 'ability',
  name: 'Falling Star',
  text: 'Deal 10 damage to an enemy slot and draw a card.',
  flavor: 'Make a wish. Then duck.',
  faction: 'arcane',
  restriction: { kind: 'hero', heroId: 'ilyra-starweaver' },
  rarity: 'common',
  price: 50,
  cost: 2,
  targets: ['enemySlot'],
  onPlay(ctx) {
    damage(ctx, ctx.targets[0], 10)
    draw(ctx, ctx.owner, 1)
  },
  ai: { value: 2, tags: ['removal', 'draw'] },
  art: {
    subject: 'a small glowing star falling from the night sky straight at a monster, Ilyra pointing at it'
  }
})

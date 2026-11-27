import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { draw, healHero } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'wandering-gust',
  type: 'ally',
  name: 'Wandering Gust',
  text: 'When it enters: your hero heals 5. When it dies: draw a card.',
  faction: 'neutral',
  restriction: { sides: ['dawn'] },
  rarity: 'legendary',
  element: 'wind',
  resist: ['wind'],
  weak: ['ice'],
  price: 2160,
  cost: 3,
  tribe: 'elemental',
  keywords: ['ranged', 'unique'],
  attack: 3,
  health: 11,
  onEnter(ctx) {
    healHero(ctx, 5)
  },
  onDeath(ctx) {
    draw(ctx, ctx.owner, 1)
  },
  ai: { value: 5, tags: ['draw', 'heal'] },
  art: {
    subject:
      'Wandering Gust: an elemental gust with a crouching wolf shape made of mossy green and grey stone, prowling low, time rift wanderer style'
  }
})

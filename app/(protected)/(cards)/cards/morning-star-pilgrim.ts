import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { draw, healHero } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'morning-star-pilgrim',
  type: 'ally',
  name: 'Morning Star Pilgrim',
  text: 'When it dies: your hero heals 6 and you draw a card.',
  faction: 'neutral',
  restriction: { sides: ['dawn'] },
  rarity: 'uncommon',
  price: 150,
  cost: 3,
  tribe: 'drifter',
  attack: 4,
  health: 6,
  onDeath(ctx) {
    healHero(ctx, 6)
    draw(ctx, ctx.owner, 1)
  },
  ai: { value: 3 },
  art: {
    subject:
      'Morning Star Pilgrim: a weary pilgrim with a star-shaped lantern on a long staff walking a dawn road, mystic healer style'
  }
})

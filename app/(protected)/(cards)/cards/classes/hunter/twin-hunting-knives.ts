import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { draw } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'twin-hunting-knives',
  type: 'weapon',
  name: 'Twin Hunting Knives',
  text: 'On play: draw a card.',
  flavor: 'One to skin, one to win.',
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'hunter' },
  rarity: 'epic',
  price: 1700,
  cost: 3,
  attack: 10,
  durability: 4,
  keywords: ['lifesteal'],
  onPlay(ctx) {
    draw(ctx, ctx.owner, 1)
  },
  ai: { value: 4, tags: ['draw'] },
  art: {
    subject: 'two curved hunting knives crossed over a wolf pelt'
  }
})

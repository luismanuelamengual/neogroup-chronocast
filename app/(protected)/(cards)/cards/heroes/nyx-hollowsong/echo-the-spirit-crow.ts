import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { reviveFromDiscard } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'echo-the-spirit-crow',
  type: 'ally',
  name: 'Echo, the Spirit Crow',
  text: 'When it dies: a random ally of your discard pile returns to play.',
  flavor: 'It has died nine times. It always comes back with someone.',
  faction: 'void',
  restriction: { kind: 'hero', heroId: 'nyx-hollowsong' },
  rarity: 'legendary',
  price: 4750,
  cost: 3,
  attack: 10,
  health: 18,
  keywords: ['flying', 'echo', 'unique'],
  onDeath(ctx) {
    reviveFromDiscard(ctx, ctx.owner)
  },
  ai: { value: 5, tags: ['revive'] },
  art: {
    subject: "a ghostly translucent crow with green glowing eyes perched on Nyx's shoulder"
  }
})

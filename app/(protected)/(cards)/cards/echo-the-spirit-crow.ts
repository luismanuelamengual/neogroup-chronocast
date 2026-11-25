import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { reviveFromDiscard } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'echo-the-spirit-crow',
  type: 'ally',
  reward: true,
  name: 'Echo, the Spirit Crow',
  text: 'When it dies: a random ally of your discard pile returns to play.',
  faction: 'void',
  restriction: { heroes: ['nyx-hollowsong'] },
  rarity: 'legendary',
  resist: ['shadow', 'ice'],
  cost: 3,
  tribe: 'undead',
  keywords: ['flying', 'echo', 'unique'],
  attack: 4,
  health: 5,
  onDeath(ctx) {
    reviveFromDiscard(ctx, ctx.owner)
  },
  ai: { value: 5, tags: ['revive'] },
  art: {
    subject: 'a ghostly translucent crow with green glowing eyes perched on a gravestone'
  }
})

import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { discardSize, poison } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'keen-eyed-blight',
  type: 'ability',
  subtype: 'ritual',
  name: 'Keen-Eyed Blight',
  text: 'Poison an enemy ally (1) for every 2 cards in your discard pile (up to 5).',
  flavor: 'Rot finds the weak spot first.',
  faction: 'void',
  restriction: { factions: ['void'] },
  rarity: 'uncommon',
  price: 140,
  cost: 2,
  targets: ['enemyAlly'],
  onPlay(ctx) {
    poison(ctx, ctx.targets[0], Math.min(5, Math.floor(discardSize(ctx, ctx.owner) / 2)))
  },
  ai: { value: 2, tags: ['removal'] },
  art: {
    subject:
      'Keen-Eyed Blight: withered black thorns spreading over dead leaves, in a misty valley, bursting toward the viewer, crimson accents, hunter style'
  }
})

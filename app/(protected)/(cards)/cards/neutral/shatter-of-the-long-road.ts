import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { wearArmor, wearWeapon } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'shatter-of-the-long-road',
  type: 'ability',
  name: 'Shatter of the Long Road',
  text: 'The enemy weapon loses 2 durability and the enemy hero loses 6 armor. Fast.',
  faction: 'neutral',
  restriction: { kind: 'any' },
  rarity: 'uncommon',
  price: 155,
  cost: 2,
  speed: 'fast',
  onPlay(ctx) {
    wearWeapon(ctx, ctx.opponent, 2)
    wearArmor(ctx, ctx.opponent, 6)
  },
  ai: { value: 2, tags: ['antiGear'] },
  art: {
    subject:
      'Shatter of the Long Road: a crystal exploding into hundreds of shards, over burning grassland, diagonal dynamic composition, saffron yellow accents, time rift wanderer style'
  }
})

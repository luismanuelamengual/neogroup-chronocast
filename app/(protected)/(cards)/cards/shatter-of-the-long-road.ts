import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { wearArmor, wearWeapon } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'shatter-of-the-long-road',
  type: 'ability',
  name: 'Shatter of the Long Road',
  text: 'The enemy weapon and armor lose 2 durability each. Fast.',
  faction: 'neutral',
  restriction: {},
  rarity: 'uncommon',
  price: 140,
  cost: 2,
  speed: 'fast',
  onPlay(ctx) {
    wearWeapon(ctx, ctx.opponent, 2)
    wearArmor(ctx, ctx.opponent, 2)
  },
  ai: { value: 2, tags: ['antiGear'] },
  art: {
    subject:
      'Shatter of the Long Road: a crystal exploding into hundreds of shards, over burning grassland, diagonal dynamic composition, saffron yellow accents, time rift wanderer style'
  }
})

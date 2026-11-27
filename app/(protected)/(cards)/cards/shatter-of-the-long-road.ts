import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { destroyArmor, wearArmor } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'shatter-of-the-long-road',
  type: 'ability',
  subtype: 'gadget',
  name: 'Shatter of the Long Road',
  text: 'If the enemy armor has 2 durability or less, destroy it; otherwise it loses 2. Fast.',
  faction: 'clockwork',
  restriction: { factions: ['clockwork'] },
  rarity: 'uncommon',
  price: 140,
  cost: 2,
  speed: 'fast',
  onPlay(ctx) {
    const armor = ctx.engine.player(ctx.opponent).hero.armor

    if (armor && armor.durability <= 2) {
      destroyArmor(ctx, ctx.opponent)
    } else {
      wearArmor(ctx, ctx.opponent, 2)
    }
  },
  ai: { value: 2, tags: ['antiGear'] },
  art: {
    subject:
      'Shatter of the Long Road: a crystal exploding into hundreds of shards, over burning grassland, diagonal dynamic composition, saffron yellow accents, steampunk steam era style'
  }
})

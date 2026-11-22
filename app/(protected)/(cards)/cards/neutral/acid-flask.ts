import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { wearArmor, wearWeapon } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'acid-flask',
  type: 'item',
  name: 'Acid Flask',
  text: 'The enemy weapon loses 1 durability and the enemy hero loses 4 armor. Fast.',
  flavor: 'It eats metal for breakfast.',
  faction: 'neutral',
  restriction: { kind: 'any' },
  rarity: 'common',
  price: 50,
  cost: 1,
  speed: 'fast',
  onPlay(ctx) {
    wearWeapon(ctx, ctx.opponent, 1)
    wearArmor(ctx, ctx.opponent, 4)
  },
  ai: { value: 2, tags: ['antiGear'] },
  art: {
    subject: 'a cracked glass flask of bubbling green acid splashing onto a shiny breastplate, metal melting'
  }
})

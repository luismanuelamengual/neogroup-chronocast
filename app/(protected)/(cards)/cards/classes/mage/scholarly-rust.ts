import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { wearArmor, wearWeapon } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'scholarly-rust',
  type: 'ability',
  name: 'Scholarly Rust',
  text: 'The enemy weapon loses 2 durability and the enemy hero loses 6 armor. Fast.',
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'mage' },
  rarity: 'epic',
  price: 1560,
  cost: 2,
  speed: 'fast',
  onPlay(ctx) {
    wearWeapon(ctx, ctx.opponent, 2)
    wearArmor(ctx, ctx.opponent, 6)
  },
  ai: { value: 3, tags: ['antiGear'] },
  art: {
    subject: 'Scholarly Rust: a sword and shield cracking and rusting apart, mage style'
  }
})

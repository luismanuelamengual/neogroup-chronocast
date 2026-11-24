import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { wearArmor, wearWeapon } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'bold-rust',
  type: 'ability',
  name: 'Bold Rust',
  text: 'The enemy weapon and armor lose 1 durability each. Fast.',
  faction: 'neutral',
  restriction: { kind: 'any' },
  rarity: 'uncommon',
  price: 140,
  cost: 1,
  speed: 'fast',
  onPlay(ctx) {
    wearWeapon(ctx, ctx.opponent, 1)
    wearArmor(ctx, ctx.opponent, 1)
  },
  ai: { value: 1, tags: ['antiGear'] },
  art: {
    subject:
      'Bold Rust: a weapon blade crumbling into flakes of orange rust, in a ruined temple, seen from above, saffron yellow accents, time rift wanderer style'
  }
})

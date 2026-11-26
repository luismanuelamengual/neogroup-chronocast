import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { wearArmor, wearWeapon } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'scholarly-rust',
  type: 'ability',
  name: 'Scholarly Rust',
  text: 'The enemy weapon and armor lose 2 durability each. Fast.',
  faction: 'neutral',
  restriction: { classes: ['mage'] },
  rarity: 'epic',
  price: 1000,
  cost: 2,
  speed: 'fast',
  onPlay(ctx) {
    wearWeapon(ctx, ctx.opponent, 2)
    wearArmor(ctx, ctx.opponent, 2)
  },
  ai: { value: 3, tags: ['antiGear'] },
  art: {
    subject:
      'Scholarly Rust: a weapon blade crumbling into flakes of orange rust, above a calm lake at dusk, close-up filling the frame, crimson accents, mage style'
  }
})

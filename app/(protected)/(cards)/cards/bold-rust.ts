import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damage, wearArmor, wearWeapon } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'bold-rust',
  type: 'ability',
  subtype: 'gadget',
  name: 'Bold Rust',
  text: 'The enemy weapon and armor lose 2 durability each. Your hero takes 3 shadow damage. Fast.',
  faction: 'neutral',
  restriction: { sides: ['eclipse'] },
  rarity: 'uncommon',
  price: 120,
  cost: 1,
  speed: 'fast',
  onPlay(ctx) {
    wearWeapon(ctx, ctx.opponent, 2)
    wearArmor(ctx, ctx.opponent, 2)
    damage(ctx, { player: ctx.owner, slot: 'hero' }, 3, 'shadow')
  },
  ai: { value: 1, tags: ['antiGear'] },
  art: {
    subject:
      'Bold Rust: a weapon blade crumbling into flakes of orange rust, in a ruined temple, seen from above, saffron yellow accents, time rift wanderer style'
  }
})

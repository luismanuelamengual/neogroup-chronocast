import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { wearArmor, wearWeapon } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'corrosion-totem',
  type: 'artifact',
  name: 'Corrosion Totem',
  text: 'Artifact. At the start of each phase, the enemy weapon loses 1 durability and the enemy hero loses 3 armor.',
  flavor: 'Everything it touches grows old.',
  faction: 'void',
  restriction: { kind: 'faction', faction: 'void' },
  rarity: 'uncommon',
  price: 160,
  cost: 2,
  onPhaseStart(ctx) {
    wearWeapon(ctx, ctx.opponent, 1)
    wearArmor(ctx, ctx.opponent, 3)
  },
  ai: { value: 3, tags: ['antiGear'] },
  art: {
    subject: 'a cracked obsidian totem leaking purple mist that makes nearby swords and armor rust and crumble'
  }
})

import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { wearArmor, wearWeapon } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'bone-crusher',
  type: 'ally',
  name: 'Bone Crusher',
  text: 'When it attacks the enemy hero, the enemy weapon loses 1 durability and the hero loses 4 armor.',
  flavor: 'Armor is just a shell. Shells crack.',
  faction: 'primal',
  restriction: { kind: 'faction', faction: 'primal' },
  rarity: 'uncommon',
  price: 175,
  cost: 4,
  attack: 8,
  health: 12,
  onAttack(ctx, target) {
    if (target.slot === 'hero') {
      wearWeapon(ctx, ctx.opponent, 1)
      wearArmor(ctx, ctx.opponent, 4)
    }
  },
  ai: { value: 3, tags: ['antiGear'] },
  art: {
    subject: 'a massive ankylosaurus swinging its club tail into a shield wall, shields shattering'
  }
})

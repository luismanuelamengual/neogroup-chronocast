import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damage, wearWeapon } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'disarming-strike',
  type: 'ability',
  name: 'Disarming Strike',
  text: 'Deal 3 damage to the enemy hero. Its weapon loses 2 durability.',
  flavor: 'A legionary aims for the hand that holds the sword.',
  faction: 'bronze',
  restriction: { kind: 'faction', faction: 'bronze' },
  rarity: 'common',
  price: 55,
  cost: 1,
  onPlay(ctx) {
    damage(ctx, { player: ctx.opponent, slot: 'hero' }, 3)
    wearWeapon(ctx, ctx.opponent, 2)
  },
  ai: { value: 2, tags: ['antiGear'] },
  art: {
    subject: 'a roman legionary striking the sword out of the hand of an enemy with a quick gladius blow'
  }
})

import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { wearArmor, wearWeapon } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'patient-sabotage',
  type: 'ability',
  name: 'Patient Sabotage',
  text: 'The enemy weapon loses 2 durability and the enemy hero loses 6 armor. Fast.',
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'hunter' },
  rarity: 'common',
  price: 50,
  cost: 2,
  speed: 'fast',
  onPlay(ctx) {
    wearWeapon(ctx, ctx.opponent, 2)
    wearArmor(ctx, ctx.opponent, 6)
  },
  ai: { value: 2, tags: ['antiGear'] },
  art: {
    subject:
      'Patient Sabotage: a sword and a shield cracking and rusting apart, in a misty valley, bursting toward the viewer, turquoise accents, hunter style'
  }
})

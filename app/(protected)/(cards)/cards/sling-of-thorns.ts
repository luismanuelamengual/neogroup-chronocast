import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damage, slotsNextTo } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'sling-of-thorns',
  type: 'weapon',
  subtype: 'sling',
  name: 'Sling of Thorns',
  text: 'When your hero attacks with it: deal 2 damage to the allies next to the target.',
  flavor: 'Every stone grows teeth.',
  faction: 'primal',
  restriction: { factions: ['primal'], sides: ['eclipse'] },
  rarity: 'rare',
  price: 480,
  cost: 4,
  keywords: ['ranged'],
  attack: 4,
  durability: 4,
  onAttack(ctx, target) {
    if (target.slot !== 'hero') {
      for (const ref of slotsNextTo(ctx, target)) {
        damage(ctx, ref, 2)
      }
    }
  },
  ai: { value: 5 },
  art: {
    subject:
      'Sling of Thorns: a single sling made of gilded marble, resting on a velvet cloth, framed by drifting embers, teal accents, hunter style'
  }
})

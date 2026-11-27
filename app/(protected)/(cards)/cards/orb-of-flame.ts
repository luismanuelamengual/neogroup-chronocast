import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { burn } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'orb-of-flame',
  type: 'weapon',
  subtype: 'orb',
  name: 'Orb of Flame',
  text: 'When your hero attacks with it: burn the target (2).',
  flavor: 'A small sun that obeys.',
  faction: 'arcane',
  restriction: { factions: ['arcane'], sides: ['eclipse'] },
  rarity: 'uncommon',
  element: 'fire',
  price: 160,
  cost: 3,
  keywords: ['ranged'],
  attack: 3,
  durability: 3,
  onAttack(ctx, target) {
    burn(ctx, target, 2)
  },
  ai: { value: 3 },
  art: {
    subject:
      'Orb of Flame: a single orb made of polished bronze with engraved spirals, wreathed in roaring flames, resting on a velvet cloth, bursting toward the viewer, teal accents, mage style'
  }
})

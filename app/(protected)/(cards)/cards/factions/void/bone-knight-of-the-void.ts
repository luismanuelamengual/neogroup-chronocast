import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'

export default defineCard({
  id: 'bone-knight-of-the-void',
  type: 'ally',
  name: 'Bone Knight of the Void',
  text: '',
  faction: 'void',
  restriction: { kind: 'faction', faction: 'void' },
  rarity: 'common',
  element: 'shadow',
  resist: ['shadow', 'ice'],
  price: 50,
  cost: 2,
  tribe: 'undead',
  attack: 2,
  health: 9,
  ai: { value: 2 },
  art: {
    subject:
      'Bone Knight of the Void: a knight with mummified bandages and rusted chains, baring its teeth, gold accents, dark end-of-time void style'
  }
})

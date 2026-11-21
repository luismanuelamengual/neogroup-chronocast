import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'

export default defineCard({
  id: 'dread-knight',
  type: 'ally',
  name: 'Dread Knight',
  text: '',
  flavor: 'His oath outlived his kingdom, his body and his name.',
  faction: 'void',
  restriction: { kind: 'faction', faction: 'void' },
  rarity: 'common',
  price: 65,
  cost: 5,
  attack: 20,
  health: 18,
  ai: { value: 5 },
  art: {
    subject: 'an undead knight in black cracked armor with green fire in his visor riding through floating ruins'
  }
})

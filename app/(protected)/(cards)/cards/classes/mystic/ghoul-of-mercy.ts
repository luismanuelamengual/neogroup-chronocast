import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'

export default defineCard({
  id: 'ghoul-of-mercy',
  type: 'ally',
  name: 'Ghoul of Mercy',
  text: '',
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'mystic' },
  rarity: 'common',
  resist: ['shadow', 'ice'],
  price: 80,
  cost: 6,
  tribe: 'undead',
  attack: 9,
  health: 12,
  ai: { value: 6 },
  art: {
    subject: 'an undead creature, the ghoul of mercy, crouching, ready to strike, mystic healer style'
  }
})

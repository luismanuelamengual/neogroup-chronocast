import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'

export default defineCard({
  id: 'gentle-bard',
  type: 'ally',
  name: 'Gentle Bard',
  text: '',
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'mystic' },
  rarity: 'common',
  price: 55,
  cost: 3,
  attack: 5,
  health: 8,
  ai: { value: 3 },
  art: {
    subject: 'a time-traveling adventurer, the gentle bard, glaring at the viewer, mystic healer style'
  }
})

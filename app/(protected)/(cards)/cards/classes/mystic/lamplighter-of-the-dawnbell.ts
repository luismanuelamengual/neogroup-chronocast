import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'

export default defineCard({
  id: 'lamplighter-of-the-dawnbell',
  type: 'ally',
  name: 'Lamplighter of the Dawnbell',
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
    subject: 'a time-traveling adventurer, the lamplighter of the dawnbell, standing guard, mystic healer style'
  }
})

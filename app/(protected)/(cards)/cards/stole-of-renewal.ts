import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'

export default defineCard({
  id: 'stole-of-renewal',
  type: 'armor',
  subtype: 'robe',
  name: 'Stole of Renewal',
  text: '',
  flavor: 'Each wound it touches forgets itself.',
  faction: 'arcane',
  restriction: { factions: ['arcane'], sides: ['dawn'] },
  rarity: 'rare',
  price: 480,
  cost: 4,
  armor: 3,
  durability: 4,
  ai: { value: 5 },
  art: {
    subject:
      'Stole of Renewal: a single stole made of pale ash wood wrapped in red cloth, resting on a velvet cloth, seen from above, lime green accents, mystic healer style'
  }
})

import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'

export default defineCard({
  id: 'lantern-staff-of-renewal',
  type: 'weapon',
  name: 'Lantern Staff of Renewal',
  text: '',
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'mystic' },
  rarity: 'uncommon',
  price: 140,
  cost: 1,
  keywords: ['lifesteal'],
  attack: 1,
  durability: 2,
  ai: { value: 1 },
  art: {
    subject: 'Lantern Staff of Renewal: a single lantern staff weapon floating in dramatic light, mystic healer style'
  }
})

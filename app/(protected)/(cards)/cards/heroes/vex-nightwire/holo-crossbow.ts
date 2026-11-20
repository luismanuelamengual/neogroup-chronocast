import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'

export default defineCard({
  id: 'holo-crossbow',
  type: 'weapon',
  name: 'Holo Crossbow',
  text: '',
  flavor: 'The bolts are light. The holes are real.',
  faction: 'neon',
  restriction: { kind: 'hero', heroId: 'vex-nightwire' },
  rarity: 'uncommon',
  price: 160,
  cost: 2,
  attack: 6,
  durability: 4,
  keywords: ['ranged'],
  ai: { value: 2 },
  art: {
    subject: 'a sleek futuristic crossbow firing bolts of neon green light'
  }
})

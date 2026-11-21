import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'

export default defineCard({
  id: 'blade-dancer',
  type: 'ally',
  name: 'Blade Dancer',
  text: '',
  flavor: 'Her dance has no audience left.',
  faction: 'neutral',
  restriction: { kind: 'any' },
  rarity: 'rare',
  price: 560,
  cost: 3,
  attack: 10,
  health: 8,
  keywords: ['cleave', 'quick'],
  ai: { value: 4, tags: ['aggro'] },
  art: {
    subject: 'a graceful dancer spinning with two curved blades, ribbons and sparks swirling around her'
  }
})

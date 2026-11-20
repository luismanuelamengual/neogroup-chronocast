import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'

export default defineCard({
  id: 'rift-dragonling',
  type: 'ally',
  name: 'Rift Dragonling',
  text: '',
  flavor: 'Small wings, big temper.',
  faction: 'neutral',
  restriction: { kind: 'any' },
  rarity: 'rare',
  price: 600,
  cost: 4,
  attack: 16,
  health: 22,
  keywords: ['flying', 'quick'],
  ai: { value: 5, tags: ['aggro'] },
  art: {
    subject: 'a small turquoise dragon with clock-gear scales breathing a puff of glowing fire'
  }
})

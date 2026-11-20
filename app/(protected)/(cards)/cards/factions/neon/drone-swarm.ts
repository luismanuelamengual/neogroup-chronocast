import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'

export default defineCard({
  id: 'drone-swarm',
  type: 'ally',
  name: 'Drone Swarm',
  text: '',
  flavor: 'One is a toy. A thousand is a weather system.',
  faction: 'neon',
  restriction: { kind: 'faction', faction: 'neon' },
  rarity: 'uncommon',
  price: 190,
  cost: 5,
  attack: 16,
  health: 24,
  keywords: ['flying', 'cleave'],
  ai: { value: 5 },
  art: {
    subject: 'a dense swarm of hundreds of tiny glowing drones forming a cloud above the neon city'
  }
})

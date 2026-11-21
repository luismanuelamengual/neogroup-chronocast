import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'

export default defineCard({
  id: 'rift-leech',
  type: 'ally',
  name: 'Rift Leech',
  text: '',
  flavor: 'It feeds on stolen seconds.',
  faction: 'neutral',
  restriction: { kind: 'any' },
  rarity: 'uncommon',
  price: 160,
  cost: 2,
  attack: 6,
  health: 6,
  keywords: ['lifesteal'],
  ai: { value: 2 },
  art: {
    subject: 'a slimy glowing leech-like creature coiled around an hourglass, draining its sand'
  }
})

import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'

export default defineCard({
  id: 'rift-moth',
  type: 'ally',
  name: 'Rift Moth',
  text: '',
  flavor: 'Drawn to the light of open rifts.',
  faction: 'neutral',
  restriction: { kind: 'any' },
  rarity: 'common',
  price: 45,
  cost: 1,
  attack: 4,
  health: 8,
  keywords: ['flying'],
  ai: { value: 1, tags: ['flying'] },
  art: {
    subject: 'a big glowing moth with turquoise clock-face patterns on its wings, fluttering in the dark'
  }
})

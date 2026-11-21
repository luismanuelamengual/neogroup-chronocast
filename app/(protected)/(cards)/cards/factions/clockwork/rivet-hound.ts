import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'

export default defineCard({
  id: 'rivet-hound',
  type: 'ally',
  name: 'Rivet Hound',
  text: '',
  flavor: 'Fetch! No, not the arm!',
  faction: 'clockwork',
  restriction: { kind: 'faction', faction: 'clockwork' },
  rarity: 'common',
  price: 50,
  cost: 2,
  attack: 8,
  health: 5,
  keywords: ['charge'],
  ai: { value: 2, tags: ['aggro'] },
  art: {
    subject: 'a mechanical dog made of brass plates and rivets, sparks flying from its paws as it sprints'
  }
})

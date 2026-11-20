import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'

export default defineCard({
  id: 'fang-the-sabertooth',
  type: 'ally',
  reward: true,
  name: 'Fang, the Sabertooth',
  text: '',
  flavor: 'Kora raised him. The tyrant king learned to fear him.',
  faction: 'primal',
  restriction: { kind: 'hero', heroId: 'kora-wildfang' },
  rarity: 'legendary',
  cost: 4,
  attack: 18,
  health: 30,
  keywords: ['unique', 'charge', 'quick'],
  ai: { value: 6, tags: ['aggro'] },
  art: {
    subject: 'a massive sabertooth tiger with scars and a bone collar, leaping out of tall grass with fangs bared'
  }
})

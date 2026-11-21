import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'

export default defineCard({
  id: 'tyrant-hatchling',
  type: 'ally',
  boss: true,
  name: 'Tyrant Hatchling',
  text: '',
  flavor: 'Small. For now.',
  faction: 'primal',
  restriction: { kind: 'hero', heroId: 'gorrak-tyrant-king' },
  rarity: 'epic',
  cost: 3,
  attack: 13,
  health: 10,
  keywords: ['charge'],
  ai: { value: 4, tags: ['aggro'] },
  art: { subject: 'a baby tyrannosaurus with oversized jaws bursting out of a cracked egg, roaring' }
})

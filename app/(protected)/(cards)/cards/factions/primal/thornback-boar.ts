import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'

export default defineCard({
  id: 'thornback-boar',
  type: 'ally',
  name: 'Thornback Boar',
  text: '',
  flavor: 'Petting is strongly discouraged.',
  faction: 'primal',
  restriction: { kind: 'faction', faction: 'primal' },
  rarity: 'common',
  price: 60,
  cost: 3,
  attack: 10,
  health: 20,
  keywords: ['thorns'],
  thorns: 4,
  ai: { value: 3, tags: ['defense'] },
  art: { subject: 'an enormous prehistoric boar covered with long sharp thorns along its back, snorting angrily' }
})

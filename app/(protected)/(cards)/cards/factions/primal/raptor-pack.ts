import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'

export default defineCard({
  id: 'raptor-pack',
  type: 'ally',
  name: 'Raptor Pack',
  text: '',
  flavor: 'You never see just one.',
  faction: 'primal',
  restriction: { kind: 'faction', faction: 'primal' },
  rarity: 'common',
  price: 55,
  cost: 2,
  attack: 9,
  health: 5,
  keywords: ['quick'],
  ai: { value: 2, tags: ['aggro'] },
  art: { subject: 'three colorful feathered raptors sprinting through a prehistoric jungle, jaws open' }
})

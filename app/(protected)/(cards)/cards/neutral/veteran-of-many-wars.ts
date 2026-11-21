import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'

export default defineCard({
  id: 'veteran-of-many-wars',
  type: 'ally',
  name: 'Veteran of Many Wars',
  text: '',
  flavor: 'He stopped counting wars. Then eras.',
  faction: 'neutral',
  restriction: { kind: 'any' },
  rarity: 'common',
  price: 65,
  cost: 5,
  attack: 20,
  health: 20,
  ai: { value: 5 },
  art: {
    subject: 'a grizzled old warrior with armor pieces from many eras and a giant two-handed sword'
  }
})

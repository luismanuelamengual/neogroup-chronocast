import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'

export default defineCard({
  id: 'bronze-cuirass',
  type: 'armor',
  name: 'Bronze Cuirass',
  text: '',
  flavor: 'Polished every morning, dented every afternoon.',
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'warrior' },
  rarity: 'common',
  price: 60,
  cost: 2,
  armor: 15,
  ai: { value: 2, tags: ['defense'] },
  art: { subject: 'a gleaming muscled bronze cuirass on an armor stand, with red leather straps' }
})

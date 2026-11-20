import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'

export default defineCard({
  id: 'bonefang-bow',
  type: 'weapon',
  name: 'Bonefang Bow',
  text: '',
  flavor: 'Carved from the tooth of the first tyrant.',
  faction: 'primal',
  restriction: { kind: 'hero', heroId: 'kora-wildfang' },
  rarity: 'rare',
  price: 560,
  cost: 3,
  attack: 8,
  durability: 4,
  keywords: ['ranged'],
  ai: { value: 4 },
  art: {
    subject: 'a bow carved from a giant curved dinosaur fang with leather wrappings and feathers'
  }
})

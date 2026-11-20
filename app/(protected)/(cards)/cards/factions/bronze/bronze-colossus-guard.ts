import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'

export default defineCard({
  id: 'bronze-colossus-guard',
  type: 'ally',
  name: 'Bronze Colossus Guard',
  text: '',
  flavor: 'Cast in bronze, cooled in the blood of giants.',
  faction: 'bronze',
  restriction: { kind: 'faction', faction: 'bronze' },
  rarity: 'rare',
  price: 675,
  cost: 6,
  attack: 18,
  health: 54,
  keywords: ['guardian', 'thorns'],
  thorns: 6,
  ai: { value: 7, tags: ['defense'] },
  art: {
    subject: 'a towering bronze automaton soldier with spiked shoulder plates guarding a harbor gate'
  }
})

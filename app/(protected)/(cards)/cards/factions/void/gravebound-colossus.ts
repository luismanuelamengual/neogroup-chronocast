import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'

export default defineCard({
  id: 'gravebound-colossus',
  type: 'ally',
  name: 'Gravebound Colossus',
  text: '',
  flavor: 'A thousand graves, one body.',
  faction: 'void',
  restriction: { kind: 'faction', faction: 'void' },
  rarity: 'uncommon',
  price: 200,
  cost: 6,
  attack: 20,
  health: 48,
  keywords: ['guardian', 'echo'],
  ai: { value: 6, tags: ['defense'] },
  art: {
    subject: 'a colossal golem made of tombstones and bones held together by green ghostly energy'
  }
})

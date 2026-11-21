import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'

export default defineCard({
  id: 'bone-dragon',
  type: 'ally',
  name: 'Bone Dragon',
  text: '',
  flavor: 'It died a thousand years ago. It forgot to stop.',
  faction: 'void',
  restriction: { kind: 'faction', faction: 'void' },
  rarity: 'epic',
  price: 2100,
  cost: 7,
  attack: 26,
  health: 23,
  keywords: ['flying', 'echo'],
  ai: { value: 8 },
  art: {
    subject: 'a massive skeletal dragon with green flames burning inside its ribcage flying over a ruined world'
  }
})

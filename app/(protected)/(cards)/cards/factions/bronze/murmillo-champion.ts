import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'

export default defineCard({
  id: 'murmillo-champion',
  type: 'ally',
  name: 'Murmillo Champion',
  text: '',
  flavor: 'He fights twice before the crowd can breathe.',
  faction: 'bronze',
  restriction: { kind: 'faction', faction: 'bronze' },
  rarity: 'rare',
  price: 640,
  cost: 5,
  attack: 18,
  health: 34,
  keywords: ['frenzy'],
  ai: { value: 6 },
  art: {
    subject:
      'a heavily armored murmillo gladiator with a fish-crested helmet and a big shield, swinging his sword in a blur'
  }
})

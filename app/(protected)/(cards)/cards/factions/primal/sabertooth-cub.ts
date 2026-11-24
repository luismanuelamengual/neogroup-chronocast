import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'

export default defineCard({
  id: 'sabertooth-cub',
  type: 'ally',
  token: true,
  name: 'Sabertooth Cub',
  text: '',
  flavor: 'Small fangs, big plans.',
  faction: 'primal',
  restriction: { kind: 'faction', faction: 'primal' },
  rarity: 'common',
  cost: 1,
  tribe: 'beast',
  attack: 2,
  health: 4,
  ai: { value: 1 },
  art: {
    subject: 'a small fierce sabertooth cub with oversized fangs, prehistoric jungle era style'
  }
})

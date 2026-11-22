import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { poison } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'swamp-viper',
  type: 'ally',
  name: 'Swamp Viper',
  text: 'When it attacks, it poisons its target (2).',
  flavor: 'Its bite is quick. The rest is slow.',
  faction: 'primal',
  restriction: { kind: 'faction', faction: 'primal' },
  rarity: 'common',
  price: 70,
  cost: 2,
  attack: 4,
  health: 5,
  onAttack(ctx, target) {
    poison(ctx, target, 2)
  },
  ai: { value: 2 },
  art: {
    subject: 'a huge green viper rising out of swamp water with dripping fangs, ready to strike'
  }
})

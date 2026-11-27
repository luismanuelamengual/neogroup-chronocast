import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { drainEnergy } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'wild-boar',
  type: 'ally',
  name: 'Wild Boar',
  text: 'When it attacks: the enemy hero loses 1 energy.',
  flavor: 'Charges first, thinks never.',
  faction: 'neutral',
  restriction: { sides: ['eclipse'] },
  rarity: 'common',
  price: 55,
  cost: 3,
  tribe: 'beast',
  keywords: ['stealth'],
  attack: 3,
  health: 7,
  onAttack(ctx) {
    drainEnergy(ctx, ctx.opponent, 1)
  },
  ai: { value: 3, tags: ['aggro'] },
  art: {
    subject:
      'Wild Boar: a boar with spotted cream fur and massive sabre fangs, standing proud on a rock, crimson accents, hunter style'
  }
})

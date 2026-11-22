import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { freeze } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'cryo-turret',
  type: 'ally',
  name: 'Cryo Turret',
  text: 'When it attacks, it freezes its target for the rest of the phase and the next.',
  flavor: 'Chill out. That is an order.',
  faction: 'neon',
  restriction: { kind: 'faction', faction: 'neon' },
  rarity: 'uncommon',
  price: 170,
  cost: 3,
  attack: 4,
  health: 10,
  keywords: ['ranged'],
  onAttack(ctx, target) {
    freeze(ctx, target, 1)
  },
  ai: { value: 3 },
  art: {
    subject: 'a sleek neon gun turret firing a beam of icy blue light that freezes everything it touches'
  }
})

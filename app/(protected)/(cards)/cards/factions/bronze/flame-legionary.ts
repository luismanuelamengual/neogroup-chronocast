import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { burn } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'flame-legionary',
  type: 'ally',
  name: 'Flame Legionary',
  text: 'When it attacks, it sets its target on fire (2 a phase for 3 phases).',
  flavor: 'The legion brought fire to the world. He brings it to you.',
  faction: 'bronze',
  restriction: { kind: 'faction', faction: 'bronze' },
  rarity: 'uncommon',
  price: 160,
  cost: 3,
  attack: 6,
  health: 8,
  onAttack(ctx, target) {
    burn(ctx, target, 2, 3)
  },
  ai: { value: 3 },
  art: {
    subject: 'a roman legionary with a burning sword and a flaming shield charging through smoke'
  }
})

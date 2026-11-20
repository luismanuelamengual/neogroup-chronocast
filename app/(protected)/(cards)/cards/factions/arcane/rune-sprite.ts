import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'

export default defineCard({
  id: 'rune-sprite',
  type: 'ally',
  name: 'Rune Sprite',
  text: '',
  flavor: 'It writes its name in the air, then erases it.',
  faction: 'arcane',
  restriction: { kind: 'faction', faction: 'arcane' },
  rarity: 'common',
  price: 45,
  cost: 1,
  attack: 4,
  health: 8,
  keywords: ['flying'],
  ai: { value: 1 },
  art: {
    subject: 'a tiny winged sprite tracing a glowing blue rune in the air with its finger'
  }
})

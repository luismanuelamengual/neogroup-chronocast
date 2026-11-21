import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'

export default defineCard({
  id: 'testudo-squad',
  type: 'ally',
  name: 'Testudo Squad',
  text: '',
  flavor: 'Arrows rain. The turtle walks on.',
  faction: 'bronze',
  restriction: { kind: 'faction', faction: 'bronze' },
  rarity: 'uncommon',
  price: 180,
  cost: 4,
  attack: 11,
  health: 17,
  keywords: ['guardian', 'shield'],
  ai: { value: 4, tags: ['defense'] },
  art: {
    subject:
      'Roman legionaries in testudo turtle formation with shields covering them on all sides, arrows bouncing off'
  }
})

import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { freeze } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'binding-of-flame',
  type: 'ability',
  name: 'Binding of Flame',
  text: 'Freeze an enemy ally.',
  flavor: 'Chains that burn as they hold.',
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'mage' },
  rarity: 'common',
  price: 40,
  cost: 1,
  targets: ['enemyAlly'],
  onPlay(ctx) {
    freeze(ctx, ctx.targets[0])
  },
  ai: { value: 1, tags: ['removal'] },
  art: {
    subject:
      'Binding of Flame: glowing chains coiling tightly around nothing, locking shut, over rooftops at night, swirling around the center, saffron yellow accents, mage style'
  }
})

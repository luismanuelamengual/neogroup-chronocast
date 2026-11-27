import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damage, freeze } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'binding-of-flame',
  type: 'ability',
  subtype: 'spell',
  name: 'Binding of Flame',
  text: 'Freeze an enemy ally and deal 2 ice damage to it.',
  flavor: 'Chains that burn as they hold.',
  faction: 'arcane',
  restriction: { factions: ['arcane'] },
  rarity: 'common',
  price: 40,
  cost: 1,
  targets: ['enemyAlly'],
  onPlay(ctx) {
    freeze(ctx, ctx.targets[0])
    damage(ctx, ctx.targets[0], 2, 'ice')
  },
  ai: { value: 1, tags: ['removal'] },
  art: {
    subject:
      'Binding of Flame: glowing chains coiling tightly around nothing, locking shut, over rooftops at night, swirling around the center, saffron yellow accents, mage style'
  }
})

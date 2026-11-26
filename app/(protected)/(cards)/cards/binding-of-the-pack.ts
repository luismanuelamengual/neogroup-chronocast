import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damageEnemyHero, freeze } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'binding-of-the-pack',
  type: 'ability',
  name: 'Binding of the Pack',
  text: 'Freeze an enemy ally and deal 5 ice damage to the enemy hero.',
  faction: 'neutral',
  restriction: { sides: ['eclipse'] },
  rarity: 'uncommon',
  element: 'ice',
  price: 200,
  cost: 5,
  targets: ['enemyAlly'],
  onPlay(ctx) {
    freeze(ctx, ctx.targets[0])
    damageEnemyHero(ctx, 5)
  },
  ai: { value: 5, tags: ['aggro', 'removal'] },
  art: {
    subject:
      'Binding of the Pack: glowing chains coiling tightly around nothing, locking shut, covered in frost and ice crystals, in a snowy pass, close-up filling the frame, saffron yellow accents, hunter style'
  }
})

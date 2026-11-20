import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damage } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'cleaving-strike',
  type: 'ability',
  name: 'Cleaving Strike',
  text: 'Deal 14 damage to an enemy ally.',
  flavor: 'One swing, two halves.',
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'warrior' },
  rarity: 'common',
  price: 55,
  cost: 3,
  targets: ['enemyAlly'],
  onPlay(ctx) {
    damage(ctx, ctx.targets[0], 14)
  },
  ai: { value: 3, tags: ['removal'] },
  art: {
    subject: 'a warrior swinging a huge axe in a wide arc, a red slash trail cutting the air'
  }
})

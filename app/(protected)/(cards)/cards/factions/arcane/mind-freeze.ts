import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damage, stunAt } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'mind-freeze',
  type: 'ability',
  name: 'Mind Freeze',
  text: 'Stun an enemy ally and deal 6 damage to it.',
  flavor: 'Thinking is overrated.',
  faction: 'arcane',
  restriction: { kind: 'faction', faction: 'arcane' },
  rarity: 'common',
  price: 50,
  cost: 2,
  targets: ['enemyAlly'],
  onPlay(ctx) {
    stunAt(ctx, ctx.targets[0])
    damage(ctx, ctx.targets[0], 6)
  },
  ai: { value: 2, tags: ['control', 'removal'] },
  art: {
    subject: 'a warrior frozen inside a block of blue ice with a confused expression, frost runes around him'
  }
})

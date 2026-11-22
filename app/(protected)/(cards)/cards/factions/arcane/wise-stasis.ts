import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { freeze } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'wise-stasis',
  type: 'ability',
  name: 'Wise Stasis',
  text: 'Freeze an enemy ally.',
  faction: 'arcane',
  restriction: { kind: 'faction', faction: 'arcane' },
  rarity: 'common',
  price: 40,
  cost: 1,
  targets: ['enemyAlly'],
  onPlay(ctx) {
    freeze(ctx, ctx.targets[0])
  },
  ai: { value: 1, tags: ['removal'] },
  art: {
    subject: 'Wise Stasis: glowing chains binding a struggling creature, medieval magic order style'
  }
})

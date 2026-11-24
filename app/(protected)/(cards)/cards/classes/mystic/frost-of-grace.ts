import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { freeze } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'frost-of-grace',
  type: 'ability',
  name: 'Frost of Grace',
  text: 'Freeze an enemy ally.',
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'mystic' },
  rarity: 'rare',
  price: 450,
  cost: 1,
  targets: ['enemyAlly'],
  onPlay(ctx) {
    freeze(ctx, ctx.targets[0])
  },
  ai: { value: 2, tags: ['removal'] },
  art: {
    subject:
      'Frost of Grace: a spiral of razor-sharp frost shards, over a stormy battlefield, seen from above, emerald accents, mystic healer style'
  }
})

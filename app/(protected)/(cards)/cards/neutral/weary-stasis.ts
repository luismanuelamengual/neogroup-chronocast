import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { freeze } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'weary-stasis',
  type: 'ability',
  name: 'Weary Stasis',
  text: 'Freeze an enemy ally.',
  flavor: 'Even time needs to rest.',
  faction: 'neutral',
  restriction: { kind: 'any' },
  rarity: 'uncommon',
  price: 140,
  cost: 0,
  targets: ['enemyAlly'],
  onPlay(ctx) {
    freeze(ctx, ctx.targets[0])
  },
  ai: { value: 1, tags: ['removal'] },
  art: {
    subject:
      'Weary Stasis: a clock frozen inside a floating crystal, its hands stopped, over a stormy battlefield, dramatic backlight, lime green accents, time rift wanderer style'
  }
})

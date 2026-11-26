import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { freeze } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'weary-stasis',
  type: 'ability',
  subtype: 'spell',
  name: 'Weary Stasis',
  text: 'Freeze an enemy ally.',
  flavor: 'Even time needs to rest.',
  faction: 'arcane',
  restriction: { factions: ['arcane'] },
  rarity: 'uncommon',
  price: 120,
  cost: 0,
  targets: ['enemyAlly'],
  onPlay(ctx) {
    freeze(ctx, ctx.targets[0])
  },
  ai: { value: 1, tags: ['removal'] },
  art: {
    subject:
      'Weary Stasis: a clock frozen inside a floating crystal, its hands stopped, over a stormy battlefield, dramatic backlight, lime green accents, medieval magic order style'
  }
})

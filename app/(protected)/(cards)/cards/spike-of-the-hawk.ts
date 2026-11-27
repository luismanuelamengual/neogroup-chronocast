import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damage, returnAt, unitAt } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'spike-of-the-hawk',
  type: 'ability',
  subtype: 'spell',
  name: 'Spike of the Hawk',
  text: "Deal 5 wind damage to an enemy ally; if it has Flying, return it to its owner's hand.",
  flavor: 'Swift as the hawk that guides it.',
  faction: 'arcane',
  restriction: { factions: ['arcane'] },
  rarity: 'epic',
  element: 'wind',
  price: 1100,
  cost: 3,
  targets: ['enemyAlly'],
  onPlay(ctx) {
    const unit = unitAt(ctx, ctx.targets[0])

    damage(ctx, ctx.targets[0], 5, 'wind')

    if (unit?.keywords.includes('flying') && unitAt(ctx, ctx.targets[0])) {
      returnAt(ctx, ctx.targets[0])
    }
  },
  ai: { value: 4, tags: ['removal'] },
  art: {
    subject:
      'Spike of the Hawk: a giant jagged spike bursting up from cracked ground, swept by a spiraling gust with leaves, above a calm lake at dusk, framed by drifting embers, magenta accents, hunter style'
  }
})

import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damage, draw, unitAt } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'barrage-of-the-hawk',
  type: 'ability',
  subtype: 'spell',
  name: 'Barrage of the Hawk',
  text: 'Deal 6 wind damage to an enemy ally. Fast. If it dies, draw a card.',
  flavor: 'The hawk calls, and the arrows follow.',
  faction: 'arcane',
  restriction: { factions: ['arcane'] },
  rarity: 'common',
  element: 'wind',
  price: 50,
  cost: 2,
  speed: 'fast',
  targets: ['enemyAlly'],
  onPlay(ctx) {
    const uid = unitAt(ctx, ctx.targets[0])?.uid

    damage(ctx, ctx.targets[0], 6)

    if (uid && !ctx.engine.findUnit(uid)) {
      draw(ctx, ctx.owner, 1)
    }
  },
  ai: { value: 2, tags: ['removal'] },
  art: {
    subject:
      'Barrage of the Hawk: a dense volley of projectiles raining down, swept by a spiraling gust with leaves, over rooftops at night, seen from above, violet accents, hunter style'
  }
})

import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { consume, destroy, randomAlly } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'soul-harvester',
  type: 'ally',
  name: 'Soul Harvester',
  text: 'When it enters: Consume 4; if you do, destroy a random enemy ally.',
  faction: 'void',
  restriction: { factions: ['void'] },
  rarity: 'epic',
  price: 1100,
  cost: 5,
  tribe: 'cultist',
  attack: 5,
  health: 10,
  onEnter(ctx) {
    if (consume(ctx, 4)) {
      const victim = randomAlly(ctx, ctx.opponent)

      if (victim) {
        destroy(ctx, victim)
      }
    }
  },
  ai: { value: 6, tags: ['removal'] },
  art: {
    subject:
      'Soul Harvester: a robed cultist holding a scythe that pulls glowing souls out of the ground, full body, acid green accents, dark end-of-time void style'
  }
})

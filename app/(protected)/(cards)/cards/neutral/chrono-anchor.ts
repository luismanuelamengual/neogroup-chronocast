import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { host, stun } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'chrono-anchor',
  type: 'attachment',
  name: 'Chrono Anchor',
  text: 'Attach to an enemy ally: it has -4 attack and is stunned until the end of the next phase.',
  flavor: 'Stuck between two seconds.',
  faction: 'neutral',
  restriction: { kind: 'any' },
  rarity: 'rare',
  price: 560,
  cost: 3,
  targets: ['enemyAlly'],
  attack: -4,
  onPlay(ctx) {
    const found = host(ctx)

    if (found) {
      stun(ctx, found.unit, 1)
    }
  },
  ai: { value: 3, tags: ['removal'] },
  art: {
    subject: 'a massive glowing anchor made of clock gears chained to the leg of a frozen warrior'
  }
})

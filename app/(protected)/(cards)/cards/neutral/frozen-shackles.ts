import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { freeze, host } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'frozen-shackles',
  type: 'attachment',
  name: 'Frozen Shackles',
  text: 'Attach to an enemy ally: it stays frozen while this is attached.',
  flavor: 'Ice that never melts, for a prisoner that never leaves.',
  faction: 'neutral',
  restriction: { kind: 'any' },
  rarity: 'rare',
  price: 520,
  cost: 4,
  targets: ['enemyAlly'],
  onPlay(ctx) {
    const found = host(ctx)

    if (found) {
      freeze(ctx, found.ref, 1)
    }
  },
  onPhaseStart(ctx) {
    const found = host(ctx)

    if (found) {
      freeze(ctx, found.ref, 0)
    }
  },
  ai: { value: 4, tags: ['removal'] },
  art: {
    subject: 'chains of blue ice wrapping around a warrior frozen inside a block of ice'
  }
})

import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { discardSize, host, stun } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'curse-of-binding',
  type: 'attachment',
  subtype: 'curse',
  name: 'Curse of Binding',
  text: 'Attach to an enemy ally: at the start of each phase, if your discard pile has 10 or more cards, stun it.',
  faction: 'void',
  restriction: { factions: ['void'] },
  rarity: 'rare',
  price: 420,
  cost: 4,
  targets: ['enemyAlly'],
  onPhaseStart(ctx) {
    const found = host(ctx)

    if (found && discardSize(ctx, ctx.owner) >= 10) {
      stun(ctx, found.unit)
    }
  },
  ai: { value: 3, tags: ['removal'] },
  art: {
    subject:
      'Curse of Binding: spectral chains made of bones wrapping tightly around a struggling figure, close-up, violet accents, dark end-of-time void style'
  }
})

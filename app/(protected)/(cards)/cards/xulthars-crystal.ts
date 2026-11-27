import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { buffAllies, consume } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'xulthars-crystal',
  type: 'artifact',
  name: "Xulthar's Crystal",
  text: 'At the start of each phase: Consume 2; if you do, your allies gain +1 attack and +1 health.',
  faction: 'void',
  restriction: { factions: ['void'] },
  rarity: 'epic',
  price: 1100,
  cost: 3,
  keywords: ['unique'],
  onPhaseStart(ctx) {
    if (consume(ctx, 2)) {
      buffAllies(ctx, ctx.owner, 1, 1)
    }
  },
  ai: { value: 5 },
  art: {
    subject:
      "Xulthar's Crystal: an ancient crystal made of pale ash wood wrapped in red cloth, standing in a torchlit hall, framed by drifting embers, lime green accents, dark end-of-time void style"
  }
})

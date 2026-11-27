import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { consume, reviveFromDiscard } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'nyxs-lantern-of-return',
  type: 'artifact',
  name: "Nyx's Lantern of Return",
  text: 'At the start of each phase: Consume 3; if you do, a random ally of your discard pile returns to play.',
  faction: 'void',
  restriction: { heroes: ['nyx-hollowsong'] },
  rarity: 'legendary',
  price: 2200,
  cost: 4,
  keywords: ['unique'],
  onPhaseStart(ctx) {
    if (consume(ctx, 3)) {
      reviveFromDiscard(ctx, ctx.owner)
    }
  },
  ai: { value: 6 },
  art: {
    subject:
      "Nyx's Lantern of Return: an ornate silver lantern holding a soft violet flame where small spirits gather, held over a misty grave, dark end-of-time void style"
  }
})

import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { healAllAllies, healHero } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'xulthars-crystal',
  type: 'artifact',
  name: "Xulthar's Crystal",
  text: 'At the start of each phase: your hero heals 3 and your allies heal 2.',
  faction: 'void',
  restriction: { heroes: ['xulthar-the-devourer'] },
  rarity: 'epic',
  price: 1100,
  cost: 3,
  keywords: ['unique'],
  onPhaseStart(ctx) {
    healHero(ctx, 3)
    healAllAllies(ctx, ctx.owner, 2)
  },
  ai: { value: 5 },
  art: {
    subject:
      "Xulthar's Crystal: an ancient crystal made of pale ash wood wrapped in red cloth, standing in a torchlit hall, framed by drifting embers, lime green accents, dark end-of-time void style"
  }
})

import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { healAllAllies, healHero } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'nyxs-idol',
  type: 'artifact',
  name: "Nyx's Idol",
  text: 'At the start of each phase: your hero heals 3 and your allies heal 2.',
  faction: 'void',
  restriction: { kind: 'hero', heroId: 'nyx-hollowsong' },
  rarity: 'epic',
  price: 1720,
  cost: 3,
  keywords: ['unique'],
  onPhaseStart(ctx) {
    healHero(ctx, 3)
    healAllAllies(ctx, ctx.owner, 2)
  },
  ai: { value: 5 },
  art: {
    subject: "Nyx's Idol: a sacred relic of the hero glowing on an altar, dark end-of-time void style"
  }
})

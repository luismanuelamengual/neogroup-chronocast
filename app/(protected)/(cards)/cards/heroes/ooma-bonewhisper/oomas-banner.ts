import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { healAllAllies, healHero } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'oomas-banner',
  type: 'artifact',
  name: "Ooma's Banner",
  text: 'At the start of each phase: your hero heals 3 and your allies heal 2.',
  faction: 'primal',
  restriction: { kind: 'hero', heroId: 'ooma-bonewhisper' },
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
    subject: "Ooma's Banner: a sacred relic of the hero glowing on an altar, prehistoric jungle era style"
  }
})

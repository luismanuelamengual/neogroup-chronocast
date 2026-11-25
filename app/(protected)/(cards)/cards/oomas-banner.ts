import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { healAllAllies, healHero } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'oomas-banner',
  type: 'artifact',
  name: "Ooma's Banner",
  text: 'At the start of each phase: your hero heals 3 and your allies heal 2.',
  faction: 'primal',
  restriction: { heroes: ['ooma-bonewhisper'] },
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
    subject:
      "Ooma's Banner: an ancient banner made of crystal and silver filigree, standing on a windy cliff, swirling around the center, indigo accents, prehistoric jungle era style"
  }
})

import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { markPreyAlly, randomAlly } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'oomas-banner',
  type: 'artifact',
  name: "Ooma's Banner",
  text: 'At the start of each phase: a random enemy ally becomes your Prey.',
  faction: 'primal',
  restriction: { heroes: ['ooma-bonewhisper'] },
  rarity: 'epic',
  price: 1100,
  cost: 3,
  keywords: ['unique'],
  onPhaseStart(ctx) {
    const prey = randomAlly(ctx, ctx.opponent)

    if (prey) {
      markPreyAlly(ctx, prey)
    }
  },
  ai: { value: 5 },
  art: {
    subject:
      "Ooma's Banner: an ancient banner made of crystal and silver filigree, standing on a windy cliff, swirling around the center, indigo accents, prehistoric jungle era style"
  }
})

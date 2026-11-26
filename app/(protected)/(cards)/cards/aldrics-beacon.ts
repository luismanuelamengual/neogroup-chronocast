import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { healAllAllies, healHero } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'aldrics-beacon',
  type: 'artifact',
  name: "Aldric's Beacon",
  text: 'At the start of each phase: your hero heals 3 and your allies heal 2.',
  faction: 'arcane',
  restriction: { factions: ['arcane'], sides: ['dawn'] },
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
      "Aldric's Beacon: an ancient beacon made of gilded marble, standing in shallow water, seen from above, lime green accents, medieval magic order style"
  }
})

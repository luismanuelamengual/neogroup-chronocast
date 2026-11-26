import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { gainChronos } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'ironsteam-exosuit',
  type: 'armor',
  subtype: 'exosuit',
  name: 'Ironsteam Exosuit',
  text: 'At the start of each phase: you gain 1 Chronos this phase.',
  faction: 'clockwork',
  restriction: { factions: ['clockwork'], sides: ['dawn'] },
  rarity: 'legendary',
  price: 2320,
  cost: 5,
  keywords: ['unique'],
  armor: 4,
  durability: 4,
  onPhaseStart(ctx) {
    gainChronos(ctx, ctx.owner, 1)
  },
  ai: { value: 7, tags: ['ramp'] },
  art: {
    subject:
      'Ironsteam Exosuit: a single exosuit made of carved obsidian, on a mossy rock, framed by drifting embers, saffron yellow accents'
  }
})

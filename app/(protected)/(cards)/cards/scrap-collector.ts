import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { gainChronos } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'scrap-collector',
  type: 'ally',
  name: 'Scrap Collector',
  text: 'Scrap: when an artifact of yours leaves play, you gain 1 Chronos this phase.',
  faction: 'clockwork',
  restriction: { factions: ['clockwork'] },
  rarity: 'uncommon',
  price: 160,
  cost: 3,
  tribe: 'skyship',
  attack: 3,
  health: 7,
  onArtifactLeave(ctx) {
    gainChronos(ctx, ctx.owner, 1)
  },
  ai: { value: 3 },
  art: {
    subject:
      'Scrap Collector: a junk airship with a big magnetic claw hauling broken machines, full body, steampunk clockwork era style'
  }
})

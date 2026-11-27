import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { spendCharge, summonCard } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'lantern-of-the-foundry',
  type: 'artifact',
  name: 'Lantern of the Foundry',
  text: 'At the start of each phase: summon a Cog Drone. (2 uses)',
  faction: 'clockwork',
  restriction: { factions: ['clockwork'] },
  rarity: 'common',
  price: 55,
  cost: 3,
  charges: 2,
  onPhaseStart(ctx) {
    summonCard(ctx, ctx.owner, 'cog-drone')
    spendCharge(ctx)
  },
  ai: { value: 3, tags: ['defense'] },
  art: {
    subject:
      'Lantern of the Foundry: an ancient lantern made of rusted iron and chains, standing on a hilltop at dusk, swirling around the center, cobalt blue accents, steampunk steam era style'
  }
})

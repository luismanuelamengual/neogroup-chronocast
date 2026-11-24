import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { gainArmor, spendCharge } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'lantern-of-the-foundry',
  type: 'artifact',
  name: 'Lantern of the Foundry',
  text: 'At the start of each phase: your hero gains 3 armor. (3 uses)',
  faction: 'clockwork',
  restriction: { kind: 'faction', faction: 'clockwork' },
  rarity: 'common',
  price: 55,
  cost: 3,
  charges: 3,
  onPhaseStart(ctx) {
    gainArmor(ctx, ctx.owner, 3)
    spendCharge(ctx)
  },
  ai: { value: 3, tags: ['defense'] },
  art: {
    subject:
      'Lantern of the Foundry: an ancient lantern made of rusted iron and chains, standing on a hilltop at dusk, swirling around the center, cobalt blue accents, steampunk steam era style'
  }
})

import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { gainArmor, spendCharge } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'obelisk-of-dusk',
  type: 'artifact',
  name: 'Obelisk of Dusk',
  text: 'At the start of each phase: your hero gains 3 armor. (3 uses)',
  faction: 'neutral',
  restriction: { kind: 'any' },
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
      'Obelisk of Dusk: an ancient obelisk made of copper with green patina, standing in shallow water, dramatic backlight, lime green accents, time rift wanderer style'
  }
})

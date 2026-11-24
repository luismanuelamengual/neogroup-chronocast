import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { gainArmor, spendCharge } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'obelisk-of-the-grave',
  type: 'artifact',
  name: 'Obelisk of the Grave',
  text: 'At the start of each phase: your hero gains 3 armor. (4 uses)',
  faction: 'void',
  restriction: { kind: 'faction', faction: 'void' },
  rarity: 'rare',
  price: 510,
  cost: 2,
  charges: 4,
  onPhaseStart(ctx) {
    gainArmor(ctx, ctx.owner, 3)
    spendCharge(ctx)
  },
  ai: { value: 3, tags: ['defense'] },
  art: {
    subject:
      'Obelisk of the Grave: an ancient obelisk made of polished bronze with engraved spirals, standing among ancient trees, diagonal dynamic composition, indigo accents, dark end-of-time void style'
  }
})

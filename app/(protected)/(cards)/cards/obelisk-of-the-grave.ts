import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { healHero, spendCharge } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'obelisk-of-the-grave',
  type: 'artifact',
  name: 'Obelisk of the Grave',
  text: 'At the start of each phase: your hero heals 3. (4 uses)',
  faction: 'void',
  restriction: { factions: ['void'], sides: ['eclipse'] },
  rarity: 'rare',
  price: 360,
  cost: 2,
  charges: 4,
  onPhaseStart(ctx) {
    healHero(ctx, 3)
    spendCharge(ctx)
  },
  ai: { value: 3, tags: ['defense'] },
  art: {
    subject:
      'Obelisk of the Grave: an ancient obelisk made of polished bronze with engraved spirals, standing among ancient trees, diagonal dynamic composition, indigo accents, dark end-of-time void style'
  }
})

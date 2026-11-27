import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { seekSubtype, spendCharge } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'encrypted-monolith',
  type: 'artifact',
  name: 'Encrypted Monolith',
  text: 'At the start of each phase: draw the first implant of your deck. (2 uses)',
  faction: 'neon',
  restriction: { factions: ['neon'] },
  rarity: 'uncommon',
  price: 160,
  cost: 3,
  charges: 2,
  onPhaseStart(ctx) {
    seekSubtype(ctx, ctx.owner, 'implant')
    spendCharge(ctx)
  },
  ai: { value: 3, tags: ['aggro'] },
  art: {
    subject:
      'Encrypted Monolith: an ancient monolith made of crystal and silver filigree, bursting with jagged rocks and dust, standing on a floating rock, swirling around the center, violet accents, neon cyberpunk future style'
  }
})

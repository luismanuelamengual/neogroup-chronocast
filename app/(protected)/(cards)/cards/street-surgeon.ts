import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { recoverSubtype } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'street-surgeon',
  type: 'ally',
  name: 'Street Surgeon',
  text: 'When it enters: the last implant of your discard pile returns to your hand.',
  faction: 'neon',
  restriction: { factions: ['neon'] },
  rarity: 'uncommon',
  price: 150,
  cost: 3,
  tribe: 'cyborg',
  attack: 3,
  health: 3,
  onEnter(ctx) {
    recoverSubtype(ctx, ctx.owner, 'implant')
  },
  ai: { value: 3 },
  art: {
    subject:
      'Street Surgeon: a cyborg back-alley surgeon with multiple robotic arms holding scalpels and implants, a flickering neon clinic sign behind, full body, teal accents, neon cyberpunk future style'
  }
})

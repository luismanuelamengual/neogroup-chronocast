import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { enhancedAllies } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'pulse-blaster',
  type: 'weapon',
  subtype: 'energy',
  name: 'Pulse Blaster',
  text: 'While you have an Enhanced ally (one with an implant): your attacks deal 2 more damage.',
  faction: 'neon',
  restriction: { factions: ['neon'] },
  rarity: 'rare',
  element: 'lightning',
  price: 400,
  cost: 3,
  attack: 3,
  durability: 3,
  attackBonus(ctx) {
    return enhancedAllies(ctx, ctx.owner).length > 0 ? 2 : 0
  },
  ai: { value: 4 },
  art: {
    subject:
      'Pulse Blaster: a compact energy pistol with pulsing blue rings around its barrel and a glowing battery cell, held in a cybernetic hand, close-up, teal accents, neon cyberpunk future style'
  }
})

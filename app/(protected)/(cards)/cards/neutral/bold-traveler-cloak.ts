import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { healHero } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'bold-traveler-cloak',
  type: 'armor',
  name: 'Bold Traveler Cloak',
  text: 'When it is equipped: your hero heals 6.',
  faction: 'neutral',
  restriction: { kind: 'any' },
  rarity: 'rare',
  price: 630,
  cost: 4,
  armor: 13,
  onPlay(ctx) {
    healHero(ctx, 6)
  },
  ai: { value: 5 },
  art: {
    subject: 'Bold Traveler Cloak: a single piece of armor on a stand, time rift wanderer style'
  }
})

import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { healHero } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'blessed-halo',
  type: 'armor',
  name: 'Blessed Halo',
  text: 'When it is equipped: your hero heals 4.',
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'mystic' },
  rarity: 'uncommon',
  price: 155,
  cost: 2,
  armor: 6,
  onPlay(ctx) {
    healHero(ctx, 4)
  },
  ai: { value: 2 },
  art: {
    subject: 'Blessed Halo: a single piece of armor on a stand, mystic healer style'
  }
})

import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { healHero } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'sandstorm-of-dawn',
  type: 'ally',
  name: 'Sandstorm of Dawn',
  text: 'When it enters: your hero heals 7.',
  faction: 'neutral',
  restriction: {},
  rarity: 'rare',
  element: 'earth',
  resist: ['earth'],
  weak: ['wind'],
  price: 690,
  cost: 5,
  tribe: 'elemental',
  attack: 7,
  health: 9,
  onEnter(ctx) {
    healHero(ctx, 7)
  },
  ai: { value: 6, tags: ['defense'] },
  art: {
    subject:
      'Sandstorm of Dawn: an elemental sandstorm with a hunched beast shape made of deep teal water, prowling low, time rift wanderer style'
  }
})

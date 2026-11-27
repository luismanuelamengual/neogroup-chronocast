import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { freezeAlly, randomAlly } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'sandstorm-of-dawn',
  type: 'ally',
  name: 'Sandstorm of Dawn',
  text: 'When it enters: freeze a random enemy ally for 2 phases.',
  faction: 'neutral',
  restriction: { sides: ['dawn'] },
  rarity: 'rare',
  element: 'earth',
  resist: ['earth'],
  weak: ['wind'],
  price: 540,
  cost: 5,
  tribe: 'elemental',
  attack: 7,
  health: 9,
  onEnter(ctx) {
    const unit = randomAlly(ctx, ctx.opponent)

    if (unit) {
      freezeAlly(ctx, unit, 2)
    }
  },
  ai: { value: 6, tags: ['defense'] },
  art: {
    subject:
      'Sandstorm of Dawn: an elemental sandstorm with a hunched beast shape made of deep teal water, prowling low, time rift wanderer style'
  }
})

import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { gainArmor } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'sandstorm-of-dawn',
  type: 'ally',
  name: 'Sandstorm of Dawn',
  text: 'When it enters: your hero gains 7 armor.',
  faction: 'neutral',
  restriction: { kind: 'any' },
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
    gainArmor(ctx, ctx.owner, 7)
  },
  ai: { value: 6, tags: ['defense'] },
  art: {
    subject: 'an elemental spirit, the sandstorm of dawn, roaring, time rift wanderer style'
  }
})

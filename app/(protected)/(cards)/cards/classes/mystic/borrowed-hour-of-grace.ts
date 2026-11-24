import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { gainEnergy } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'borrowed-hour-of-grace',
  type: 'ability',
  name: 'Borrowed Hour of Grace',
  text: 'Your hero gains 3 energy. Instant.',
  flavor: 'An hour you did not have, given freely.',
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'mystic' },
  rarity: 'rare',
  price: 510,
  cost: 2,
  speed: 'instant',
  onPlay(ctx) {
    gainEnergy(ctx, ctx.owner, 3)
  },
  ai: { value: 3, tags: ['energy'] },
  art: {
    subject:
      'Borrowed Hour of Grace: a great bell tower clock face glowing at midnight, over a stormy battlefield, centered and seen from slightly below, cobalt blue accents, mystic healer style'
  }
})

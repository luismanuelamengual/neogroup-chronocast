import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { artifactCount, gainEnergy } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'borrowed-hour-of-grace',
  type: 'ability',
  subtype: 'gadget',
  name: 'Borrowed Hour of Grace',
  text: 'Your hero gains 1 energy for each artifact of yours. Instant.',
  flavor: 'An hour you did not have, given freely.',
  faction: 'clockwork',
  restriction: { factions: ['clockwork'] },
  rarity: 'rare',
  price: 360,
  cost: 2,
  speed: 'instant',
  onPlay(ctx) {
    gainEnergy(ctx, ctx.owner, artifactCount(ctx))
  },
  ai: { value: 3, tags: ['energy'] },
  art: {
    subject:
      'Borrowed Hour of Grace: a great bell tower clock face glowing at midnight, over a stormy battlefield, centered and seen from slightly below, cobalt blue accents, mystic healer style'
  }
})

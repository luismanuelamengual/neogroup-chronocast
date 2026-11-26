import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { reviveFromDiscard } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'bloodied-echo',
  type: 'ability',
  subtype: 'ritual',
  name: 'Bloodied Echo',
  text: 'A random ally of your discard pile returns to play. Slow.',
  flavor: 'The battle echoes long after it ends.',
  faction: 'void',
  restriction: { factions: ['void'], sides: ['eclipse'] },
  rarity: 'common',
  price: 55,
  cost: 3,
  speed: 'slow',
  onPlay(ctx) {
    reviveFromDiscard(ctx, ctx.owner)
  },
  ai: { value: 3, tags: ['revive'] },
  art: {
    subject:
      'Bloodied Echo: rippling translucent copies of a bell fading into the distance, against a starry sky, bursting toward the viewer, turquoise accents, warrior style'
  }
})

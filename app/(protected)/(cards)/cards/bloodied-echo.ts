import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { reviveLastDefeated } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'bloodied-echo',
  type: 'ability',
  subtype: 'ritual',
  name: 'Bloodied Echo',
  text: 'The last ally of yours that died returns to play. Slow.',
  flavor: 'The battle echoes long after it ends.',
  faction: 'void',
  restriction: { factions: ['void'] },
  rarity: 'common',
  price: 55,
  cost: 3,
  speed: 'slow',
  onPlay(ctx) {
    reviveLastDefeated(ctx, ctx.owner)
  },
  ai: { value: 3, tags: ['revive'] },
  art: {
    subject:
      'Bloodied Echo: rippling translucent copies of a bell fading into the distance, against a starry sky, bursting toward the viewer, turquoise accents, warrior style'
  }
})

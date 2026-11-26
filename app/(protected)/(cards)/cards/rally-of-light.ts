import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { buffThisPhaseAt } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'rally-of-light',
  type: 'ability',
  name: 'Rally of Light',
  text: 'An ally of yours gains +10 attack this phase. Instant.',
  flavor: 'Gather, children of the dawn.',
  faction: 'neutral',
  restriction: { sides: ['dawn'] },
  rarity: 'uncommon',
  price: 180,
  cost: 4,
  speed: 'instant',
  targets: ['friendlyAlly'],
  onPlay(ctx) {
    buffThisPhaseAt(ctx, ctx.targets[0], 10)
  },
  ai: { value: 4, tags: ['buff'] },
  art: {
    subject:
      'Rally of Light: a tattered war banner planted in the ground, glowing with rallying light, over a stormy battlefield, dramatic backlight, rose pink accents, mystic healer style'
  }
})

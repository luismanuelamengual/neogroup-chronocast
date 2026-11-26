import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { buffAt } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'rally-of-grace',
  type: 'ability',
  name: 'Rally of Grace',
  text: 'An ally of yours gains +4 attack and +5 health.',
  flavor: 'Gather in the light.',
  faction: 'neutral',
  restriction: { classes: ['mystic'] },
  rarity: 'uncommon',
  price: 160,
  cost: 3,
  targets: ['friendlyAlly'],
  onPlay(ctx) {
    buffAt(ctx, ctx.targets[0], 4, 5)
  },
  ai: { value: 3, tags: ['buff'] },
  art: {
    subject:
      'Rally of Grace: a tattered war banner planted in the ground, glowing with rallying light, in a sunlit meadow, bursting toward the viewer, teal accents, mystic healer style'
  }
})

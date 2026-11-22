import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { buffAt } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'rally-of-the-hunt-moon',
  type: 'ability',
  name: 'Rally of the Hunt Moon',
  text: 'An ally of yours gains +3 attack and +4 health. Instant.',
  faction: 'primal',
  restriction: { kind: 'faction', faction: 'primal' },
  rarity: 'rare',
  price: 510,
  cost: 2,
  speed: 'instant',
  targets: ['friendlyAlly'],
  onPlay(ctx) {
    buffAt(ctx, ctx.targets[0], 3, 4)
  },
  ai: { value: 3, tags: ['buff'] },
  art: {
    subject: 'Rally of the Hunt Moon: a warrior surrounded by a surging aura of power, prehistoric jungle era style'
  }
})

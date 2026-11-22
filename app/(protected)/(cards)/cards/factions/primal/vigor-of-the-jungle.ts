import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { buffThisPhaseAt } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'vigor-of-the-jungle',
  type: 'ability',
  name: 'Vigor of the Jungle',
  text: 'An ally of yours gains +8 attack this phase. Instant.',
  faction: 'primal',
  restriction: { kind: 'faction', faction: 'primal' },
  rarity: 'rare',
  price: 570,
  cost: 3,
  speed: 'instant',
  targets: ['friendlyAlly'],
  onPlay(ctx) {
    buffThisPhaseAt(ctx, ctx.targets[0], 8)
  },
  ai: { value: 4, tags: ['buff'] },
  art: {
    subject: 'Vigor of the Jungle: a warrior surrounded by a surging aura of power, prehistoric jungle era style'
  }
})

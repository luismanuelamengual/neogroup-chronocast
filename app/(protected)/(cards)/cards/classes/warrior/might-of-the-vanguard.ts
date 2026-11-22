import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { buffThisPhaseAt } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'might-of-the-vanguard',
  type: 'ability',
  name: 'Might of the Vanguard',
  text: 'An ally of yours gains +6 attack this phase. Instant.',
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'warrior' },
  rarity: 'common',
  price: 50,
  cost: 2,
  speed: 'instant',
  targets: ['friendlyAlly'],
  onPlay(ctx) {
    buffThisPhaseAt(ctx, ctx.targets[0], 6)
  },
  ai: { value: 2, tags: ['buff'] },
  art: {
    subject: 'Might of the Vanguard: a warrior surrounded by a surging aura of power, warrior style'
  }
})

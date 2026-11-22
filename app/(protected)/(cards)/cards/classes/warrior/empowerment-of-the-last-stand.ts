import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { buffThisPhaseAt } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'empowerment-of-the-last-stand',
  type: 'ability',
  name: 'Empowerment of the Last Stand',
  text: 'An ally of yours gains +10 attack this phase. Instant.',
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'warrior' },
  rarity: 'epic',
  price: 1880,
  cost: 4,
  speed: 'instant',
  targets: ['friendlyAlly'],
  onPlay(ctx) {
    buffThisPhaseAt(ctx, ctx.targets[0], 10)
  },
  ai: { value: 5, tags: ['buff'] },
  art: {
    subject: 'Empowerment of the Last Stand: a warrior surrounded by a surging aura of power, warrior style'
  }
})

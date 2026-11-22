import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { buffThisPhaseAt } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'might-of-valor',
  type: 'ability',
  name: 'Might of Valor',
  text: 'An ally of yours gains +4 attack this phase. Instant.',
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'warrior' },
  rarity: 'epic',
  price: 1400,
  cost: 1,
  speed: 'instant',
  targets: ['friendlyAlly'],
  onPlay(ctx) {
    buffThisPhaseAt(ctx, ctx.targets[0], 4)
  },
  ai: { value: 2, tags: ['buff'] },
  art: {
    subject: 'Might of Valor: a warrior surrounded by a surging aura of power, warrior style'
  }
})

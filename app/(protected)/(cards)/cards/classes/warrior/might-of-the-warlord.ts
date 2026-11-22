import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { buffThisPhaseAt } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'might-of-the-warlord',
  type: 'ability',
  name: 'Might of the Warlord',
  text: 'An ally of yours gains +4 attack this phase. Instant.',
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'warrior' },
  rarity: 'common',
  price: 40,
  cost: 1,
  speed: 'instant',
  targets: ['friendlyAlly'],
  onPlay(ctx) {
    buffThisPhaseAt(ctx, ctx.targets[0], 4)
  },
  ai: { value: 1, tags: ['buff'] },
  art: {
    subject: 'Might of the Warlord: a warrior surrounded by a surging aura of power, warrior style'
  }
})

import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { buffThisPhaseAt } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'charge-in',
  type: 'ability',
  name: 'Charge In',
  text: 'An ally of yours gains +12 attack this phase. Fast.',
  flavor: 'Questions later.',
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'warrior' },
  rarity: 'uncommon',
  price: 160,
  cost: 2,
  speed: 'fast',
  targets: ['friendlyAlly'],
  onPlay(ctx) {
    buffThisPhaseAt(ctx, ctx.targets[0], 12)
  },
  ai: { value: 2, tags: ['buff'] },
  art: {
    subject: 'a soldier charging forward with a spear at full speed, dust exploding behind him'
  }
})

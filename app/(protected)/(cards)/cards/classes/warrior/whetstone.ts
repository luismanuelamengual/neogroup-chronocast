import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { buffThisPhaseAt, gainArmor } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'whetstone',
  type: 'item',
  name: 'Whetstone',
  text: 'An ally of yours gains +6 attack this phase and your hero gains 3 armor.',
  flavor: 'Sharper is better.',
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'warrior' },
  rarity: 'common',
  price: 45,
  cost: 1,
  targets: ['friendlyAlly'],
  onPlay(ctx) {
    buffThisPhaseAt(ctx, ctx.targets[0], 6)
    gainArmor(ctx, ctx.owner, 3)
  },
  ai: { value: 1, tags: ['buff', 'defense'] },
  art: {
    subject: 'a gray whetstone and a sword being sharpened, sparks flying'
  }
})

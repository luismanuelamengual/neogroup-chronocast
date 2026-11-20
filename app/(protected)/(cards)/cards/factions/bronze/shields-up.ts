import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { buffAt } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'shields-up',
  type: 'ability',
  name: 'Shields Up',
  text: 'An ally of yours gains +14 health. Fast.',
  flavor: 'Up! Now! Together!',
  faction: 'bronze',
  restriction: { kind: 'faction', faction: 'bronze' },
  rarity: 'common',
  price: 50,
  cost: 2,
  speed: 'fast',
  targets: ['friendlyAlly'],
  onPlay(ctx) {
    buffAt(ctx, ctx.targets[0], 0, 14)
  },
  ai: { value: 2, tags: ['buff'] },
  art: {
    subject: 'a row of soldiers raising their bronze shields at once as a volley of arrows falls'
  }
})

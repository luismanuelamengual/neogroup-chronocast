import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { buffAt } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'might-of-the-tar-pits',
  type: 'ability',
  name: 'Might of the Tar Pits',
  text: 'An ally of yours gains +3 attack and +4 health.',
  faction: 'primal',
  restriction: { kind: 'faction', faction: 'primal' },
  rarity: 'common',
  price: 50,
  cost: 2,
  targets: ['friendlyAlly'],
  onPlay(ctx) {
    buffAt(ctx, ctx.targets[0], 3, 4)
  },
  ai: { value: 2, tags: ['buff'] },
  art: {
    subject: 'Might of the Tar Pits: a warrior surrounded by a surging aura of power, prehistoric jungle era style'
  }
})

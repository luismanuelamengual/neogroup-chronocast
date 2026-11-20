import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { buffAt } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'blessing',
  type: 'ability',
  name: 'Blessing',
  text: 'An ally of yours gains +3 attack and +8 health.',
  flavor: 'Go forth, and be more.',
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'mystic' },
  rarity: 'common',
  price: 50,
  cost: 2,
  targets: ['friendlyAlly'],
  onPlay(ctx) {
    buffAt(ctx, ctx.targets[0], 3, 8)
  },
  ai: { value: 2, tags: ['buff'] },
  art: {
    subject: 'a beam of light shining from the sky onto a warrior, glowing symbols around him'
  }
})

import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { buffAt, gainArmor } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'divine-shield',
  type: 'ability',
  name: 'Divine Shield',
  text: 'An ally of yours gains +14 health and your hero gains 6 armor. Instant.',
  flavor: 'Nothing touches the faithful.',
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'mystic' },
  rarity: 'uncommon',
  price: 160,
  cost: 2,
  speed: 'instant',
  targets: ['friendlyAlly'],
  onPlay(ctx) {
    buffAt(ctx, ctx.targets[0], 0, 14)
    gainArmor(ctx, ctx.owner, 6)
  },
  ai: { value: 2, tags: ['buff', 'defense'] },
  art: {
    subject: 'a warrior inside a shimmering golden bubble of holy light, weapons bouncing off'
  }
})

import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { buffAt } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'vigor-of-the-shieldwall',
  type: 'ability',
  name: 'Vigor of the Shieldwall',
  text: 'An ally of yours gains +5 attack and +7 health.',
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'warrior' },
  rarity: 'uncommon',
  price: 190,
  cost: 4,
  targets: ['friendlyAlly'],
  onPlay(ctx) {
    buffAt(ctx, ctx.targets[0], 5, 7)
  },
  ai: { value: 4, tags: ['buff'] },
  art: {
    subject: 'Vigor of the Shieldwall: a warrior surrounded by a surging aura of power, warrior style'
  }
})

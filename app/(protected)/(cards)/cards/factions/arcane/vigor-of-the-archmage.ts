import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { buffAt } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'vigor-of-the-archmage',
  type: 'ability',
  name: 'Vigor of the Archmage',
  text: 'An ally of yours gains +4 attack and +5 health.',
  faction: 'arcane',
  restriction: { kind: 'faction', faction: 'arcane' },
  rarity: 'uncommon',
  price: 170,
  cost: 3,
  targets: ['friendlyAlly'],
  onPlay(ctx) {
    buffAt(ctx, ctx.targets[0], 4, 5)
  },
  ai: { value: 3, tags: ['buff'] },
  art: {
    subject: 'Vigor of the Archmage: a warrior surrounded by a surging aura of power, medieval magic order style'
  }
})

import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { buffAt } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'rally-of-grace',
  type: 'ability',
  name: 'Rally of Grace',
  text: 'An ally of yours gains +4 attack and +5 health.',
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'mystic' },
  rarity: 'uncommon',
  price: 170,
  cost: 3,
  targets: ['friendlyAlly'],
  onPlay(ctx) {
    buffAt(ctx, ctx.targets[0], 4, 5)
  },
  ai: { value: 3, tags: ['buff'] },
  art: {
    subject: 'Rally of Grace: a warrior surrounded by a surging aura of power, mystic healer style'
  }
})

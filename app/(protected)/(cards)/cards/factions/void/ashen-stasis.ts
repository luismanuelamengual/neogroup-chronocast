import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { returnAt } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'ashen-stasis',
  type: 'ability',
  name: 'Ashen Stasis',
  text: "Return an enemy ally to its owner's hand. Fast.",
  faction: 'void',
  restriction: { kind: 'faction', faction: 'void' },
  rarity: 'common',
  price: 50,
  cost: 2,
  speed: 'fast',
  targets: ['enemyAlly'],
  onPlay(ctx) {
    returnAt(ctx, ctx.targets[0])
  },
  ai: { value: 2, tags: ['removal'] },
  art: {
    subject:
      'Ashen Stasis: a clock frozen inside a floating crystal, its hands stopped, against a starry sky, close-up filling the frame, scarlet accents, dark end-of-time void style'
  }
})

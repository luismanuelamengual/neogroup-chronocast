import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { returnAt } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'binding-of-ruin',
  type: 'ability',
  name: 'Binding of Ruin',
  text: "Return an enemy ally to its owner's hand. Fast.",
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'mage' },
  rarity: 'epic',
  price: 1560,
  cost: 2,
  speed: 'fast',
  targets: ['enemyAlly'],
  onPlay(ctx) {
    returnAt(ctx, ctx.targets[0])
  },
  ai: { value: 3, tags: ['removal'] },
  art: {
    subject:
      'Binding of Ruin: glowing chains coiling tightly around nothing, locking shut, above a calm lake at dusk, bursting toward the viewer, gold accents, mage style'
  }
})

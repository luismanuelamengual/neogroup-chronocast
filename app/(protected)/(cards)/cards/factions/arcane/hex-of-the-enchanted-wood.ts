import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { returnAt } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'hex-of-the-enchanted-wood',
  type: 'ability',
  name: 'Hex of the Enchanted Wood',
  text: "Return an enemy ally to its owner's hand. Fast.",
  flavor: 'The trees remember who cut them.',
  faction: 'arcane',
  restriction: { kind: 'faction', faction: 'arcane' },
  rarity: 'uncommon',
  price: 155,
  cost: 2,
  speed: 'fast',
  targets: ['enemyAlly'],
  onPlay(ctx) {
    returnAt(ctx, ctx.targets[0])
  },
  ai: { value: 2, tags: ['removal'] },
  art: {
    subject:
      'Hex of the Enchanted Wood: a glowing hex sigil burning in the air, above a calm lake at dusk, diagonal dynamic composition, saffron yellow accents, medieval magic order style'
  }
})

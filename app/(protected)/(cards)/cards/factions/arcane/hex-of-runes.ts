import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { draw, returnAt } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'hex-of-runes',
  type: 'ability',
  name: 'Hex of Runes',
  text: "Return an enemy ally to its owner's hand and draw a card. Fast.",
  faction: 'arcane',
  restriction: { kind: 'faction', faction: 'arcane' },
  rarity: 'epic',
  price: 2040,
  cost: 5,
  speed: 'fast',
  targets: ['enemyAlly'],
  onPlay(ctx) {
    returnAt(ctx, ctx.targets[0])
    draw(ctx, ctx.owner, 1)
  },
  ai: { value: 6, tags: ['draw', 'removal'] },
  art: {
    subject:
      'Hex of Runes: a glowing hex sigil burning in the air, in a dark forest clearing, bursting toward the viewer, indigo accents, medieval magic order style'
  }
})

import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { draw, returnAt } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'snare-of-the-ambush',
  type: 'ability',
  name: 'Snare of the Ambush',
  text: "Return an enemy ally to its owner's hand and draw a card. Fast.",
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'hunter' },
  rarity: 'rare',
  price: 690,
  cost: 5,
  speed: 'fast',
  targets: ['enemyAlly'],
  onPlay(ctx) {
    returnAt(ctx, ctx.targets[0])
    draw(ctx, ctx.owner, 1)
  },
  ai: { value: 6, tags: ['draw', 'removal'] },
  art: {
    subject: 'Snare of the Ambush: glowing chains binding a struggling creature, hunter style'
  }
})

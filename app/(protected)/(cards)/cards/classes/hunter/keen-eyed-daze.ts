import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { draw, returnAt } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'keen-eyed-daze',
  type: 'ability',
  name: 'Keen-Eyed Daze',
  text: "Return an enemy ally to its owner's hand and draw a card. Fast.",
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'hunter' },
  rarity: 'uncommon',
  price: 190,
  cost: 4,
  speed: 'fast',
  targets: ['enemyAlly'],
  onPlay(ctx) {
    returnAt(ctx, ctx.targets[0])
    draw(ctx, ctx.owner, 1)
  },
  ai: { value: 4, tags: ['draw', 'removal'] },
  art: {
    subject:
      'Keen-Eyed Daze: spinning stars and swirls circling a dented helmet, in a misty valley, bursting toward the viewer, scarlet accents, hunter style'
  }
})

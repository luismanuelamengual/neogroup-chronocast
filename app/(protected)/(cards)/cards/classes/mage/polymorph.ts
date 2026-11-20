import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { draw, returnAt } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'polymorph',
  type: 'ability',
  name: 'Polymorph',
  text: "Return an enemy ally to its owner's hand and draw a card.",
  flavor: 'It is a frog now. A very confused frog.',
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'mage' },
  rarity: 'uncommon',
  price: 180,
  cost: 4,
  targets: ['enemyAlly'],
  onPlay(ctx) {
    returnAt(ctx, ctx.targets[0])
    draw(ctx, ctx.owner, 1)
  },
  ai: { value: 4, tags: ['control', 'draw'] },
  art: {
    subject: 'a monster being turned into a small surprised frog in a puff of sparkling magic'
  }
})

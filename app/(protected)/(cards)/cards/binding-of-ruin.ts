import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { draw, returnAt } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'binding-of-ruin',
  type: 'ability',
  subtype: 'spell',
  name: 'Binding of Ruin',
  text: 'Return an ally of yours to your hand and draw a card. Fast.',
  flavor: 'Chains forged from broken things.',
  faction: 'arcane',
  restriction: { factions: ['arcane'] },
  rarity: 'epic',
  price: 1000,
  cost: 2,
  speed: 'fast',
  targets: ['friendlyAlly'],
  onPlay(ctx) {
    returnAt(ctx, ctx.targets[0])
    draw(ctx, ctx.owner, 1)
  },
  ai: { value: 3, tags: ['removal'] },
  art: {
    subject:
      'Binding of Ruin: glowing chains coiling tightly around nothing, locking shut, above a calm lake at dusk, bursting toward the viewer, gold accents, mage style'
  }
})

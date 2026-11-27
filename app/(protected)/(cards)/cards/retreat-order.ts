import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { returnAt } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'retreat-order',
  type: 'ability',
  subtype: 'tactic',
  name: 'Retreat!',
  text: "Return an enemy ally to its owner's hand. Fast.",
  flavor: 'Live to fight another hour.',
  faction: 'neutral',
  restriction: { sides: ['dawn'] },
  rarity: 'common',
  price: 60,
  cost: 2,
  speed: 'fast',
  targets: ['enemyAlly'],
  onPlay(ctx) {
    returnAt(ctx, ctx.targets[0])
  },
  ai: { value: 2, tags: ['removal'] },
  art: {
    subject:
      'Retreat!: a brass war horn blowing a retreat signal on a hill at dawn, a banner flapping behind it, close-up filling the frame, gold accents, time rift wanderer style'
  }
})

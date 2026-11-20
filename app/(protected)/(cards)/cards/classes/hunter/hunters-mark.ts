import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damage, draw } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'hunters-mark',
  type: 'ability',
  name: "Hunter's Mark",
  text: 'Deal 4 damage to an enemy ally and draw a card. Instant.',
  flavor: 'Once marked, there is nowhere to hide.',
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'hunter' },
  rarity: 'rare',
  price: 490,
  cost: 1,
  speed: 'instant',
  targets: ['enemyAlly'],
  onPlay(ctx) {
    damage(ctx, ctx.targets[0], 4)
    draw(ctx, ctx.owner, 1)
  },
  ai: { value: 2, tags: ['removal', 'draw'] },
  art: {
    subject: "a glowing red hunter's mark symbol appearing over the head of a creature in a dark forest"
  }
})

import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { draw, stunAt } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'shackle-of-the-pack',
  type: 'ability',
  name: 'Shackle of the Pack',
  text: 'Stun an enemy ally for two phases and draw a card. Fast.',
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'hunter' },
  rarity: 'uncommon',
  price: 190,
  cost: 4,
  speed: 'fast',
  targets: ['enemyAlly'],
  onPlay(ctx) {
    stunAt(ctx, ctx.targets[0], 1)
    draw(ctx, ctx.owner, 1)
  },
  ai: { value: 4, tags: ['draw', 'removal'] },
  art: {
    subject: 'Shackle of the Pack: glowing chains binding a struggling creature, hunter style'
  }
})

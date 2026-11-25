import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { draw, stunAt } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'frost-of-the-pack',
  type: 'ability',
  name: 'Frost of the Pack',
  text: 'Stun an enemy ally for two phases and draw a card. Fast.',
  flavor: 'Wolves run faster on frozen ground.',
  faction: 'neutral',
  restriction: { classes: ['hunter'] },
  rarity: 'rare',
  price: 570,
  cost: 3,
  speed: 'fast',
  targets: ['enemyAlly'],
  onPlay(ctx) {
    stunAt(ctx, ctx.targets[0], 1)
    draw(ctx, ctx.owner, 1)
  },
  ai: { value: 4, tags: ['draw', 'removal'] },
  art: {
    subject:
      'Frost of the Pack: a spiral of razor-sharp frost shards, over a desert of red dunes, seen from above, indigo accents, hunter style'
  }
})

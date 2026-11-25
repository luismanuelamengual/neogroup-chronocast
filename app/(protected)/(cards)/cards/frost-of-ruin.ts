import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { draw, stunAt } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'frost-of-ruin',
  type: 'ability',
  name: 'Frost of Ruin',
  text: 'Stun an enemy ally for two phases and draw a card. Fast.',
  flavor: 'The cold that comes after the end.',
  faction: 'neutral',
  restriction: { classes: ['mage'] },
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
    subject:
      'Frost of Ruin: a spiral of razor-sharp frost shards, in a snowy pass, close-up filling the frame, emerald accents, mage style'
  }
})

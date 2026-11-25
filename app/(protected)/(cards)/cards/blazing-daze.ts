import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { draw, stunAt } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'blazing-daze',
  type: 'ability',
  name: 'Blazing Daze',
  text: 'Stun an enemy ally for two phases and draw a card. Fast.',
  flavor: 'Too bright to think.',
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
      'Blazing Daze: spinning stars and swirls circling a dented helmet, above a calm lake at dusk, swirling around the center, violet accents, mage style'
  }
})

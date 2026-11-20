import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { draw, gainArmor } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'last-stand',
  type: 'ability',
  name: 'Last Stand',
  text: 'Your hero gains 10 armor. If your hero is below half its health, your hero gains 10 armor and draw a card. Instant.',
  flavor: 'Not today.',
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'warrior' },
  rarity: 'uncommon',
  price: 160,
  cost: 2,
  speed: 'instant',
  onPlay(ctx) {
    gainArmor(ctx, ctx.owner, 10)

    if (ctx.engine.player(ctx.owner).hero.health * 2 < ctx.engine.player(ctx.owner).hero.maxHealth) {
      gainArmor(ctx, ctx.owner, 10)
      draw(ctx, ctx.owner, 1)
    }
  },
  ai: { value: 2, tags: ['defense', 'draw'] },
  art: {
    subject: 'a wounded warrior on one knee raising his shield defiantly, a golden aura around him'
  }
})

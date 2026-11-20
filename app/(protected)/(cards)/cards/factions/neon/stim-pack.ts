import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { draw, heal } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'stim-pack',
  type: 'item',
  name: 'Stim Pack',
  text: 'Your hero heals 6 and draw a card. Fast.',
  flavor: 'Tastes like batteries.',
  faction: 'neon',
  restriction: { kind: 'faction', faction: 'neon' },
  rarity: 'common',
  price: 45,
  cost: 1,
  speed: 'fast',
  onPlay(ctx) {
    heal(ctx, { player: ctx.owner, slot: 'hero' }, 6)
    draw(ctx, ctx.owner, 1)
  },
  ai: { value: 1, tags: ['heal', 'draw'] },
  art: {
    subject: 'a futuristic medical stim pack with glowing vials on a metal tray'
  }
})

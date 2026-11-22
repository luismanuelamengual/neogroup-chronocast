import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { draw, factionAllies } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'scent-of-prey',
  type: 'ability',
  name: 'Scent of Prey',
  text: 'Draw a card. If you have a Primal ally, draw 2 instead.',
  flavor: 'The pack always knows where to go.',
  faction: 'primal',
  restriction: { kind: 'faction', faction: 'primal' },
  rarity: 'common',
  price: 55,
  cost: 1,
  onPlay(ctx) {
    draw(ctx, ctx.owner, factionAllies(ctx, ctx.owner, 'primal') > 0 ? 2 : 1)
  },
  ai: { value: 2, tags: ['draw'] },
  art: {
    subject: 'a pack of raptors sniffing the air in a misty jungle, following a glowing trail'
  }
})

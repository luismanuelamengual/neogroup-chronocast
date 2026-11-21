import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { heal } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'temple-acolyte',
  type: 'ally',
  name: 'Temple Acolyte',
  text: 'On enter: your hero heals 5.',
  flavor: 'She lights a candle for every soldier who comes back.',
  faction: 'bronze',
  restriction: { kind: 'faction', faction: 'bronze' },
  rarity: 'common',
  price: 50,
  cost: 2,
  attack: 5,
  health: 7,
  onEnter(ctx) {
    heal(ctx, { player: ctx.owner, slot: 'hero' }, 5)
  },
  ai: { value: 2, tags: ['heal'] },
  art: {
    subject: 'a young temple acolyte in white and gold robes holding an oil lamp between marble columns'
  }
})

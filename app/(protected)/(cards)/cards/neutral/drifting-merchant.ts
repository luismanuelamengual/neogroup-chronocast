import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { heal } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'drifting-merchant',
  type: 'ally',
  name: 'Drifting Merchant',
  text: 'On enter: your hero heals 6.',
  flavor: "Potions from tomorrow, at yesterday's prices.",
  faction: 'neutral',
  restriction: { kind: 'any' },
  rarity: 'common',
  price: 50,
  cost: 2,
  attack: 6,
  health: 10,
  onEnter(ctx) {
    heal(ctx, { player: ctx.owner, slot: 'hero' }, 6)
  },
  ai: { value: 2, tags: ['heal'] },
  art: {
    subject: 'a cheerful traveling merchant with a backpack full of glowing bottles from many eras'
  }
})

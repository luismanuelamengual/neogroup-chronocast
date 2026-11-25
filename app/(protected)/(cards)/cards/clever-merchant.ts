import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { destroyArtifact } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'clever-merchant',
  type: 'ally',
  name: 'Clever Merchant',
  text: 'When it enters: destroy the priciest enemy artifact.',
  flavor: 'Everything has a price. Even time.',
  faction: 'neutral',
  restriction: {},
  rarity: 'rare',
  price: 510,
  cost: 2,
  tribe: 'drifter',
  attack: 3,
  health: 6,
  onEnter(ctx) {
    destroyArtifact(ctx, ctx.opponent)
  },
  ai: { value: 3, tags: ['antiGear'] },
  art: {
    subject:
      'Clever Merchant: a plump adult elf woman with ruddy skin, charcoal grey hair in an afro and war paint stripes, wearing a straw hat, dressed in a wool shawl hung with tiny bells, balancing a scale heaped with glowing trinkets, with calm focus, cobalt blue accents, time rift wanderer style'
  }
})

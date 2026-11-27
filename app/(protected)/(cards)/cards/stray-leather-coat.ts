import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { seekSubtype } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'stray-leather-coat',
  type: 'armor',
  subtype: 'leather',
  name: 'Stray Leather Coat',
  text: 'When it is equipped: draw the first bow of your deck.',
  flavor: 'Found in one century, lost in three more.',
  faction: 'primal',
  restriction: { factions: ['primal'] },
  rarity: 'uncommon',
  price: 160,
  cost: 3,
  armor: 2,
  durability: 5,
  onPlay(ctx) {
    seekSubtype(ctx, ctx.owner, 'bow')
  },
  ai: { value: 3 },
  art: {
    subject:
      'Stray Leather Coat: a single coat made of rusted iron and chains, on a mossy rock, bursting toward the viewer, rose pink accents, prehistoric jungle era style'
  }
})

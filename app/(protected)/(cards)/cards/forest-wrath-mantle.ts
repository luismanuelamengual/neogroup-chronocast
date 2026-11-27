import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { draw } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'forest-wrath-mantle',
  type: 'armor',
  subtype: 'leather',
  name: 'Forest Wrath Mantle',
  text: 'When an ally of yours dies: draw a card.',
  flavor: 'The forest grieves, and remembers.',
  faction: 'primal',
  restriction: { factions: ['primal'] },
  rarity: 'uncommon',
  price: 160,
  cost: 4,
  armor: 2,
  durability: 6,
  onOwnAllyDeath(ctx) {
    draw(ctx, ctx.owner, 1)
  },
  ai: { value: 4, tags: ['draw'] },
  art: {
    subject:
      'Forest Wrath Mantle: a mantle of dark leather and living leaves with a wolf skull clasp, hanging on a branch, centered, forest green accents, prehistoric jungle era style'
  }
})

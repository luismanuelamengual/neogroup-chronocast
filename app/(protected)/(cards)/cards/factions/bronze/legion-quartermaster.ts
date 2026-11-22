import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { draw, factionAllies } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'legion-quartermaster',
  type: 'ally',
  name: 'Legion Quartermaster',
  text: 'When it enters: draw a card for each other Bronze ally you have (up to 2).',
  flavor: 'Every shield counted, every spear accounted for.',
  faction: 'bronze',
  restriction: { kind: 'faction', faction: 'bronze' },
  rarity: 'uncommon',
  price: 170,
  cost: 3,
  attack: 5,
  health: 10,
  onEnter(ctx) {
    draw(ctx, ctx.owner, Math.min(2, factionAllies(ctx, ctx.owner, 'bronze') - 1))
  },
  ai: { value: 3, tags: ['draw'] },
  art: {
    subject: 'a roman officer with a wax tablet checking crates of shields and spears in a busy supply camp'
  }
})

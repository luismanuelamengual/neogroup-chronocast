import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { stunRandomAlly } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'frost-adept',
  type: 'ally',
  name: 'Frost Adept',
  text: 'On enter: stun a random enemy ally.',
  flavor: 'Stay still. It will only hurt a little.',
  faction: 'arcane',
  restriction: { kind: 'faction', faction: 'arcane' },
  rarity: 'uncommon',
  price: 170,
  cost: 3,
  attack: 8,
  health: 18,
  onEnter(ctx) {
    stunRandomAlly(ctx, ctx.opponent)
  },
  ai: { value: 3, tags: ['control'] },
  art: {
    subject: 'a pale mage in an icy blue robe freezing a goblin solid with a beam of frost'
  }
})

import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { draw } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'grave-whisperer',
  type: 'ally',
  name: 'Grave Whisperer',
  text: 'When it dies: draw a card.',
  flavor: 'The dead tell her everything. She tells no one.',
  faction: 'void',
  restriction: { kind: 'faction', faction: 'void' },
  rarity: 'common',
  price: 45,
  cost: 1,
  attack: 3,
  health: 5,
  onDeath(ctx) {
    draw(ctx, ctx.owner, 1)
  },
  ai: { value: 1, tags: ['draw'] },
  art: {
    subject: 'a pale hooded girl kneeling by a cracked tombstone floating in space, green wisps around her'
  }
})

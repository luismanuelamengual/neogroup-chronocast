import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { gainChronos } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'pickaxe-of-borrowed-hours',
  type: 'weapon',
  subtype: 'tool',
  name: 'Pickaxe of Borrowed Hours',
  text: 'When your hero attacks with it: you gain 1 Chronos this phase.',
  flavor: 'It digs through time instead of stone.',
  faction: 'clockwork',
  restriction: { factions: ['clockwork'] },
  rarity: 'exotic',
  element: 'time',
  price: 3080,
  cost: 2,
  attack: 3,
  durability: 3,
  onAttack(ctx) {
    gainChronos(ctx, ctx.owner, 1)
  },
  ai: { value: 4 },
  art: {
    subject:
      'Pickaxe of Borrowed Hours: a single pickaxe made of chrome with neon light strips, surrounded by floating clock hands and glowing sand, on a fur rug, close-up filling the frame, gold accents, steampunk steam era style'
  }
})

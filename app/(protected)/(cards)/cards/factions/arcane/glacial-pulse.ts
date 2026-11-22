import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { allyRefs, freeze } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'glacial-pulse',
  type: 'ability',
  name: 'Glacial Pulse',
  text: 'Freeze every enemy ally for the rest of this phase and the next.',
  flavor: 'Everything stops. Even the screams.',
  faction: 'arcane',
  restriction: { kind: 'faction', faction: 'arcane' },
  rarity: 'uncommon',
  price: 200,
  cost: 3,
  onPlay(ctx) {
    for (const ref of allyRefs(ctx, ctx.opponent)) {
      freeze(ctx, ref, 1)
    }
  },
  ai: { value: 3, tags: ['removal'] },
  art: {
    subject: 'a mage releasing a ring of ice that freezes enemy warriors solid in mid motion'
  }
})

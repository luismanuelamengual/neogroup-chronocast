import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { heal, healAllAllies } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'sister-elowen',
  type: 'ally',
  name: 'Sister Elowen',
  text: 'At the end of each phase, your allies heal 3.',
  flavor: 'She was his first student. Now she guards his back.',
  faction: 'arcane',
  restriction: { kind: 'hero', heroId: 'aldric-dawnkeeper' },
  rarity: 'rare',
  price: 560,
  cost: 3,
  attack: 7,
  health: 22,
  keywords: ['guardian'],
  ability: {
    name: 'Blessing',
    text: 'Your hero heals 8.',
    cost: 1,
    activate(ctx) {
      heal(ctx, { player: ctx.owner, slot: 'hero' }, 8)
    }
  },
  onPhaseEnd(ctx) {
    healAllAllies(ctx, ctx.owner, 3)
  },
  ai: { value: 4, tags: ['ability', 'heal', 'defense'] },
  art: {
    subject: 'a young warrior nun with a shield and a glowing white staff standing guard in a cathedral'
  }
})

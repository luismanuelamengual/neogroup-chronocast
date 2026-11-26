import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { heal, weakenAllAllies } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'nyx-hollowsong',
  type: 'hero',
  name: 'Nyx Hollowsong',
  text: 'Total Weakening (5): every enemy ally gets -2 attack. At the end of each phase, your hero heals 2.',
  flavor: 'Her song reaches the dead. They always come back to listen.',
  faction: 'void',
  side: 'dawn',
  restriction: { heroes: ['nyx-hollowsong'] },
  rarity: 'rare',
  cost: 0,
  health: 55,
  ability: {
    name: 'Total Weakening',
    text: 'Every enemy ally gets -2 attack.',
    cost: 5,
    ai: { tags: ['removal'] },
    activate(ctx) {
      weakenAllAllies(ctx, ctx.opponent, 2)
    }
  },
  onPhaseEnd(ctx) {
    heal(ctx, { player: ctx.owner, slot: 'hero' }, 2)
  },
  ai: { value: 0 },
  art: {
    subject:
      'a pale singer with long black hair and a dress of night, singing as ghostly green souls rise around her in a floating graveyard'
  }
})

import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { gainArmor, heal, healAllAllies } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'aldric-dawnkeeper',
  type: 'hero',
  name: 'Aldric Dawnkeeper',
  text: 'Dawnlight (2): your hero heals 5 and your allies heal 3. At the end of each phase, your hero gains 2 armor.',
  flavor: 'Every night ends. He makes sure of it.',
  faction: 'arcane',
  heroClass: 'mystic',
  restriction: { kind: 'hero', heroId: 'aldric-dawnkeeper' },
  rarity: 'epic',
  cost: 0,
  health: 60,
  ability: {
    name: 'Dawnlight',
    text: 'Your hero heals 5 and your allies heal 3.',
    cost: 2,
    activate(ctx) {
      heal(ctx, { player: ctx.owner, slot: 'hero' }, 5)
      healAllAllies(ctx, ctx.owner, 3)
    }
  },
  onPhaseEnd(ctx) {
    gainArmor(ctx, ctx.owner, 2)
  },
  ai: { value: 0 },
  art: {
    subject:
      'a kind old paladin monk with a white beard and silver armor holding a lantern that shines like the sunrise, in a cathedral'
  }
})

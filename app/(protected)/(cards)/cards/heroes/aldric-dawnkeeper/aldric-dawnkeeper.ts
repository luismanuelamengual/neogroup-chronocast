import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { healAllAllies, healHero } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'aldric-dawnkeeper',
  type: 'hero',
  name: 'Aldric Dawnkeeper',
  text: 'Dawnlight (4): your hero heals 12 and your allies heal 6. At the end of each phase, your hero heals 2.',
  flavor: 'Every night ends. He makes sure of it.',
  faction: 'arcane',
  heroClass: 'mystic',
  restriction: { kind: 'hero', heroId: 'aldric-dawnkeeper' },
  rarity: 'epic',
  cost: 0,
  health: 60,
  ability: {
    name: 'Dawnlight',
    text: 'Your hero heals 12 and your allies heal 6.',
    cost: 4,
    ai: { tags: ['heal'] },
    activate(ctx) {
      healHero(ctx, 12)
      healAllAllies(ctx, ctx.owner, 6)
    }
  },
  onPhaseEnd(ctx) {
    healHero(ctx, 2)
  },
  ai: { value: 0 },
  art: {
    subject:
      'a kind old paladin monk with a white beard and silver armor holding a lantern that shines like the sunrise, in a cathedral'
  }
})

import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { heal, reviveFromDiscard } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'nyx-hollowsong',
  type: 'hero',
  name: 'Nyx Hollowsong',
  text: 'Call the Fallen (2): a random ally of your discard pile returns to play. At the end of each phase, your hero heals 2.',
  flavor: 'Her song reaches the dead. They always come back to listen.',
  faction: 'void',
  heroClass: 'mystic',
  restriction: { kind: 'hero', heroId: 'nyx-hollowsong' },
  rarity: 'rare',
  cost: 0,
  health: 50,
  ability: {
    name: 'Call the Fallen',
    text: 'A random ally of your discard pile returns to play.',
    cost: 2,
    activate(ctx) {
      reviveFromDiscard(ctx, ctx.owner)
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

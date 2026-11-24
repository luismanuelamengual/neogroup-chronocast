import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { heal, reviveFromDiscard } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'nyx-hollowsong',
  type: 'hero',
  name: 'Nyx Hollowsong',
  text: 'Call the Fallen (4): two random allies of your discard pile return to play. At the end of each phase, your hero heals 2.',
  flavor: 'Her song reaches the dead. They always come back to listen.',
  faction: 'void',
  heroClass: 'mystic',
  restriction: { kind: 'hero', heroId: 'nyx-hollowsong' },
  rarity: 'rare',
  cost: 0,
  health: 55,
  ability: {
    name: 'Call the Fallen',
    text: 'Two random allies of your discard pile return to play.',
    cost: 4,
    ai: { tags: ['revive'] },
    activate(ctx) {
      reviveFromDiscard(ctx, ctx.owner)
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

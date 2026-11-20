import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { heal, reviveFromDiscard } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'the-singing-graves',
  type: 'location',
  reward: true,
  name: 'The Singing Graves',
  text: 'At the start of each phase, a random ally of your discard pile returns to play and your hero heals 3.',
  flavor: 'Listen closely. They are singing your name.',
  faction: 'void',
  restriction: { kind: 'hero', heroId: 'nyx-hollowsong' },
  rarity: 'legendary',
  cost: 4,
  keywords: ['unique'],
  onPhaseStart(ctx) {
    reviveFromDiscard(ctx, ctx.owner)
    heal(ctx, { player: ctx.owner, slot: 'hero' }, 3)
  },
  ai: { value: 6, tags: ['revive', 'heal'] },
  art: {
    subject: 'a graveyard floating in space where glowing green souls sing above every tombstone'
  }
})

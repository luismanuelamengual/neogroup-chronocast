import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { heal } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'grail-of-ages',
  type: 'artifact',
  name: 'Grail of Ages',
  text: 'Artifact. At the start of each phase, your hero heals 4.',
  flavor: 'Every century poured a drop.',
  faction: 'neutral',
  restriction: { kind: 'any' },
  rarity: 'uncommon',
  price: 190,
  cost: 2,
  onPhaseStart(ctx) {
    heal(ctx, { player: ctx.owner, slot: 'hero' }, 4)
  },
  ai: { value: 3, tags: ['heal'] },
  art: {
    subject: 'an ancient golden grail overflowing with shimmering light, engraved with clocks of every era'
  }
})

import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { buffAllies, discardSize } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'boneyard',
  type: 'artifact',
  name: 'The Boneyard',
  text: 'Artifact. At the start of each phase, if your discard pile has 5 or more cards, your allies gain +1 attack and +1 health.',
  flavor: 'Every bone here was once a hero.',
  faction: 'void',
  restriction: { kind: 'faction', faction: 'void' },
  rarity: 'uncommon',
  price: 170,
  cost: 3,
  onPhaseStart(ctx) {
    if (discardSize(ctx, ctx.owner) >= 5) {
      buffAllies(ctx, ctx.owner, 1, 1)
    }
  },
  ai: { value: 3, tags: ['buff'] },
  art: {
    subject: 'a vast floating field of bones and broken weapons under a dark green sky'
  }
})

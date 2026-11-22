import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { buffAllies, healAllAllies } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'the-ancestor-tree',
  type: 'artifact',
  name: 'The Ancestor Tree',
  text: 'Artifact. At the start of each phase, your allies heal 4 and your allies gain +1 attack and +2 health.',
  flavor: 'Every leaf is a name. Every root is a story.',
  faction: 'primal',
  restriction: { kind: 'hero', heroId: 'ooma-bonewhisper' },
  rarity: 'legendary',
  price: 4500,
  cost: 4,
  keywords: ['unique'],
  onPhaseStart(ctx) {
    healAllAllies(ctx, ctx.owner, 4)
    buffAllies(ctx, ctx.owner, 1, 2)
  },
  ai: { value: 6, tags: ['heal', 'buff'] },
  art: {
    subject:
      'a gigantic ancient tree with glowing green spirits in its branches and bones hanging from it, a tribe gathered at its roots'
  }
})

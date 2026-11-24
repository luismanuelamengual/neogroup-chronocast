import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { healAllAllies } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'old-tusk',
  type: 'ally',
  reward: true,
  name: 'Old Tusk',
  text: 'When it enters: your allies heal 3.',
  flavor: "Ooma's oldest companion, and her heaviest.",
  faction: 'primal',
  restriction: { kind: 'hero', heroId: 'ooma-bonewhisper' },
  rarity: 'rare',
  cost: 5,
  tribe: 'beast',
  keywords: ['guardian'],
  attack: 5,
  health: 13,
  onEnter(ctx) {
    healAllAllies(ctx, ctx.owner, 3)
  },
  ai: { value: 5, tags: ['heal'] },
  art: {
    subject: 'an ancient woolly mammoth with broken tusks and tribal paint, children riding on its back'
  }
})

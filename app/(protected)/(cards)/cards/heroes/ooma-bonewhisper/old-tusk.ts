import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { healAllAllies } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'old-tusk',
  type: 'ally',
  name: 'Old Tusk',
  text: 'On enter: your allies heal 6.',
  flavor: 'He carried the tribe across the ice. Twice.',
  faction: 'primal',
  restriction: { kind: 'hero', heroId: 'ooma-bonewhisper' },
  rarity: 'rare',
  price: 640,
  cost: 5,
  attack: 16,
  health: 44,
  keywords: ['guardian'],
  onEnter(ctx) {
    healAllAllies(ctx, ctx.owner, 6)
  },
  ai: { value: 6, tags: ['heal', 'defense'] },
  art: {
    subject: 'an ancient woolly mammoth with broken tusks and tribal paint, children riding on its back'
  }
})

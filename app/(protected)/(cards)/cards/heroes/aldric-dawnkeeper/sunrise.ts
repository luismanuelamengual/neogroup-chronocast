import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { buffAllies, healAllAllies } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'sunrise',
  type: 'ability',
  name: 'Sunrise',
  text: 'Your allies heal 10 and your allies gain +2 attack and +2 health.',
  flavor: 'The light returns. So does hope.',
  faction: 'arcane',
  restriction: { kind: 'hero', heroId: 'aldric-dawnkeeper' },
  rarity: 'uncommon',
  price: 180,
  cost: 4,
  onPlay(ctx) {
    healAllAllies(ctx, ctx.owner, 10)
    buffAllies(ctx, ctx.owner, 2, 2)
  },
  ai: { value: 4, tags: ['heal', 'buff'] },
  art: {
    subject: 'a golden sunrise spreading over a battlefield, warriors standing up in its light'
  }
})

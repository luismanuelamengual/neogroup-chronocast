import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { heal } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'elixir-of-vigor',
  type: 'item',
  name: 'Elixir of Vigor',
  text: 'Your hero heals 25.',
  flavor: 'Good for another hundred years.',
  faction: 'neutral',
  restriction: { kind: 'any' },
  rarity: 'uncommon',
  price: 170,
  cost: 3,
  onPlay(ctx) {
    heal(ctx, { player: ctx.owner, slot: 'hero' }, 25)
  },
  ai: { value: 3, tags: ['heal'] },
  art: {
    subject: 'a tall ornate bottle of shimmering red elixir surrounded by sparkles'
  }
})

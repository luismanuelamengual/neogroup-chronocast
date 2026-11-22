import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { draw } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'bazaar-of-ages',
  type: 'artifact',
  name: 'Bazaar of Ages',
  text: 'Artifact. At the start of each phase, each player draws a card.',
  flavor: 'Everything is for sale. Even tomorrow.',
  faction: 'neutral',
  restriction: { kind: 'any' },
  rarity: 'uncommon',
  price: 180,
  cost: 2,
  onPhaseStart(ctx) {
    draw(ctx, ctx.owner, 1)
    draw(ctx, ctx.opponent, 1)
  },
  ai: { value: 3, tags: ['draw'] },
  art: {
    subject: 'a crowded market of colorful tents from every era, merchants trading glowing relics and clocks'
  }
})

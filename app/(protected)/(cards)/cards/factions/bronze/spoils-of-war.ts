import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { alliesOf, draw } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'spoils-of-war',
  type: 'artifact',
  name: 'Spoils of War',
  text: 'Artifact. At the start of each phase, if you have more allies than the enemy, draw a card.',
  flavor: 'To the winner, the chests.',
  faction: 'bronze',
  restriction: { kind: 'faction', faction: 'bronze' },
  rarity: 'rare',
  price: 520,
  cost: 3,
  onPhaseStart(ctx) {
    if (alliesOf(ctx, ctx.owner).length > alliesOf(ctx, ctx.opponent).length) {
      draw(ctx, ctx.owner, 1)
    }
  },
  ai: { value: 4, tags: ['draw'] },
  art: {
    subject: 'open treasure chests overflowing with gold coins and captured banners after a battle'
  }
})

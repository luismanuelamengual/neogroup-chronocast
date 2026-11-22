import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { reviveFromDiscard } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'luminous-squire',
  type: 'ally',
  name: 'Luminous Squire',
  text: 'When it dies: a random ally of your discard pile returns to play.',
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'mystic' },
  rarity: 'uncommon',
  price: 155,
  cost: 2,
  keywords: ['lifesteal'],
  attack: 3,
  health: 3,
  onDeath(ctx) {
    reviveFromDiscard(ctx, ctx.owner)
  },
  ai: { value: 2, tags: ['revive'] },
  art: {
    subject: 'a time-traveling adventurer, the luminous squire, charging into battle, mystic healer style'
  }
})

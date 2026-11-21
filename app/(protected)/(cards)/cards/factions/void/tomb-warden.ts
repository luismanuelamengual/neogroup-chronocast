import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { reviveFromDiscard } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'tomb-warden',
  type: 'ally',
  name: 'Tomb Warden',
  text: 'When it dies: a random ally of your discard pile returns to play.',
  flavor: 'He guards the dead. The dead guard him back.',
  faction: 'void',
  restriction: { kind: 'faction', faction: 'void' },
  rarity: 'rare',
  price: 640,
  cost: 5,
  attack: 12,
  health: 22,
  keywords: ['guardian'],
  onDeath(ctx) {
    reviveFromDiscard(ctx, ctx.owner)
  },
  ai: { value: 6, tags: ['revive', 'defense'] },
  art: {
    subject: 'a giant armored skeleton guarding the gate of a crypt floating in space, green lanterns hanging'
  }
})

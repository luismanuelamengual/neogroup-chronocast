import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { draw, heal } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'paradox-twin',
  type: 'ally',
  name: 'Paradox Twin',
  text: 'When it dies, draw a card and your hero heals 8.',
  flavor: 'There were two of them. There always will be.',
  faction: 'neutral',
  restriction: { kind: 'any' },
  rarity: 'rare',
  price: 600,
  cost: 4,
  attack: 14,
  health: 12,
  onDeath(ctx) {
    draw(ctx, ctx.owner, 1)
    heal(ctx, { player: ctx.owner, slot: 'hero' }, 8)
  },
  ai: { value: 4, tags: ['draw'] },
  art: {
    subject: 'two identical twins back to back, one glowing turquoise and one violet, mirror images of each other'
  }
})

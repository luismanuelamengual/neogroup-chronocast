import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { draw } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'encrypted-street-samurai',
  type: 'ally',
  name: 'Encrypted Street Samurai',
  text: 'When it dies: draw a card.',
  faction: 'neon',
  restriction: { kind: 'faction', faction: 'neon' },
  rarity: 'common',
  price: 55,
  cost: 3,
  tribe: 'enforcer',
  attack: 5,
  health: 6,
  onDeath(ctx) {
    draw(ctx, ctx.owner, 1)
  },
  ai: { value: 3, tags: ['draw'] },
  art: {
    subject: 'a cyberpunk street criminal, the encrypted street samurai, lunging forward, neon cyberpunk future style'
  }
})

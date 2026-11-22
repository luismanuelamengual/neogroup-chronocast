import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { buffTribe, draw } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'fixer-of-the-undercity',
  type: 'ally',
  name: 'Fixer of the Undercity',
  text: 'When it dies: your Enforcers gain +1 attack and +1 health. When it enters: draw a card.',
  faction: 'neon',
  restriction: { kind: 'faction', faction: 'neon' },
  rarity: 'exotic',
  price: 10800,
  cost: 2,
  tribe: 'enforcer',
  keywords: ['unique'],
  attack: 4,
  health: 7,
  onDeath(ctx) {
    buffTribe(ctx, ctx.owner, 'enforcer', 1, 1)
  },
  onEnter(ctx) {
    draw(ctx, ctx.owner, 1)
  },
  ai: { value: 4, tags: ['aggro', 'buff', 'draw', 'tribe'] },
  art: {
    subject:
      'a cyberpunk street criminal, the fixer of the undercity, crouching, ready to strike, neon cyberpunk future style'
  }
})

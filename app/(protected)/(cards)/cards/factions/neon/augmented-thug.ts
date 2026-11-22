import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { draw } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'augmented-thug',
  type: 'ally',
  name: 'Augmented Thug',
  text: 'When it enters: draw a card.',
  faction: 'neon',
  restriction: { kind: 'faction', faction: 'neon' },
  rarity: 'common',
  price: 50,
  cost: 2,
  tribe: 'enforcer',
  keywords: ['stealth'],
  attack: 1,
  health: 6,
  onEnter(ctx) {
    draw(ctx, ctx.owner, 1)
  },
  ai: { value: 2, tags: ['draw'] },
  art: {
    subject: 'a cyberpunk street criminal, the augmented thug, crouching, ready to strike, neon cyberpunk future style'
  }
})

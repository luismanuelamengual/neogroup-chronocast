import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { draw } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'ghost-of-the-mainframe',
  type: 'ally',
  name: 'Ghost of the Mainframe',
  text: 'When it enters: draw a card.',
  faction: 'neon',
  restriction: { kind: 'faction', faction: 'neon' },
  rarity: 'common',
  price: 65,
  cost: 4,
  tribe: 'netrunner',
  keywords: ['quick'],
  attack: 4,
  health: 8,
  onEnter(ctx) {
    draw(ctx, ctx.owner, 1)
  },
  ai: { value: 4, tags: ['draw'] },
  art: {
    subject:
      'a cyberpunk hacker with holographic screens, the ghost of the mainframe, crouching, ready to strike, neon cyberpunk future style'
  }
})

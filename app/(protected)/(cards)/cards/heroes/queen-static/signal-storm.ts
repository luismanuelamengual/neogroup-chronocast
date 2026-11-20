import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damageAllAllies, draw } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'signal-storm',
  type: 'ability',
  boss: true,
  name: 'Signal Storm',
  text: 'Deal 6 damage to every enemy ally and draw a card.',
  flavor: 'Every screen in the city screams at once.',
  faction: 'neon',
  restriction: { kind: 'hero', heroId: 'queen-static' },
  rarity: 'epic',
  cost: 4,
  onPlay(ctx) {
    damageAllAllies(ctx, ctx.opponent, 6)
    draw(ctx, ctx.owner, 1)
  },
  ai: { value: 5, tags: ['removal', 'draw'] },
  art: {
    subject: 'a storm of glitching neon signals and static lightning tearing through a city'
  }
})

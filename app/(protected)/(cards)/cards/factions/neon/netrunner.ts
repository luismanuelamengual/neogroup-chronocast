import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damage, draw } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'netrunner',
  type: 'ally',
  name: 'Netrunner',
  text: 'On enter: draw a card and deal 3 damage to the enemy hero.',
  flavor: 'Your firewall is cute.',
  faction: 'neon',
  restriction: { kind: 'faction', faction: 'neon' },
  rarity: 'uncommon',
  price: 170,
  cost: 3,
  attack: 8,
  health: 16,
  onEnter(ctx) {
    draw(ctx, ctx.owner, 1)
    damage(ctx, { player: ctx.opponent, slot: 'hero' }, 3)
  },
  ai: { value: 3, tags: ['draw', 'burn'] },
  art: {
    subject: 'a netrunner girl with glowing cables plugged into her neck, eyes full of scrolling code'
  }
})

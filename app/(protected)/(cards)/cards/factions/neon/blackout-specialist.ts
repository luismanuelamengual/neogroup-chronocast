import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { alliesOf, stun } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'blackout-specialist',
  type: 'ally',
  name: 'Blackout Specialist',
  text: 'On enter: stun every enemy ally.',
  flavor: 'Lights out. Game over.',
  faction: 'neon',
  restriction: { kind: 'faction', faction: 'neon' },
  rarity: 'epic',
  price: 1900,
  cost: 5,
  attack: 16,
  health: 14,
  keywords: ['stealth'],
  onEnter(ctx) {
    for (const unit of alliesOf(ctx, ctx.opponent)) {
      stun(ctx, unit)
    }
  },
  ai: { value: 6, tags: ['control'] },
  art: {
    subject: 'a special agent pressing a detonator as the whole neon city goes dark behind her'
  }
})

import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damage, draw } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'bloodclock',
  type: 'artifact',
  name: 'Bloodclock',
  text: 'At the start of each phase: your hero takes 2 shadow damage and you draw a card.',
  flavor: 'Each tick costs a drop. Each drop buys a secret.',
  faction: 'neutral',
  restriction: { sides: ['eclipse'] },
  rarity: 'common',
  price: 60,
  cost: 3,
  onPhaseStart(ctx) {
    damage(ctx, { player: ctx.owner, slot: 'hero' }, 2, 'shadow')
    draw(ctx, ctx.owner, 1)
  },
  ai: { value: 2, tags: ['draw'] },
  art: {
    subject:
      'Bloodclock: an ornate black iron pocket watch with dripping red liquid instead of hands, a thorny chain wrapped around it, floating over a dark altar, crimson glow'
  }
})

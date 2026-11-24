import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { destroyAt, draw } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'nightwire-net',
  type: 'trap',
  reward: true,
  name: 'Nightwire Net',
  text: 'When an enemy ally attacks: cancel the attack, destroy it and draw a card.',
  faction: 'neon',
  restriction: { kind: 'hero', heroId: 'vex-nightwire' },
  rarity: 'legendary',
  cost: 3,
  speed: 'instant',
  keywords: ['unique'],
  trigger: 'enemyAttack',
  onTrigger(ctx, event) {
    event.cancel()
    destroyAt(ctx, event.unit)
    draw(ctx, ctx.owner, 1)
  },
  ai: { value: 5, tags: ['draw', 'removal', 'trap'] },
  art: {
    subject:
      'Nightwire Net: a weighted rope net hidden under leaves, about to spring, dramatic backlight, turquoise accents'
  }
})

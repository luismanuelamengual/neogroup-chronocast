import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { destroyAt, draw } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'nightwire-net',
  type: 'trap',
  reward: true,
  name: 'Nightwire Net',
  text: 'When an enemy ally attacks: cancel the attack, destroy it and draw a card.',
  flavor: 'Invisible, unbreakable, inescapable.',
  faction: 'neon',
  restriction: { kind: 'hero', heroId: 'vex-nightwire' },
  rarity: 'legendary',
  cost: 3,
  keywords: ['unique'],
  trigger: 'enemyAttack',
  onTrigger(ctx, event) {
    event.cancel()
    destroyAt(ctx, event.unit)
    draw(ctx, ctx.owner, 1)
  },
  ai: { value: 5, tags: ['trap', 'control', 'removal', 'draw'] },
  art: {
    subject: 'an almost invisible web of glowing neon wires stretched across an alley, a monster caught in it'
  }
})

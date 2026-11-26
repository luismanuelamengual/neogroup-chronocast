import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { draw, stunAt } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'hostile-takeover',
  type: 'trap',
  reward: true,
  name: 'Hostile Takeover',
  text: 'When an enemy ally is summoned: stun it and draw 2 cards.',
  flavor: 'Read the fine print. He wrote it.',
  faction: 'clockwork',
  restriction: { heroes: ['chancellor-brassmaw'] },
  rarity: 'legendary',
  cost: 3,
  speed: 'instant',
  keywords: ['unique'],
  trigger: 'enemySummon',
  onTrigger(ctx, event) {
    stunAt(ctx, event.unit)
    draw(ctx, ctx.owner, 2)
  },
  ai: { value: 5, tags: ['draw', 'trap'] },
  art: {
    subject:
      'Hostile Takeover: a brass-sealed contract with a gear-shaped wax seal snapping shut like a bear trap on a mahogany desk, wisps of steam, gold accents'
  }
})

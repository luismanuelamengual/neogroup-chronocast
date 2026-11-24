import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damage } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'slash-of-the-long-road',
  type: 'ability',
  name: 'Slash of the Long Road',
  text: 'Deal 11 damage to an enemy slot.',
  faction: 'neutral',
  restriction: { kind: 'any' },
  rarity: 'common',
  price: 65,
  cost: 4,
  targets: ['enemySlot'],
  onPlay(ctx) {
    damage(ctx, ctx.targets[0], 11)
  },
  ai: { value: 4, tags: ['removal'] },
  art: {
    subject:
      'Slash of the Long Road: a glowing crescent slash cutting through the air, over a stormy battlefield, framed by drifting embers, turquoise accents, time rift wanderer style'
  }
})

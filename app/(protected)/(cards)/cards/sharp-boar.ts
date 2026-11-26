import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damageRandomAlly } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'sharp-boar',
  type: 'ally',
  name: 'Sharp Boar',
  text: 'When it enters: deal 3 damage to a random enemy ally.',
  flavor: 'Its tusks are its only argument.',
  faction: 'neutral',
  restriction: {},
  rarity: 'common',
  price: 50,
  cost: 2,
  tribe: 'beast',
  attack: 4,
  health: 3,
  onEnter(ctx) {
    damageRandomAlly(ctx, ctx.opponent, 3)
  },
  ai: { value: 2, tags: ['aggro', 'removal'] },
  art: {
    subject:
      'Sharp Boar: a boar with black fur with silver tips and a hump of fat, turning its head toward the viewer, ivory accents, hunter style'
  }
})

import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damage } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'sharp-boar',
  type: 'ally',
  name: 'Sharp Boar',
  text: 'When it enters: deal 3 damage to the enemy hero and 1 shadow damage to yours.',
  flavor: 'Its tusks are its only argument.',
  faction: 'neutral',
  restriction: { sides: ['eclipse'] },
  rarity: 'common',
  price: 50,
  cost: 2,
  tribe: 'beast',
  attack: 4,
  health: 3,
  onEnter(ctx) {
    damage(ctx, { player: ctx.opponent, slot: 'hero' }, 3)
    damage(ctx, { player: ctx.owner, slot: 'hero' }, 1, 'shadow')
  },
  ai: { value: 2, tags: ['aggro', 'removal'] },
  art: {
    subject:
      'Sharp Boar: a boar with black fur with silver tips and a hump of fat, turning its head toward the viewer, ivory accents, hunter style'
  }
})

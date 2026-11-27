import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damage, draw } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'creeping-shadow',
  type: 'ally',
  name: 'Creeping Shadow',
  text: 'When it dies: your hero takes 2 shadow damage and you draw 2 cards.',
  faction: 'neutral',
  restriction: { sides: ['eclipse'] },
  rarity: 'common',
  element: 'shadow',
  price: 50,
  cost: 2,
  tribe: 'elemental',
  attack: 2,
  health: 6,
  onDeath(ctx) {
    damage(ctx, { player: ctx.owner, slot: 'hero' }, 2, 'shadow')
    draw(ctx, ctx.owner, 2)
  },
  ai: { value: 3 },
  art: {
    subject:
      'Creeping Shadow: a living shadow with glowing violet eyes crawling up a wall, dissolving into smoke at its edges, dark ritual mood'
  }
})

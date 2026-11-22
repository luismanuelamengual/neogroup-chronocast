import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { allyRefs, burn, damage } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'wildfire',
  type: 'ability',
  name: 'Wildfire',
  text: 'Deal 3 damage to every enemy ally and set them on fire (2 a phase for 2 phases).',
  flavor: 'Once it starts, nobody can tell it where to stop.',
  faction: 'arcane',
  restriction: { kind: 'faction', faction: 'arcane' },
  rarity: 'rare',
  price: 520,
  cost: 4,
  onPlay(ctx) {
    for (const ref of allyRefs(ctx, ctx.opponent)) {
      damage(ctx, ref, 3)
      burn(ctx, ref, 2, 2)
    }
  },
  ai: { value: 4, tags: ['removal'] },
  art: {
    subject: 'a wall of magical violet and orange fire sweeping across a battlefield, soldiers fleeing'
  }
})

import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { destroyAt } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'unbound-ruin',
  type: 'ability',
  name: 'Unbound Ruin',
  text: 'Destroy an enemy ally. Slow.',
  flavor: 'Nothing holds it back anymore.',
  faction: 'void',
  restriction: { factions: ['void'] },
  rarity: 'uncommon',
  price: 180,
  cost: 4,
  speed: 'slow',
  targets: ['enemyAlly'],
  onPlay(ctx) {
    destroyAt(ctx, ctx.targets[0])
  },
  ai: { value: 4, tags: ['removal'] },
  art: {
    subject:
      'Unbound Ruin: a crumbling column collapsing into dust, over burning grassland, swirling around the center, violet accents, dark end-of-time void style'
  }
})

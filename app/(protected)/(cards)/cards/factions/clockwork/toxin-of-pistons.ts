import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { poison } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'toxin-of-pistons',
  type: 'ability',
  name: 'Toxin of Pistons',
  text: 'Poison an enemy ally (2).',
  faction: 'clockwork',
  restriction: { kind: 'faction', faction: 'clockwork' },
  rarity: 'uncommon',
  price: 140,
  cost: 1,
  targets: ['enemyAlly'],
  onPlay(ctx) {
    poison(ctx, ctx.targets[0], 2)
  },
  ai: { value: 1, tags: ['removal'] },
  art: {
    subject: 'Toxin of Pistons: a dripping vial of green venom, steampunk steam era style'
  }
})

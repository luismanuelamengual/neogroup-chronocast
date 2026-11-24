import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { poison } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'toxin-of-midnight',
  type: 'ability',
  name: 'Toxin of Midnight',
  text: 'Poison an enemy ally (3).',
  faction: 'neon',
  restriction: { kind: 'faction', faction: 'neon' },
  rarity: 'common',
  price: 50,
  cost: 2,
  targets: ['enemyAlly'],
  onPlay(ctx) {
    poison(ctx, ctx.targets[0], 3)
  },
  ai: { value: 2, tags: ['removal'] },
  art: {
    subject:
      'Toxin of Midnight: a cracked vial leaking glowing poison, above a calm lake at dusk, swirling around the center, lime green accents, neon cyberpunk future style'
  }
})

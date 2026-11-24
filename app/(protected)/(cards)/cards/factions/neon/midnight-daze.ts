import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { stunAt } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'midnight-daze',
  type: 'ability',
  name: 'Midnight Daze',
  text: 'Stun an enemy ally. Fast.',
  faction: 'neon',
  restriction: { kind: 'faction', faction: 'neon' },
  rarity: 'rare',
  price: 450,
  cost: 1,
  speed: 'fast',
  targets: ['enemyAlly'],
  onPlay(ctx) {
    stunAt(ctx, ctx.targets[0])
  },
  ai: { value: 2, tags: ['removal'] },
  art: {
    subject:
      'Midnight Daze: spinning stars and swirls circling a dented helmet, over burning grassland, dramatic backlight, tangerine accents, neon cyberpunk future style'
  }
})

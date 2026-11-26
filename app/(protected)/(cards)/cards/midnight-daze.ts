import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { stunAt } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'midnight-daze',
  type: 'ability',
  name: 'Midnight Daze',
  text: 'Stun an enemy ally. Fast.',
  flavor: 'Too many lights, too little time.',
  faction: 'neon',
  restriction: { factions: ['neon'] },
  rarity: 'rare',
  price: 300,
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

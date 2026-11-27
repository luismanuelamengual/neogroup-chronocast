import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { cardOf, stunAt, unitAt } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'midnight-daze',
  type: 'ability',
  subtype: 'program',
  name: 'Midnight Daze',
  text: 'Stun an enemy ally that costs 3 or less for two phases. Fast.',
  flavor: 'Too many lights, too little time.',
  faction: 'neon',
  restriction: { factions: ['neon'] },
  rarity: 'rare',
  price: 300,
  cost: 1,
  speed: 'fast',
  targets: ['enemyAlly'],
  onPlay(ctx) {
    const unit = unitAt(ctx, ctx.targets[0])

    if (unit && cardOf(unit).cost <= 3) {
      stunAt(ctx, ctx.targets[0], 1)
    }
  },
  ai: { value: 2, tags: ['removal'] },
  art: {
    subject:
      'Midnight Daze: spinning stars and swirls circling a dented helmet, over burning grassland, dramatic backlight, tangerine accents, neon cyberpunk future style'
  }
})

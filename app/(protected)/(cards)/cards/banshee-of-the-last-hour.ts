import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damageEnemyHero, discardSize } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'banshee-of-the-last-hour',
  type: 'ally',
  name: 'Banshee of the Last Hour',
  text: 'When it enters: deal 1 shadow damage to the enemy hero for every 3 cards in your discard pile.',
  faction: 'void',
  restriction: { factions: ['void'], sides: ['dawn'] },
  rarity: 'common',
  element: 'sonic',
  resist: ['shadow', 'ice'],
  price: 70,
  cost: 5,
  tribe: 'undead',
  keywords: ['poison'],
  attack: 4,
  health: 11,
  onEnter(ctx) {
    damageEnemyHero(ctx, Math.floor(discardSize(ctx, ctx.owner) / 3), 'shadow')
  },
  ai: { value: 5, tags: ['buff'] },
  art: {
    subject:
      'Banshee of the Last Hour: a banshee with a black tattered shroud and candles stuck in its shoulders, sniffing the air, crimson accents, dark end-of-time void style'
  }
})

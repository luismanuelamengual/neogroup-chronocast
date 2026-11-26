import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damageEnemyHero, tribeAllies } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'hallowed-revenant',
  type: 'ally',
  name: 'Hallowed Revenant',
  text: 'When it enters: deal 1 shadow damage to the enemy hero for each Undead of yours.',
  faction: 'neutral',
  restriction: { classes: ['mystic'] },
  rarity: 'uncommon',
  element: 'shadow',
  resist: ['shadow', 'ice'],
  price: 140,
  cost: 2,
  tribe: 'undead',
  keywords: ['shield'],
  attack: 2,
  health: 5,
  onEnter(ctx) {
    damageEnemyHero(ctx, 1 * tribeAllies(ctx, ctx.owner, 'undead').length)
  },
  ai: { value: 2, tags: ['aggro', 'tribe'] },
  art: {
    subject:
      'Hallowed Revenant: a revenant with mummified bandages and candles stuck in its shoulders, sniffing the air, crimson accents, mystic healer style'
  }
})

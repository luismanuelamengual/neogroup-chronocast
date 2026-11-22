import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damageEnemyHero, tribeAllies } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'cyclops-of-rage',
  type: 'ally',
  name: 'Cyclops of Rage',
  text: 'When it enters: deal 1 damage to the enemy hero for each Colossus of yours.',
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'warrior' },
  rarity: 'uncommon',
  resist: ['earth'],
  weak: ['acid'],
  price: 170,
  cost: 3,
  tribe: 'colossus',
  attack: 4,
  health: 9,
  onEnter(ctx) {
    damageEnemyHero(ctx, 1 * tribeAllies(ctx, ctx.owner, 'colossus').length)
  },
  ai: { value: 3, tags: ['aggro', 'tribe'] },
  art: {
    subject: 'a mythic ancient creature, the cyclops of rage, mid-leap, warrior style'
  }
})

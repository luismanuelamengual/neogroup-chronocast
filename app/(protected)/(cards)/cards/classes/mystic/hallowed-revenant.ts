import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damageEnemyHero, tribeAllies } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'hallowed-revenant',
  type: 'ally',
  name: 'Hallowed Revenant',
  text: 'When it enters: deal 1 shadow damage to the enemy hero for each Undead of yours.',
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'mystic' },
  rarity: 'uncommon',
  element: 'shadow',
  resist: ['shadow', 'ice'],
  price: 155,
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
    subject: 'an undead creature, the hallowed revenant, charging into battle, mystic healer style'
  }
})

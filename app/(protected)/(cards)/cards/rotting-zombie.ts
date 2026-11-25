import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damage, damageEnemyHero, tribeAllies } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'rotting-zombie',
  type: 'ally',
  name: 'Rotting Zombie',
  text: 'When it enters: deal 1 shadow damage to the enemy hero for each Undead of yours. Its ability is paid with energy (⚡).',
  faction: 'void',
  restriction: { factions: ['void'] },
  rarity: 'uncommon',
  element: 'shadow',
  resist: ['shadow', 'ice'],
  price: 170,
  cost: 3,
  tribe: 'undead',
  attack: 4,
  health: 9,
  ability: {
    name: 'Strike',
    text: 'Deal 5 shadow damage to an enemy slot.',
    cost: 2,
    resource: 'energy',
    targets: ['enemySlot'],
    activate(ctx) {
      damage(ctx, ctx.targets[0], 5)
    }
  },
  onEnter(ctx) {
    damageEnemyHero(ctx, 1 * tribeAllies(ctx, ctx.owner, 'undead').length)
  },
  ai: { value: 3, tags: ['ability', 'aggro', 'energy', 'tribe'] },
  art: {
    subject:
      'Rotting Zombie: a zombie with ash-grey skin and a broken crown, charging head-on, gold accents, dark end-of-time void style'
  }
})

import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damageEnemyHero, stunAt, tribeAllies } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'eternal-haruspex',
  type: 'ally',
  name: 'Eternal Haruspex',
  text: 'When it enters: deal 1 time damage to the enemy hero for each Oracle of yours. Its ability is paid with energy (⚡).',
  faction: 'bronze',
  restriction: { kind: 'faction', faction: 'bronze' },
  rarity: 'uncommon',
  element: 'time',
  resist: ['light'],
  price: 170,
  cost: 3,
  tribe: 'oracle',
  attack: 3,
  health: 11,
  ability: {
    name: 'Daze',
    text: 'Stun an enemy ally.',
    cost: 2,
    resource: 'energy',
    targets: ['enemyAlly'],
    activate(ctx) {
      stunAt(ctx, ctx.targets[0])
    }
  },
  onEnter(ctx) {
    damageEnemyHero(ctx, 1 * tribeAllies(ctx, ctx.owner, 'oracle').length)
  },
  ai: { value: 3, tags: ['ability', 'aggro', 'energy', 'tribe'] },
  art: {
    subject:
      'an ancient temple seer in white robes, the eternal haruspex, raising its weapon, ancient bronze-age empire style'
  }
})

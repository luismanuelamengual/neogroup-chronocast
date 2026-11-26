import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damage, damageEnemyHero, tribeAllies } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'spinosaur-of-the-hunt',
  type: 'ally',
  name: 'Spinosaur of the Hunt',
  text: 'When it enters: deal 1 damage to the enemy hero for each Saurian of yours. Its ability is paid with energy (⚡).',
  faction: 'neutral',
  restriction: { sides: ['eclipse'] },
  rarity: 'uncommon',
  weak: ['ice'],
  price: 160,
  cost: 3,
  tribe: 'saurian',
  keywords: ['ranged'],
  attack: 3,
  health: 7,
  ability: {
    name: 'Strike',
    text: 'Deal 5 damage to an enemy slot.',
    cost: 2,
    resource: 'energy',
    targets: ['enemySlot'],
    activate(ctx) {
      damage(ctx, ctx.targets[0], 5)
    }
  },
  onEnter(ctx) {
    damageEnemyHero(ctx, 1 * tribeAllies(ctx, ctx.owner, 'saurian').length)
  },
  ai: { value: 3, tags: ['ability', 'aggro', 'energy', 'tribe'] },
  art: {
    subject:
      'Spinosaur of the Hunt: a spinosaur with a pale lavender hide with gold markings and feathered arms, leaping forward, emerald accents, hunter style'
  }
})

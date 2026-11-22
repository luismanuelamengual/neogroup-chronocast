import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { buff, damage, isTribe } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'balloon-scout-of-pistons',
  type: 'ally',
  name: 'Balloon Scout of Pistons',
  text: 'When another Skyship of yours enters: it gains +1 attack and +1 health. Its ability is paid with energy (⚡).',
  faction: 'clockwork',
  restriction: { kind: 'faction', faction: 'clockwork' },
  rarity: 'uncommon',
  weak: ['wind'],
  price: 170,
  cost: 3,
  tribe: 'skyship',
  keywords: ['shield'],
  attack: 4,
  health: 4,
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
  onAllyEnter(ctx, ally) {
    if (isTribe(ally, 'skyship')) {
      buff(ctx, ally, 1, 1)
    }
  },
  ai: { value: 3, tags: ['ability', 'buff', 'energy', 'tribe'] },
  art: {
    subject: 'a steampunk flying machine, the balloon scout of pistons, charging into battle, steampunk steam era style'
  }
})

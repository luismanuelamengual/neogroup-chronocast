import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { buff, buffAt, isTribe } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'ashen-skeleton',
  type: 'ally',
  name: 'Ashen Skeleton',
  text: 'When another Undead of yours enters: it gains +2 attack and +2 health. Its ability is paid with energy (⚡).',
  faction: 'void',
  restriction: { kind: 'faction', faction: 'void' },
  rarity: 'uncommon',
  element: 'fire',
  resist: ['shadow', 'ice'],
  price: 205,
  cost: 5,
  tribe: 'undead',
  attack: 3,
  health: 9,
  ability: {
    name: 'Inspire',
    text: 'An ally of yours gains +1 attack and +2 health.',
    cost: 2,
    resource: 'energy',
    targets: ['friendlyAlly'],
    activate(ctx) {
      buffAt(ctx, ctx.targets[0], 1, 2)
    }
  },
  onAllyEnter(ctx, ally) {
    if (isTribe(ally, 'undead')) {
      buff(ctx, ally, 2, 2)
    }
  },
  ai: { value: 5, tags: ['ability', 'buff', 'energy', 'tribe'] },
  art: {
    subject:
      'Ashen Skeleton: a skeleton with bleached bones and glowing eye sockets, prowling low, indigo accents, dark end-of-time void style'
  }
})

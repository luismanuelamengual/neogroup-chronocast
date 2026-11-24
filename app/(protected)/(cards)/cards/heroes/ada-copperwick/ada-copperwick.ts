import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { buff, buffAt } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'ada-copperwick',
  type: 'hero',
  name: 'Ada Copperwick',
  text: 'Tinker (3): an ally of yours gains +3 attack and +4 health. When another ally of yours enters, it gains +1 attack.',
  flavor: 'Magic is just engineering nobody has explained yet.',
  faction: 'clockwork',
  heroClass: 'mage',
  restriction: { kind: 'hero', heroId: 'ada-copperwick' },
  rarity: 'epic',
  cost: 0,
  health: 58,
  ability: {
    name: 'Tinker',
    text: 'An ally of yours gains +3 attack and +4 health.',
    cost: 3,
    targets: ['friendlyAlly'],
    activate(ctx) {
      buffAt(ctx, ctx.targets[0], 3, 4)
    }
  },
  onAllyEnter(ctx, ally) {
    buff(ctx, ally, 1, 0)
  },
  ai: { value: 0 },
  art: {
    subject:
      'a brilliant young Victorian inventor with copper goggles and a lab coat, tiny brass drones orbiting her, glowing blueprints in the air'
  }
})

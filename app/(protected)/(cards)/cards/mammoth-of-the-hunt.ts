import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { buff, buffAt, isTribe } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'mammoth-of-the-hunt',
  type: 'ally',
  name: 'Mammoth of the Hunt',
  text: 'When another Beast of yours enters: it gains +1 attack and +1 health. Its ability is paid with energy (⚡).',
  faction: 'neutral',
  restriction: { classes: ['hunter'] },
  rarity: 'rare',
  price: 420,
  cost: 3,
  tribe: 'beast',
  attack: 3,
  health: 8,
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
    if (isTribe(ally, 'beast')) {
      buff(ctx, ally, 1, 1)
    }
  },
  ai: { value: 4, tags: ['ability', 'buff', 'energy', 'tribe'] },
  art: {
    subject:
      'Mammoth of the Hunt: a mammoth with dark chocolate fur and a chipped tusk, prowling low, cobalt blue accents, hunter style'
  }
})

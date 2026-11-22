import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { buffSelf, discardSize, heal } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'hollow-void-spawn',
  type: 'ally',
  name: 'Hollow Void Spawn',
  text: 'When it enters: if your discard pile has 6 or more cards, it gains +2 attack and +2 health. Its ability is paid with energy (⚡).',
  faction: 'void',
  restriction: { kind: 'faction', faction: 'void' },
  rarity: 'uncommon',
  element: 'shadow',
  resist: ['shadow'],
  weak: ['sonic'],
  price: 170,
  cost: 3,
  tribe: 'horror',
  keywords: ['poison'],
  attack: 3,
  health: 7,
  ability: {
    name: 'Mend',
    text: 'An ally of yours heals 6.',
    cost: 2,
    resource: 'energy',
    targets: ['friendlyAlly'],
    activate(ctx) {
      heal(ctx, ctx.targets[0], 6)
    }
  },
  onEnter(ctx) {
    if (discardSize(ctx, ctx.owner) >= 6) {
      buffSelf(ctx, 2, 2)
    }
  },
  ai: { value: 3, tags: ['ability', 'buff', 'energy'] },
  art: {
    subject:
      'an eldritch horror from the end of time, the hollow void spawn, lunging forward, dark end-of-time void style'
  }
})

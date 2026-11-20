import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { buffSelf, sacrificeAlly } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'hollow-cultist',
  type: 'ally',
  name: 'Hollow Cultist',
  text: 'On enter: destroy your weakest other ally: if you do, it gains +4 attack and +6 health.',
  flavor: 'He gave his name to the void. It gave him teeth.',
  faction: 'void',
  restriction: { kind: 'faction', faction: 'void' },
  rarity: 'common',
  price: 50,
  cost: 2,
  attack: 6,
  health: 12,
  onEnter(ctx) {
    if (sacrificeAlly(ctx)) {
      buffSelf(ctx, 4, 6)
    }
  },
  ai: { value: 2, tags: ['buff'] },
  art: {
    subject: 'a robed cultist with a hollow glowing hood holding a dagger over a dark altar'
  }
})

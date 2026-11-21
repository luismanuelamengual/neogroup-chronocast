import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { buff, gainArmor } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'phalanx-general',
  type: 'ally',
  name: 'Phalanx General',
  text: 'When another ally of yours enters, it gains +6 health.',
  flavor: 'One spear is a stick. A thousand is a fortress.',
  faction: 'bronze',
  restriction: { kind: 'faction', faction: 'bronze' },
  rarity: 'epic',
  price: 1900,
  cost: 5,
  attack: 14,
  health: 36,
  keywords: ['guardian'],
  ability: {
    name: 'Shield Wall',
    text: 'Your hero gains 8 armor.',
    cost: 2,
    activate(ctx) {
      gainArmor(ctx, ctx.owner, 8)
    }
  },
  onAllyEnter(ctx, ally) {
    buff(ctx, ally, 0, 6)
  },
  ai: { value: 6, tags: ['ability', 'buff', 'defense'] },
  art: {
    subject: 'a Greek general in a crested Corinthian helmet commanding a phalanx bristling with long spears'
  }
})

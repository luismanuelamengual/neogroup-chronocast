import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { buff, buffSelf, isTribe } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'centurion-of-steel',
  type: 'ally',
  name: 'Centurion of Steel',
  text: 'When another Legionnaire of yours enters: it gains +1 attack and +1 health. When it attacks: it gains +1 attack.',
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'warrior' },
  rarity: 'legendary',
  price: 4800,
  cost: 3,
  tribe: 'legionnaire',
  keywords: ['unique'],
  attack: 4,
  health: 8,
  onAllyEnter(ctx, ally) {
    if (isTribe(ally, 'legionnaire')) {
      buff(ctx, ally, 1, 1)
    }
  },
  onAttack(ctx) {
    buffSelf(ctx, 1, 0)
  },
  ai: { value: 5, tags: ['buff', 'tribe'] },
  art: {
    subject: 'an ancient bronze-armored soldier, the centurion of steel, glaring at the viewer, warrior style'
  }
})

import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { healHero, isTribe } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'young-stonethrower',
  type: 'ally',
  name: 'Young Stonethrower',
  text: 'When another Caveborn of yours enters: your hero heals 2. When it attacks: your hero heals 3.',
  faction: 'primal',
  restriction: { factions: ['primal'] },
  rarity: 'legendary',
  resist: ['ice'],
  price: 2160,
  cost: 3,
  tribe: 'caveborn',
  keywords: ['guardian', 'unique'],
  attack: 3,
  health: 12,
  onAllyEnter(ctx, ally) {
    if (isTribe(ally, 'caveborn')) {
      healHero(ctx, 2)
    }
  },
  onAttack(ctx) {
    healHero(ctx, 3)
  },
  ai: { value: 5, tags: ['heal'] },
  art: {
    subject:
      'Young Stonethrower: a barrel-chested adult neanderthal woman with golden skin, jet black hair in a wild mane and a bandaged forehead, dressed in ochre body paint and a reed skirt, winding up a sling, with a mischievous wink, rose pink accents, prehistoric jungle era style'
  }
})

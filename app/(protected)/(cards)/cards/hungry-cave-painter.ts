import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { buff, isTribe } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'hungry-cave-painter',
  type: 'ally',
  name: 'Hungry Cave Painter',
  text: 'When another Caveborn of yours enters: it gains +1 attack and +1 health.',
  faction: 'primal',
  restriction: { factions: ['primal'] },
  rarity: 'uncommon',
  resist: ['ice'],
  price: 155,
  cost: 2,
  tribe: 'caveborn',
  keywords: ['cleave'],
  attack: 1,
  health: 3,
  onAllyEnter(ctx, ally) {
    if (isTribe(ally, 'caveborn')) {
      buff(ctx, ally, 1, 1)
    }
  },
  ai: { value: 2, tags: ['buff', 'tribe'] },
  art: {
    subject:
      'Hungry Cave Painter: a wiry adult woman with dark ebony skin, sandy hair in an afro and a burn scar on the jaw, wearing a bone headdress, dressed in a bear-skull headdress and furs, painting glowing handprints on rock, with a confident smirk, emerald accents, prehistoric jungle era style'
  }
})

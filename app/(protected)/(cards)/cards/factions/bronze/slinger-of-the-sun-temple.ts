import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { summonCard } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'slinger-of-the-sun-temple',
  type: 'ally',
  name: 'Slinger of the Sun Temple',
  text: 'When it enters: summon a Hoplite Conscript.',
  flavor: 'She never misses under the sun.',
  faction: 'bronze',
  restriction: { kind: 'faction', faction: 'bronze' },
  rarity: 'common',
  element: 'light',
  price: 55,
  cost: 3,
  tribe: 'legionnaire',
  attack: 3,
  health: 7,
  onEnter(ctx) {
    summonCard(ctx, ctx.owner, 'hoplite-conscript')
  },
  ai: { value: 3, tags: ['summon'] },
  art: {
    subject:
      'Slinger of the Sun Temple: a muscular young man with tan skin, platinum blond hair in long braids and heavy golden earrings, wearing a crested helmet, dressed in chain mail with a lion pelt, whirling a leather sling, with grim determination, crimson accents, ancient bronze-age empire style'
  }
})

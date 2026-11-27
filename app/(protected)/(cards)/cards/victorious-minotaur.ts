import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { buff, tribeAllies } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'victorious-minotaur',
  type: 'ally',
  name: 'Victorious Minotaur',
  text: 'After it takes damage: your other Colossi gain +1 attack.',
  flavor: 'It found the way out of the labyrinth. Then went back in.',
  faction: 'bronze',
  restriction: { factions: ['bronze'], sides: ['eclipse'] },
  rarity: 'common',
  resist: ['earth'],
  weak: ['acid'],
  price: 50,
  cost: 2,
  tribe: 'colossus',
  keywords: ['guardian', 'retaliate'],
  attack: 2,
  health: 8,
  onDamaged(ctx) {
    for (const unit of tribeAllies(ctx, ctx.owner, 'colossus', true)) {
      buff(ctx, unit, 1, 0)
    }
  },
  ai: { value: 2 },
  art: {
    subject:
      'Victorious Minotaur: a minotaur with a jet black hide and broken chains on its limbs, standing proud on a rock, ivory accents, ancient bronze-age empire style'
  }
})

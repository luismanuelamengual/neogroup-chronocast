import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { buff, tribeAllies } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'standard-bearer-of-the-last-stand',
  type: 'ally',
  name: 'Standard-Bearer of the Last Stand',
  text: 'When it attacks: your other Legionnaires gain +1 attack.',
  flavor: 'As long as the banner stands, so do we.',
  faction: 'neutral',
  restriction: { sides: ['dawn'] },
  rarity: 'uncommon',
  price: 180,
  cost: 4,
  tribe: 'legionnaire',
  keywords: ['charge'],
  attack: 5,
  health: 9,
  onAttack(ctx) {
    for (const unit of tribeAllies(ctx, ctx.owner, 'legionnaire', true)) {
      buff(ctx, unit, 1, 0)
    }
  },
  ai: { value: 4, tags: ['buff'] },
  art: {
    subject:
      'Standard-Bearer of the Last Stand: a willowy adult woman with light brown skin, blue-black hair in a wild mane and heavy golden earrings, dressed in chain mail with a lion pelt, raising an eagle standard, with a serene smile, tangerine accents, warrior style'
  }
})

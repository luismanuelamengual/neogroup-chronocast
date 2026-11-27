import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { grantKeyword, neighbors } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'loyal-charioteer',
  type: 'ally',
  name: 'Loyal Charioteer',
  text: 'When it enters: the allies next to it gain Guardian.',
  flavor: 'The horses trust him. So does the legion.',
  faction: 'bronze',
  restriction: { factions: ['bronze'], sides: ['dawn'] },
  rarity: 'common',
  price: 50,
  cost: 2,
  tribe: 'legionnaire',
  keywords: ['guardian', 'retaliate'],
  attack: 2,
  health: 8,
  onEnter(ctx) {
    for (const unit of neighbors(ctx)) {
      grantKeyword(ctx, unit, 'guardian')
    }
  },
  ai: { value: 2 },
  art: {
    subject:
      'Loyal Charioteer: a willowy middle-aged man with light brown skin, platinum blond hair in cornrows, heavy stubble and a beauty mark, wearing a plumed Greek helmet, dressed in a Greek hoplite panoply with a horsehair crest, cracking a whip from a bronze chariot, with a mischievous wink, amber accents, ancient bronze-age empire style'
  }
})

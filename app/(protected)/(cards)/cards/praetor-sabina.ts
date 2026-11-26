import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { buffAllies } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'praetor-sabina',
  type: 'ally',
  reward: true,
  name: 'Praetor Sabina',
  text: 'When it enters: your other allies gain +2 attack.',
  flavor: 'Loyal to the crown, whoever wears it.',
  faction: 'bronze',
  restriction: { heroes: ['caelus-the-usurper'] },
  rarity: 'legendary',
  cost: 5,
  tribe: 'legionnaire',
  keywords: ['guardian', 'unique'],
  attack: 5,
  health: 10,
  onEnter(ctx) {
    buffAllies(ctx, ctx.owner, 2, 0, true)
  },
  ai: { value: 5, tags: ['buff'] },
  art: {
    subject:
      'a stern female praetorian commander in a gilded crested helmet and a purple cloak, raising a gladius in a ruined colosseum'
  }
})

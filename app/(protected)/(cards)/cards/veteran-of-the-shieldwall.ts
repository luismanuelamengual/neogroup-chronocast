import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { heal, self, slotOf } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'veteran-of-the-shieldwall',
  type: 'ally',
  name: 'Veteran of the Shieldwall',
  text: 'When it attacks: it heals 3.',
  flavor: 'He has held the line since before you were born.',
  faction: 'neutral',
  restriction: { sides: ['dawn'] },
  rarity: 'common',
  price: 65,
  cost: 4,
  tribe: 'legionnaire',
  keywords: ['guardian', 'retaliate'],
  attack: 3,
  health: 11,
  onAttack(ctx) {
    const me = self(ctx)
    const ref = me ? slotOf(ctx, me) : null

    if (ref) {
      heal(ctx, ref, 3)
    }
  },
  ai: { value: 4, tags: ['buff'] },
  art: {
    subject:
      'Veteran of the Shieldwall: a stocky adult woman with warm beige skin, honey blond hair in cornrows and a dusting of freckles, wearing a plain bronze helm, dressed in a bronze muscle cuirass and red cape, holding a dented shield, with a booming laugh, turquoise accents, warrior style'
  }
})

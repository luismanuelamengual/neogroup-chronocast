import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damage } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'pila-volley',
  type: 'trap',
  name: 'Pila Volley',
  text: 'When an enemy ally is summoned: deal 8 damage to it.',
  flavor: 'Throw first, ask questions later.',
  faction: 'bronze',
  restriction: { kind: 'faction', faction: 'bronze' },
  rarity: 'common',
  price: 50,
  cost: 2,
  trigger: 'enemySummon',
  onTrigger(ctx, event) {
    if (event.unit) {
      damage(ctx, event.unit, 8)
    }
  },
  ai: { value: 2, tags: ['trap', 'removal'] },
  art: {
    subject: 'a volley of Roman javelins arcing through the sky toward an enemy just arriving on the field'
  }
})

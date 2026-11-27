import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { alliesOf, burn, slotOf } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'ashen-pyromancer',
  type: 'ally',
  name: 'Ashen Pyromancer',
  text: 'When it enters: burn every enemy ally (2) and your hero (2).',
  faction: 'neutral',
  restriction: { sides: ['eclipse'] },
  rarity: 'rare',
  element: 'fire',
  price: 420,
  cost: 4,
  tribe: 'magus',
  attack: 4,
  health: 8,
  onEnter(ctx) {
    for (const unit of alliesOf(ctx, ctx.opponent)) {
      const ref = slotOf(ctx, unit)

      if (ref) {
        burn(ctx, ref, 2)
      }
    }

    burn(ctx, { player: ctx.owner, slot: 'hero' }, 2)
  },
  ai: { value: 3 },
  art: {
    subject:
      'Ashen Pyromancer: a pyromancer whose skin is cracked like cooling ash, flames pouring from their hands and scorching their own robes, dark ritual mood'
  }
})

import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { buff, heal, slotOf, tribeAllies } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'bloodied-helm',
  type: 'armor',
  subtype: 'helm',
  name: 'Bloodied Helm',
  text: 'When it is equipped: your Colossi heal 4 and gain +1 attack.',
  flavor: "Not all of the blood is the wearer's.",
  faction: 'bronze',
  restriction: { factions: ['bronze'], sides: ['eclipse'] },
  rarity: 'epic',
  price: 1200,
  cost: 4,
  armor: 3,
  durability: 4,
  onPlay(ctx) {
    for (const unit of tribeAllies(ctx, ctx.owner, 'colossus')) {
      const ref = slotOf(ctx, unit)

      if (ref) {
        heal(ctx, ref, 4)
      }

      buff(ctx, unit, 1, 0)
    }
  },
  ai: { value: 5 },
  art: {
    subject:
      'Bloodied Helm: a single helm made of pale ash wood wrapped in red cloth, on a fur rug, centered and seen from slightly below, emerald accents, warrior style'
  }
})

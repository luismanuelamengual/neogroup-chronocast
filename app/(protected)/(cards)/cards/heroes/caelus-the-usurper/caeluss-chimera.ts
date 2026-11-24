import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { buff, gainArmor, isTribe } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'caeluss-chimera',
  type: 'ally',
  name: "Caelus's Chimera",
  text: 'When another Colossus of yours enters: it gains +2 attack and +2 health. When it attacks: your hero gains 2 armor.',
  faction: 'bronze',
  restriction: { kind: 'hero', heroId: 'caelus-the-usurper' },
  rarity: 'legendary',
  resist: ['earth'],
  weak: ['acid'],
  price: 5600,
  cost: 5,
  tribe: 'colossus',
  keywords: ['unique'],
  attack: 5,
  health: 6,
  onAllyEnter(ctx, ally) {
    if (isTribe(ally, 'colossus')) {
      buff(ctx, ally, 2, 2)
    }
  },
  onAttack(ctx) {
    gainArmor(ctx, ctx.owner, 2)
  },
  ai: { value: 7, tags: ['buff', 'defense', 'tribe'] },
  art: {
    subject:
      "Caelus's Chimera: a chimera with a storm-grey hide and old battle scars, turning its head toward the viewer, saffron yellow accents, ancient bronze-age empire style"
  }
})

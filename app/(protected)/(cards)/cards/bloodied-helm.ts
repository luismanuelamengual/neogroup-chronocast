import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { healAllAllies } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'bloodied-helm',
  type: 'armor',
  name: 'Bloodied Helm',
  text: 'When it is equipped: your allies heal 2.',
  flavor: "Not all of the blood is the wearer's.",
  faction: 'neutral',
  restriction: { sides: ['eclipse'] },
  rarity: 'epic',
  price: 1200,
  cost: 4,
  armor: 3,
  durability: 4,
  onPlay(ctx) {
    healAllAllies(ctx, ctx.owner, 2)
  },
  ai: { value: 5 },
  art: {
    subject:
      'Bloodied Helm: a single helm made of pale ash wood wrapped in red cloth, on a fur rug, centered and seen from slightly below, emerald accents, warrior style'
  }
})

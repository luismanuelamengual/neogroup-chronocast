import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { buff, tribeAllies } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'kazhuls-longbow',
  type: 'weapon',
  subtype: 'bow',
  name: "Kazhul's Longbow",
  text: 'When your hero attacks with it: your Caveborn gain +1 attack.',
  faction: 'primal',
  restriction: { factions: ['primal'], sides: ['eclipse'] },
  rarity: 'epic',
  price: 1100,
  cost: 3,
  keywords: ['ranged', 'unique'],
  attack: 5,
  durability: 4,
  onAttack(ctx) {
    for (const unit of tribeAllies(ctx, ctx.owner, 'caveborn')) {
      buff(ctx, unit, 1, 0)
    }
  },
  ai: { value: 5 },
  art: {
    subject:
      "Kazhul's Longbow: a single longbow made of rough stone and sinew, wreathed in roaring flames, on a fur rug, diagonal dynamic composition, lime green accents, prehistoric jungle era style"
  }
})

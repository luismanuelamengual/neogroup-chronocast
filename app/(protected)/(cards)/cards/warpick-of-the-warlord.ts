import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { repairArmor } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'warpick-of-the-warlord',
  type: 'weapon',
  subtype: 'mace',
  name: 'Warpick of the Warlord',
  text: 'When it is equipped: your armor gains +2 durability.',
  flavor: 'It has broken crowns.',
  faction: 'bronze',
  restriction: { factions: ['bronze'] },
  rarity: 'uncommon',
  price: 120,
  cost: 1,
  attack: 2,
  durability: 2,
  onPlay(ctx) {
    repairArmor(ctx, ctx.owner, 2)
  },
  ai: { value: 1 },
  art: {
    subject:
      'Warpick of the Warlord: a single warpick made of white bone and leather wraps, on a mossy rock, bursting toward the viewer, lime green accents, warrior style'
  }
})

import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { destroyArmor } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'warpick-of-iron',
  type: 'weapon',
  subtype: 'tool',
  name: 'Warpick of Iron',
  text: 'When it is equipped: destroy the enemy armor.',
  flavor: 'Made to open helmets like nutshells.',
  faction: 'clockwork',
  restriction: { factions: ['clockwork'] },
  rarity: 'epic',
  price: 1200,
  cost: 4,
  attack: 5,
  durability: 4,
  onPlay(ctx) {
    destroyArmor(ctx, ctx.opponent)
  },
  ai: { value: 5 },
  art: {
    subject:
      'Warpick of Iron: a single warpick made of gilded marble, on a fur rug, diagonal dynamic composition, cobalt blue accents, warrior style'
  }
})

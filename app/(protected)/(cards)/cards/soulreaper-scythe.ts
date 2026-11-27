import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { discardSize } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'soulreaper-scythe',
  type: 'weapon',
  subtype: 'scythe',
  name: 'Soulreaper Scythe',
  text: "Your hero's attacks with it deal 1 more damage for every 5 cards in your discard pile.",
  faction: 'void',
  restriction: { factions: ['void'] },
  rarity: 'epic',
  price: 1100,
  cost: 4,
  attack: 4,
  durability: 3,
  attackBonus(ctx, attacker) {
    return attacker.player === ctx.owner && attacker.slot === 'hero' ? Math.floor(discardSize(ctx, ctx.owner) / 5) : 0
  },
  ai: { value: 5, tags: ['aggro'] },
  art: {
    subject:
      'Soulreaper Scythe: a single long scythe with a blade of black bone and trapped screaming souls, diagonal composition, dark end-of-time void style'
  }
})

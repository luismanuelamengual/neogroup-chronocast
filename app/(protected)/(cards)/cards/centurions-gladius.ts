import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { hasPanoply } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'centurions-gladius',
  type: 'weapon',
  subtype: 'sword',
  name: "Centurion's Gladius",
  text: 'Panoply (your hero has a weapon and an armor): its attacks deal 2 more damage.',
  faction: 'bronze',
  restriction: { factions: ['bronze'] },
  rarity: 'common',
  price: 60,
  cost: 2,
  attack: 3,
  durability: 3,
  attackBonus(ctx, attacker) {
    return attacker.slot === 'hero' && hasPanoply(ctx) ? 2 : 0
  },
  ai: { value: 2, tags: ['panoply'] },
  art: {
    subject:
      "Centurion's Gladius: a short bronze sword with a red-wrapped hilt, laid across a legionary shield, polished reflections, seen from above, crimson accents, ancient bronze-age empire style"
  }
})

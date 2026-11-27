import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { hasPanoply, stunAt } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'armored-mace',
  type: 'weapon',
  subtype: 'mace',
  name: 'Armored Mace',
  text: "With Panoply, your hero's attacks with it stun the ally they hit.",
  flavor: 'Subtle it is not.',
  faction: 'bronze',
  restriction: { factions: ['bronze'] },
  rarity: 'common',
  price: 70,
  cost: 5,
  attack: 6,
  durability: 4,
  onAttack(ctx, target) {
    if (target.slot !== 'hero' && hasPanoply(ctx)) {
      stunAt(ctx, target)
    }
  },
  ai: { value: 5 },
  art: {
    subject:
      'Armored Mace: a single mace made of blue steel with silver runes, on a worn wooden table, centered and seen from slightly below, magenta accents, warrior style'
  }
})

import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'

export default defineCard({
  id: 'archmages-staff',
  type: 'weapon',
  subtype: 'staff',
  name: "Archmage's Staff",
  text: 'Spell power +2 (your spells deal 2 more damage).',
  faction: 'arcane',
  restriction: { factions: ['arcane'] },
  rarity: 'rare',
  price: 420,
  cost: 4,
  attack: 3,
  durability: 4,
  spellPower: 2,
  ai: { value: 4, tags: ['spellPower'] },
  art: {
    subject:
      "Archmage's Staff: a tall staff of white wood crowned with a floating sapphire crystal, orbiting runes of light, in a tower library, centered, cobalt blue accents, medieval magic order style"
  }
})

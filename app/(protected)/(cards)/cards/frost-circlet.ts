import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'

export default defineCard({
  id: 'frost-circlet',
  type: 'armor',
  subtype: 'circlet',
  name: 'Frost Circlet',
  text: 'Spell power +1. Your ice spells also freeze what they damage.',
  faction: 'arcane',
  restriction: { factions: ['arcane'] },
  rarity: 'rare',
  price: 380,
  cost: 3,
  durability: 4,
  armor: 1,
  spellPower: 1,
  freezingSpells: true,
  ai: { value: 3, tags: ['spellPower'] },
  art: {
    subject:
      'Frost Circlet: a delicate silver circlet set with ice-blue crystals, frost creeping over it, resting on a snowy velvet cushion, close-up, cobalt blue accents, medieval magic order style'
  }
})

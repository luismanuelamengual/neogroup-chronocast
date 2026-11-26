import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'

export default defineCard({
  id: 'circlet-of-flame',
  type: 'armor',
  subtype: 'circlet',
  name: 'Circlet of Flame',
  text: '',
  flavor: 'Thoughts burn brighter under it.',
  faction: 'arcane',
  restriction: { factions: ['arcane'], sides: ['eclipse'] },
  rarity: 'common',
  price: 65,
  cost: 4,
  armor: 3,
  durability: 4,
  ai: { value: 4 },
  art: {
    subject:
      'Circlet of Flame: a single circlet made of polished bronze with engraved spirals, on a mossy rock, seen from above, lime green accents, mage style'
  }
})

import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'

export default defineCard({
  id: 'plate-of-steel',
  type: 'armor',
  subtype: 'plate',
  name: 'Plate of Steel',
  text: '',
  flavor: 'Old steel, older promises.',
  faction: 'neutral',
  restriction: {},
  rarity: 'uncommon',
  price: 160,
  cost: 3,
  armor: 2,
  durability: 5,
  ai: { value: 3 },
  art: {
    subject:
      'Plate of Steel: a single plate made of pale ash wood wrapped in red cloth, on a worn wooden table, framed by drifting embers, crimson accents, warrior style'
  }
})

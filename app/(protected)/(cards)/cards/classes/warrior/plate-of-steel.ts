import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'

export default defineCard({
  id: 'plate-of-steel',
  type: 'armor',
  name: 'Plate of Steel',
  text: '',
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'warrior' },
  rarity: 'uncommon',
  price: 170,
  cost: 3,
  armor: 9,
  ai: { value: 3 },
  art: {
    subject:
      'Plate of Steel: a single plate made of pale ash wood wrapped in red cloth, on a worn wooden table, framed by drifting embers, crimson accents, warrior style'
  }
})

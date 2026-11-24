import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'

export default defineCard({
  id: 'keen-eyed-hide',
  type: 'armor',
  name: 'Keen-Eyed Hide',
  text: '',
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'hunter' },
  rarity: 'common',
  price: 40,
  cost: 1,
  armor: 3,
  ai: { value: 1 },
  art: {
    subject:
      'Keen-Eyed Hide: a single hide made of rusted iron and chains, on a worn wooden table, centered and seen from slightly below, emerald accents, hunter style'
  }
})

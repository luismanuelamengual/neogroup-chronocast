import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'

export default defineCard({
  id: 'rusty-sword',
  type: 'weapon',
  name: 'Rusty Sword',
  text: '',
  flavor: 'Old, chipped and still sharp enough.',
  faction: 'neutral',
  restriction: { kind: 'any' },
  rarity: 'common',
  price: 45,
  cost: 1,
  attack: 5,
  durability: 2,
  ai: { value: 1 },
  art: {
    subject: 'an old rusty sword with a chipped blade stuck in the ground among autumn leaves'
  }
})

import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'

export default defineCard({
  id: 'staff-of-embers',
  type: 'weapon',
  name: 'Staff of Embers',
  text: '',
  flavor: 'Always warm, never burns out.',
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'mage' },
  rarity: 'common',
  price: 50,
  cost: 2,
  attack: 6,
  durability: 3,
  keywords: ['ranged'],
  ai: { value: 2 },
  art: {
    subject: 'a wooden staff topped with a glowing orange ember crystal, smoke curling up'
  }
})

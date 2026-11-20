import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'

export default defineCard({
  id: 'war-axe',
  type: 'weapon',
  name: 'War Axe',
  text: '',
  flavor: 'Heavy, simple, effective.',
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'warrior' },
  rarity: 'common',
  price: 50,
  cost: 2,
  attack: 8,
  durability: 2,
  ai: { value: 2 },
  art: {
    subject: 'a heavy double-bladed war axe with a leather-wrapped handle stuck in a wooden stump'
  }
})

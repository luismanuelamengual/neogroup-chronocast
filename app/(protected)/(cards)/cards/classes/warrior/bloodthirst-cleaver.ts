import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'

export default defineCard({
  id: 'bloodthirst-cleaver',
  type: 'weapon',
  name: 'Bloodthirst Cleaver',
  text: '',
  flavor: 'It is never full.',
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'warrior' },
  rarity: 'epic',
  price: 1800,
  cost: 4,
  attack: 12,
  durability: 4,
  keywords: ['lifesteal'],
  ai: { value: 5 },
  art: {
    subject: 'a jagged crimson cleaver dripping red light, runes pulsing on its blade'
  }
})

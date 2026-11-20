import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'

export default defineCard({
  id: 'scepter-of-unmaking',
  type: 'weapon',
  name: 'Scepter of Unmaking',
  text: '',
  flavor: 'It ends what it touches.',
  faction: 'void',
  restriction: { kind: 'hero', heroId: 'malachar-the-unmade' },
  rarity: 'epic',
  price: 1800,
  cost: 4,
  attack: 12,
  durability: 3,
  keywords: ['ranged', 'lifesteal'],
  ai: { value: 5 },
  art: {
    subject: 'a black scepter with a void orb at its tip that swallows the light around it'
  }
})

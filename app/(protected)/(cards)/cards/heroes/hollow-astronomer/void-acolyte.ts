import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'

export default defineCard({
  id: 'void-acolyte',
  type: 'ally',
  boss: true,
  name: 'Void Acolyte',
  text: '',
  flavor: 'It reads the sky backwards.',
  faction: 'arcane',
  restriction: { kind: 'hero', heroId: 'hollow-astronomer' },
  rarity: 'epic',
  cost: 3,
  attack: 11,
  health: 11,
  keywords: ['ranged'],
  ai: { value: 4 },
  art: { subject: 'a hooded acolyte made of shadow, with a small black hole spinning between its hands' }
})

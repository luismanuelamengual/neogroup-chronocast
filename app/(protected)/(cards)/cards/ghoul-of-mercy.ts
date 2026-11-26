import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'

export default defineCard({
  id: 'ghoul-of-mercy',
  type: 'ally',
  name: 'Ghoul of Mercy',
  text: '',
  flavor: 'It eats only what is already lost.',
  faction: 'neutral',
  restriction: { sides: ['dawn'] },
  rarity: 'common',
  resist: ['shadow', 'ice'],
  price: 80,
  cost: 6,
  tribe: 'undead',
  attack: 9,
  health: 12,
  ai: { value: 6 },
  art: {
    subject:
      'Ghoul of Mercy: a ghoul with rotting green flesh and a cracked halo, roaring with jaws wide open, violet accents, mystic healer style'
  }
})

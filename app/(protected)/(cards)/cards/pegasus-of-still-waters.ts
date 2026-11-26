import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'

export default defineCard({
  id: 'pegasus-of-still-waters',
  type: 'ally',
  name: 'Pegasus of Still Waters',
  text: '',
  flavor: 'It drinks only from lakes that reflect the stars.',
  faction: 'neutral',
  restriction: { sides: ['dawn'] },
  rarity: 'common',
  resist: ['arcane'],
  weak: ['shadow'],
  price: 65,
  cost: 4,
  tribe: 'fae',
  attack: 6,
  health: 9,
  ai: { value: 4 },
  art: {
    subject:
      'Pegasus of Still Waters: a pegasus with moss-green skin and flower hair and dragonfly wings, mid-stride, indigo accents, mystic healer style'
  }
})

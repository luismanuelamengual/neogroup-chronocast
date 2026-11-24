import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'

export default defineCard({
  id: 'nymph-of-the-tower',
  type: 'ally',
  name: 'Nymph of the Tower',
  text: '',
  flavor: 'She sings to the moss on the old stones.',
  faction: 'arcane',
  restriction: { kind: 'faction', faction: 'arcane' },
  rarity: 'common',
  resist: ['arcane'],
  weak: ['shadow'],
  price: 80,
  cost: 7,
  tribe: 'fae',
  attack: 8,
  health: 15,
  ai: { value: 7 },
  art: {
    subject:
      'Nymph of the Tower: a nymph with snowy coat and silver mane and dragonfly wings, charging head-on, gold accents, medieval magic order style'
  }
})

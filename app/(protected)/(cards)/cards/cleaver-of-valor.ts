import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'

export default defineCard({
  id: 'cleaver-of-valor',
  type: 'weapon',
  subtype: 'axe',
  name: 'Cleaver of Valor',
  text: '',
  flavor: 'Courage, sharpened to an edge.',
  faction: 'bronze',
  restriction: { factions: ['bronze'], sides: ['dawn'] },
  rarity: 'common',
  price: 50,
  cost: 2,
  attack: 3,
  durability: 2,
  ai: { value: 2 },
  art: {
    subject:
      'Cleaver of Valor: a single cleaver made of white bone and leather wraps, leaning against a ruined wall, close-up filling the frame, scarlet accents, warrior style'
  }
})

import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'

export default defineCard({
  id: 'gentle-bard',
  type: 'ally',
  name: 'Gentle Bard',
  text: '',
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'mystic' },
  rarity: 'common',
  price: 55,
  cost: 3,
  attack: 5,
  health: 8,
  ai: { value: 3 },
  art: {
    subject:
      'Gentle Bard: a plump young dwarf woman with freckled fair skin, blue-black hair in short curls and a monocle, wearing a turban, dressed in a Victorian waistcoat with a samurai sash, playing a strange lute, with a confident smirk, scarlet accents, mystic healer style'
  }
})

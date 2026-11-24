import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'

export default defineCard({
  id: 'temple-keeper-of-the-sun-temple',
  type: 'ally',
  name: 'Temple Keeper of the Sun Temple',
  text: '',
  faction: 'bronze',
  restriction: { kind: 'faction', faction: 'bronze' },
  rarity: 'common',
  element: 'light',
  resist: ['light'],
  price: 80,
  cost: 6,
  tribe: 'oracle',
  keywords: ['guardian'],
  attack: 7,
  health: 15,
  ai: { value: 6 },
  art: {
    subject:
      'Temple Keeper of the Sun Temple: a lanky young man with olive skin, chestnut hair slicked back, a braided beard and war paint stripes, wearing a laurel wreath, dressed in a sea-green himation with pearl strands, holding a ring of iron keys, with a sly grin, scarlet accents, ancient bronze-age empire style'
  }
})

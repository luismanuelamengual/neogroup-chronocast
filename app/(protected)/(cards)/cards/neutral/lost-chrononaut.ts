import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'

export default defineCard({
  id: 'lost-chrononaut',
  type: 'ally',
  name: 'Lost Chrononaut',
  text: '',
  flavor: 'He left in the year 3000. He has not found it since.',
  faction: 'neutral',
  restriction: { kind: 'any' },
  rarity: 'common',
  price: 80,
  cost: 7,
  attack: 9,
  health: 13,
  ai: { value: 7 },
  art: {
    subject:
      'Lost Chrononaut: an athletic young man with tan skin, jet black hair cropped short, a braided beard and a scar across one eye, wearing a knotted bandana, dressed in viking furs over a modern raincoat, adjusting a brass time compass on the wrist, with a booming laugh, magenta accents, time rift wanderer style'
  }
})

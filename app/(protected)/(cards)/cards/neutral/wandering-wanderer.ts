import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'

export default defineCard({
  id: 'wandering-wanderer',
  type: 'ally',
  name: 'Wandering Wanderer',
  text: '',
  flavor: 'Even he does not know where he is going.',
  faction: 'neutral',
  restriction: { kind: 'any' },
  rarity: 'common',
  price: 65,
  cost: 4,
  keywords: ['agile'],
  attack: 5,
  health: 10,
  ai: { value: 4 },
  art: {
    subject:
      'Wandering Wanderer: a petite young foxfolk man with honey blond hair cropped short, a braided beard and sharp cheekbones, wearing a knotted bandana, dressed in a Renaissance doublet with mismatched armor pieces, leaning on a carved walking staff, with a confident smirk, turquoise accents, time rift wanderer style'
  }
})

import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { healHero } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'rod-of-ruin',
  type: 'weapon',
  subtype: 'orb',
  name: 'Rod of Ruin',
  text: 'When it is equipped: your hero heals 7.',
  flavor: 'Everything it touches gets older.',
  faction: 'arcane',
  restriction: { factions: ['arcane'], sides: ['eclipse'] },
  rarity: 'uncommon',
  price: 200,
  cost: 5,
  attack: 6,
  durability: 4,
  onPlay(ctx) {
    healHero(ctx, 7)
  },
  ai: { value: 5 },
  art: {
    subject:
      'Rod of Ruin: a single rod made of dark yew wood and brass fittings, in a beam of light from above, swirling around the center, amber accents, mage style'
  }
})

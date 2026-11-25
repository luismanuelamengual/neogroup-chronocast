import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'

export default defineCard({
  id: 'ash-covered-stonethrower',
  type: 'ally',
  name: 'Ash-Covered Stonethrower',
  text: '',
  flavor: 'The volcano taught him to throw.',
  faction: 'primal',
  restriction: { factions: ['primal'] },
  rarity: 'common',
  element: 'fire',
  resist: ['ice'],
  price: 65,
  cost: 4,
  tribe: 'caveborn',
  attack: 4,
  health: 13,
  ai: { value: 4 },
  art: {
    subject:
      'Ash-Covered Stonethrower: an athletic young man with deep brown skin, honey blond hair slicked back, heavy stubble and war paint stripes, wearing feathers tied in the hair, dressed in a feathered cape, winding up a sling, with a fierce scowl, turquoise accents, prehistoric jungle era style'
  }
})

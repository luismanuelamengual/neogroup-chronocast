import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'

export default defineCard({
  id: 'chrono-golem',
  type: 'ally',
  name: 'Chrono Golem',
  text: '',
  flavor: 'Its heart is a clock that has never been wound.',
  faction: 'neutral',
  restriction: { kind: 'any' },
  rarity: 'uncommon',
  price: 180,
  cost: 5,
  attack: 24,
  health: 20,
  ai: { value: 5 },
  art: {
    subject:
      'a towering bronze and crystal golem with a giant clock face in its chest and gears turning on its shoulders, stomping forward'
  }
})

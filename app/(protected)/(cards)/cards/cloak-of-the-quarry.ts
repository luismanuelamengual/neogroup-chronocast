import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'

export default defineCard({
  id: 'cloak-of-the-quarry',
  type: 'armor',
  name: 'Cloak of the Quarry',
  text: '',
  flavor: 'The prey never sees it coming.',
  faction: 'neutral',
  restriction: { sides: ['eclipse'] },
  rarity: 'common',
  price: 50,
  cost: 2,
  armor: 2,
  durability: 3,
  ai: { value: 2 },
  art: {
    subject:
      'Cloak of the Quarry: a single cloak made of dark yew wood and brass fittings, floating above a marble pedestal, swirling around the center, lime green accents, hunter style'
  }
})

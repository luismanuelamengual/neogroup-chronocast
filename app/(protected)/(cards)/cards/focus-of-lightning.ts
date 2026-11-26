import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'

export default defineCard({
  id: 'focus-of-lightning',
  type: 'weapon',
  name: 'Focus of Lightning',
  text: '',
  flavor: 'Hold it tight and hope.',
  faction: 'neutral',
  restriction: {},
  rarity: 'common',
  element: 'lightning',
  price: 50,
  cost: 2,
  keywords: ['ranged'],
  attack: 2,
  durability: 2,
  ai: { value: 2 },
  art: {
    subject:
      'Focus of Lightning: a single focus made of blackened iron with gold inlay, crackling with forked lightning, stuck in the sand, seen from above, lime green accents, mage style'
  }
})

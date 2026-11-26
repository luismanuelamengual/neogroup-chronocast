import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'

export default defineCard({
  id: 'charm-of-the-vanguard',
  type: 'attachment',
  name: 'Charm of the Vanguard',
  text: 'Attach to an ally of yours: it gains +1 attack and +4 health.',
  faction: 'neutral',
  restriction: { sides: ['dawn'] },
  rarity: 'common',
  price: 55,
  cost: 3,
  keywords: ['guardian'],
  attack: 1,
  health: 4,
  targets: ['friendlyAlly'],
  ai: { value: 3, tags: ['buff'] },
  art: {
    subject:
      'Charm of the Vanguard: an enchanted charm made of gilded marble, floating above a marble pedestal, seen from above, teal accents, warrior style'
  }
})

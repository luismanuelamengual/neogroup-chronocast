import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'

export default defineCard({
  id: 'charm-of-the-vanguard',
  type: 'attachment',
  name: 'Charm of the Vanguard',
  text: 'Attach to an ally of yours: it gains +1 attack and +4 health.',
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'warrior' },
  rarity: 'common',
  price: 55,
  cost: 3,
  keywords: ['guardian'],
  attack: 1,
  health: 4,
  targets: ['friendlyAlly'],
  ai: { value: 3, tags: ['buff'] },
  art: {
    subject: 'Charm of the Vanguard: a glowing magical charm charm, warrior style'
  }
})

import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'

export default defineCard({
  id: 'implant-of-the-quarry',
  type: 'attachment',
  name: 'Implant of the Quarry',
  text: 'Attach to an ally of yours: it gains +1 attack and +2 health.',
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'hunter' },
  rarity: 'common',
  price: 40,
  cost: 1,
  attack: 1,
  health: 2,
  targets: ['friendlyAlly'],
  ai: { value: 1, tags: ['buff'] },
  art: {
    subject: 'Implant of the Quarry: a glowing magical implant charm, hunter style'
  }
})

import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'

export default defineCard({
  id: 'sharp-blessing',
  type: 'attachment',
  name: 'Sharp Blessing',
  text: 'Attach to an ally of yours: it gains +1 attack and +4 health.',
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'hunter' },
  rarity: 'common',
  price: 55,
  cost: 3,
  keywords: ['ranged'],
  attack: 1,
  health: 4,
  targets: ['friendlyAlly'],
  ai: { value: 3, tags: ['buff'] },
  art: {
    subject: 'Sharp Blessing: a glowing magical sharp charm, hunter style'
  }
})

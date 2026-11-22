import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'

export default defineCard({
  id: 'implant-of-spirits',
  type: 'attachment',
  name: 'Implant of Spirits',
  text: 'Attach to an ally of yours: it gains +2 attack and +5 health.',
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'mystic' },
  rarity: 'uncommon',
  price: 190,
  cost: 4,
  keywords: ['lifesteal'],
  attack: 2,
  health: 5,
  targets: ['friendlyAlly'],
  ai: { value: 4, tags: ['buff'] },
  art: {
    subject: 'Implant of Spirits: a glowing magical implant charm, mystic healer style'
  }
})

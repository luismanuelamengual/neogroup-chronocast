import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'

export default defineCard({
  id: 'hour-wraith',
  type: 'ally',
  boss: true,
  name: 'Hour Wraith',
  text: '',
  flavor: 'Made of minutes nobody used.',
  faction: 'void',
  restriction: { kind: 'hero', heroId: 'vorhal-the-last-hour' },
  rarity: 'epic',
  cost: 4,
  attack: 14,
  health: 13,
  keywords: ['flying'],
  ai: { value: 5 },
  art: {
    subject: 'a ghostly wraith with clock hands for fingers floating through a dark sky'
  }
})

import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'

export default defineCard({
  id: 'servo-legs',
  type: 'attachment',
  subtype: 'implant',
  name: 'Servo Legs',
  text: 'Attach to an ally of yours: it gains +2 health and Agile.',
  faction: 'neon',
  restriction: { factions: ['neon'] },
  rarity: 'common',
  price: 60,
  cost: 1,
  keywords: ['agile'],
  health: 2,
  targets: ['friendlyAlly'],
  ai: { value: 3, tags: ['buff'] },
  art: {
    subject:
      'Servo Legs: a pair of sleek robotic leg braces with hydraulic pistons, mid-leap over neon puddles, orange accents, neon cyberpunk future style'
  }
})

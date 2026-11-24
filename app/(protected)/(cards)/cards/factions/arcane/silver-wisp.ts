import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'

export default defineCard({
  id: 'silver-wisp',
  type: 'ally',
  name: 'Silver Wisp',
  text: '',
  flavor: 'Follow it, and you may never come back.',
  faction: 'arcane',
  restriction: { kind: 'faction', faction: 'arcane' },
  rarity: 'common',
  resist: ['arcane'],
  weak: ['shadow'],
  price: 70,
  cost: 5,
  tribe: 'fae',
  keywords: ['flying'],
  attack: 6,
  health: 11,
  ai: { value: 5 },
  art: {
    subject:
      'Silver Wisp: a wisp with golden skin and white hair and butterfly wings, sniffing the air, saffron yellow accents, medieval magic order style'
  }
})

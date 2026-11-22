import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'

export default defineCard({
  id: 'rift-spark',
  type: 'ally',
  token: true,
  name: 'Rift Spark',
  text: '',
  faction: 'neutral',
  restriction: { kind: 'any' },
  rarity: 'common',
  element: 'lightning',
  resist: ['lightning'],
  weak: ['earth'],
  cost: 1,
  tribe: 'elemental',
  keywords: ['quick'],
  attack: 2,
  health: 2,
  ai: { value: 1 },
  art: {
    subject: 'a small crackling spark of violet time energy, time rift wanderer style'
  }
})

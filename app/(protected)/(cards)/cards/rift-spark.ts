import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'

export default defineCard({
  id: 'rift-spark',
  type: 'ally',
  token: true,
  name: 'Rift Spark',
  text: '',
  flavor: 'A tiny piece of the Rift, very much alive.',
  faction: 'neutral',
  restriction: {},
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

import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'

export default defineCard({
  id: 'hoplite-conscript',
  type: 'ally',
  token: true,
  name: 'Hoplite Conscript',
  text: '',
  flavor: 'Yesterday a farmer. Today, a wall.',
  faction: 'bronze',
  restriction: { factions: ['bronze'] },
  rarity: 'common',
  cost: 1,
  tribe: 'legionnaire',
  keywords: ['guardian', 'retaliate'],
  attack: 1,
  health: 5,
  ai: { value: 1 },
  art: {
    subject: 'a young conscript with a round bronze shield, ancient bronze-age empire style'
  }
})

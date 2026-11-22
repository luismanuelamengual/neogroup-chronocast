import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'

export default defineCard({
  id: 'risen-skeleton',
  type: 'ally',
  token: true,
  name: 'Risen Skeleton',
  text: '',
  faction: 'void',
  restriction: { kind: 'faction', faction: 'void' },
  rarity: 'common',
  resist: ['shadow', 'ice'],
  cost: 1,
  tribe: 'undead',
  attack: 3,
  health: 2,
  ai: { value: 1 },
  art: {
    subject: 'a skeleton clawing its way out of a grave, dark end-of-time void style'
  }
})

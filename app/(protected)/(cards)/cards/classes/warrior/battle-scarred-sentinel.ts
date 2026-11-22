import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { buffSelf } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'battle-scarred-sentinel',
  type: 'ally',
  name: 'Battle-Scarred Sentinel',
  text: 'After it takes damage: it gains +2 attack.',
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'warrior' },
  rarity: 'rare',
  resist: ['earth'],
  weak: ['acid'],
  price: 630,
  cost: 4,
  tribe: 'colossus',
  keywords: ['guardian'],
  attack: 4,
  health: 12,
  onDamaged(ctx) {
    buffSelf(ctx, 2, 0)
  },
  ai: { value: 5, tags: ['buff'] },
  art: {
    subject: 'a mythic ancient creature, the battle-scarred sentinel, charging into battle, warrior style'
  }
})

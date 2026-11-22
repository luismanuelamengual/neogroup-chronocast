import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { buffSelf } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'phalanx-of-the-warlord',
  type: 'ally',
  name: 'Phalanx of the Warlord',
  text: 'When it attacks: it gains +1 attack.',
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'warrior' },
  rarity: 'rare',
  price: 570,
  cost: 3,
  tribe: 'legionnaire',
  attack: 5,
  health: 8,
  onAttack(ctx) {
    buffSelf(ctx, 1, 0)
  },
  ai: { value: 4, tags: ['buff'] },
  art: {
    subject: 'an ancient bronze-armored soldier, the phalanx of the warlord, lunging forward, warrior style'
  }
})

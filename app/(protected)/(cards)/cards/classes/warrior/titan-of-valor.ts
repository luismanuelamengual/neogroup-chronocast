import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { buffSelf } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'titan-of-valor',
  type: 'ally',
  name: 'Titan of Valor',
  text: 'When it attacks: it gains +1 attack.',
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'warrior' },
  rarity: 'common',
  resist: ['earth'],
  weak: ['acid'],
  price: 50,
  cost: 2,
  tribe: 'colossus',
  attack: 4,
  health: 3,
  onAttack(ctx) {
    buffSelf(ctx, 1, 0)
  },
  ai: { value: 2, tags: ['aggro', 'buff'] },
  art: {
    subject: 'a mythic ancient creature, the titan of valor, lunging forward, warrior style'
  }
})

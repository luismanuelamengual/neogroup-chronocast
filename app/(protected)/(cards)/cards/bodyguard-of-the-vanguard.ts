import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { grantKeyword, isTribe } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'bodyguard-of-the-vanguard',
  type: 'ally',
  name: 'Bodyguard of the Vanguard',
  text: 'When another Enforcer of yours enters: it gains Guardian.',
  flavor: 'Every blow aimed at you hits him first.',
  faction: 'neutral',
  restriction: { sides: ['dawn'] },
  rarity: 'rare',
  price: 480,
  cost: 4,
  tribe: 'enforcer',
  keywords: ['retaliate'],
  attack: 4,
  health: 12,
  onAllyEnter(ctx, ally) {
    if (isTribe(ally, 'enforcer')) {
      grantKeyword(ctx, ally, 'guardian')
    }
  },
  ai: { value: 5, tags: ['heal'] },
  art: {
    subject:
      'Bodyguard of the Vanguard: a willowy adult android woman with a smooth metal scalp and a bandaged forehead, wearing a tinted visor, dressed in a hooded street jacket with glowing seams, raising a riot shield, with a haunted stare, crimson accents, warrior style'
  }
})

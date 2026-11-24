import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { healHero, isTribe } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'bodyguard-of-the-vanguard',
  type: 'ally',
  name: 'Bodyguard of the Vanguard',
  text: 'When another Enforcer of yours enters: your hero heals 2.',
  flavor: 'Every blow aimed at you hits him first.',
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'warrior' },
  rarity: 'rare',
  price: 630,
  cost: 4,
  tribe: 'enforcer',
  keywords: ['retaliate'],
  attack: 4,
  health: 12,
  onAllyEnter(ctx, ally) {
    if (isTribe(ally, 'enforcer')) {
      healHero(ctx, 2)
    }
  },
  ai: { value: 5, tags: ['heal'] },
  art: {
    subject:
      'Bodyguard of the Vanguard: a willowy adult android woman with a smooth metal scalp and a bandaged forehead, wearing a tinted visor, dressed in a hooded street jacket with glowing seams, raising a riot shield, with a haunted stare, crimson accents, warrior style'
  }
})

import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { buff, tribeAllies } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'radiant-zombie',
  type: 'ally',
  name: 'Radiant Zombie',
  text: 'When it enters: your other Undead gain +2 health.',
  flavor: 'Blessed by mistake.',
  faction: 'neutral',
  restriction: { sides: ['dawn'] },
  rarity: 'common',
  element: 'shadow',
  resist: ['shadow', 'ice'],
  price: 55,
  cost: 3,
  tribe: 'undead',
  keywords: ['shield'],
  attack: 4,
  health: 9,
  onEnter(ctx) {
    for (const unit of tribeAllies(ctx, ctx.owner, 'undead', true)) {
      buff(ctx, unit, 0, 2)
    }
  },
  ai: { value: 3 },
  art: {
    subject:
      'Radiant Zombie: a zombie with pale glowing white spirit-light and exposed ribs, rearing up, magenta accents, mystic healer style'
  }
})

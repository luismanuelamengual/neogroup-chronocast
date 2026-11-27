import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { buff, tribeAllies } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'relentless-hitman',
  type: 'ally',
  name: 'Relentless Hitman',
  text: 'When it dies: your other Enforcers gain +2 attack.',
  flavor: 'He never misses a deadline.',
  faction: 'neutral',
  restriction: { sides: ['eclipse'] },
  rarity: 'common',
  price: 55,
  cost: 3,
  tribe: 'enforcer',
  keywords: ['guardian'],
  attack: 3,
  health: 11,
  onDeath(ctx) {
    for (const unit of tribeAllies(ctx, ctx.owner, 'enforcer', true)) {
      buff(ctx, unit, 2, 0)
    }
  },
  ai: { value: 3 },
  art: {
    subject:
      'Relentless Hitman: a wiry adult woman with pale skin, electric teal hair in long braids and a beaded chin piercing, dressed in a long armored trench coat, holding a silenced pistol, with a confident smirk, violet accents, warrior style'
  }
})

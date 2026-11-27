import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { buffThisPhase, damage, self } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'reckless-berserker',
  type: 'ally',
  name: 'Reckless Berserker',
  text: 'When it attacks: it gains +2 attack this phase and your hero takes 2 shadow damage.',
  faction: 'neutral',
  restriction: { sides: ['eclipse'] },
  rarity: 'common',
  price: 60,
  cost: 4,
  tribe: 'colossus',
  attack: 7,
  health: 6,
  onAttack(ctx) {
    const me = self(ctx)

    if (me) {
      buffThisPhase(ctx, me, 2)
    }

    damage(ctx, { player: ctx.owner, slot: 'hero' }, 2, 'shadow')
  },
  ai: { value: 3 },
  art: {
    subject:
      'Reckless Berserker: a hulking berserker with bloodshot eyes swinging two cleavers, blood smeared war paint, dark ritual mood'
  }
})

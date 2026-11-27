import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { buffThisPhase, discardSize, self } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'grim-skeleton',
  type: 'ally',
  name: 'Grim Skeleton',
  text: 'When it attacks: it gains +1 attack this phase for every 5 cards in your discard pile.',
  flavor: 'It does not smile. It just looks like it.',
  faction: 'void',
  restriction: { factions: ['void'], sides: ['dawn'] },
  rarity: 'rare',
  resist: ['shadow', 'ice'],
  price: 540,
  cost: 5,
  tribe: 'undead',
  attack: 7,
  health: 9,
  onAttack(ctx) {
    const unit = self(ctx)

    if (unit) {
      buffThisPhase(ctx, unit, Math.floor(discardSize(ctx, ctx.owner) / 5))
    }
  },
  ai: { value: 6, tags: ['heal'] },
  art: {
    subject:
      'Grim Skeleton: a skeleton with bleached bones and grave dirt falling off it, pawing the ground, violet accents, dark end-of-time void style'
  }
})

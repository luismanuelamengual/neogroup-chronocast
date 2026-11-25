import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { buff, healHero, priciestAllyInHand, summonPriciestFromHand } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'omnigear-prime',
  type: 'hero',
  name: 'Omnigear Prime',
  text: 'Assembly Line (4): the most expensive ally of your hand that costs 6 Chronos or less is summoned without paying its cost and gains +3 attack and +3 health. At the start of each phase, your hero heals 2.',
  flavor: 'The machine that builds machines decided it no longer needs builders.',
  faction: 'clockwork',
  heroClass: 'warrior',
  side: 'dawn',
  restriction: { heroes: ['omnigear-prime'] },
  rarity: 'legendary',
  cost: 0,
  health: 65,
  ability: {
    name: 'Assembly Line',
    text: 'The most expensive ally of your hand that costs 6 Chronos or less is summoned without paying its cost and gains +3 attack and +3 health.',
    cost: 4,
    ai: { tags: ['summonHand'] },
    canActivate(ctx) {
      if (!priciestAllyInHand(ctx, ctx.owner, 6)) {
        return 'noChoice'
      }

      return ctx.engine.freeSlots(ctx.owner).length > 0 ? null : 'slotsFull'
    },
    activate(ctx) {
      const unit = summonPriciestFromHand(ctx, ctx.owner, 6)

      if (unit) {
        buff(ctx, unit, 3, 3)
      }
    }
  },
  onPhaseStart(ctx) {
    healHero(ctx, 2)
  },
  ai: { value: 0 },
  art: {
    subject:
      'a gigantic sentient factory machine with a glowing central eye and dozens of mechanical arms assembling robots'
  }
})

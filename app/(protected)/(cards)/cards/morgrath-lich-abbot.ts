import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damageRandomAlly, reviveTopAlly, topDiscardAlly } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'morgrath-lich-abbot',
  type: 'hero',
  name: 'Morgrath, the Lich Abbot',
  text: 'Unholy Rising (4): the ally on top of your discard pile returns to play. At the start of each phase, deal 3 shadow damage to a random enemy ally.',
  flavor: 'He prayed for eternal life. Something answered.',
  faction: 'arcane',
  heroClass: 'mage',
  side: 'eclipse',
  restriction: { heroes: ['morgrath-lich-abbot'] },
  rarity: 'legendary',
  element: 'shadow',
  cost: 0,
  health: 65,
  ability: {
    name: 'Unholy Rising',
    text: 'The ally on top of your discard pile returns to play.',
    cost: 4,
    ai: { tags: ['revive'] },
    canActivate(ctx) {
      if (!topDiscardAlly(ctx, ctx.owner)) {
        return 'noChoice'
      }

      return ctx.engine.freeSlots(ctx.owner).length > 0 ? null : 'slotsFull'
    },
    activate(ctx) {
      reviveTopAlly(ctx, ctx.owner)
    }
  },
  onPhaseStart(ctx) {
    damageRandomAlly(ctx, ctx.opponent, 3)
  },
  ai: { value: 0 },
  art: {
    subject:
      'an undead abbot in tattered monk robes with a glowing violet skull face holding a dark grimoire in a ruined abbey'
  }
})

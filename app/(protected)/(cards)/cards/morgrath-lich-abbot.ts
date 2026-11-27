import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damageRandomAlly, lastDefeatedAlly, reviveLastDefeated } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'morgrath-lich-abbot',
  type: 'hero',
  name: 'Morgrath, the Lich Abbot',
  text: 'Unholy Rising (4): the last ally of yours that was defeated returns to play. When another ally of yours dies, deal 2 shadow damage to a random enemy ally.',
  flavor: 'He prayed for eternal life. Something answered.',
  faction: 'void',
  side: 'eclipse',
  restriction: { heroes: ['morgrath-lich-abbot'] },
  rarity: 'legendary',
  element: 'shadow',
  cost: 0,
  health: 65,
  ability: {
    name: 'Unholy Rising',
    text: 'The last ally of yours that was defeated returns to play.',
    cost: 4,
    ai: { tags: ['revive'] },
    canActivate(ctx) {
      if (!lastDefeatedAlly(ctx, ctx.owner)) {
        return 'noChoice'
      }

      return ctx.engine.freeSlots(ctx.owner).length > 0 ? null : 'slotsFull'
    },
    activate(ctx) {
      reviveLastDefeated(ctx, ctx.owner)
    }
  },
  onOwnAllyDeath(ctx) {
    damageRandomAlly(ctx, ctx.opponent, 2)
  },
  ai: { value: 0 },
  art: {
    subject:
      'an undead abbot in tattered monk robes with a glowing sickly green skull face and green soul-fire in his eye sockets, holding a dark grimoire as ghostly green souls rise from the graves of a ruined abbey'
  }
})

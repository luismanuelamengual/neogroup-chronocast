import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { alliesOf, damageAlly, damageRandomAlly, freeze, slotOf } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'morgrath-lich-abbot',
  type: 'hero',
  name: 'Morgrath, the Lich Abbot',
  text: 'Grave Frost (4), a spell: freeze every enemy ally with 4 health or less and deal 4 shadow damage to each of them. At the start of each phase, deal 3 shadow damage to a random enemy ally.',
  flavor: 'He prayed for eternal life. Something answered.',
  faction: 'arcane',
  side: 'eclipse',
  restriction: { heroes: ['morgrath-lich-abbot'] },
  rarity: 'legendary',
  element: 'shadow',
  cost: 0,
  health: 65,
  ability: {
    name: 'Grave Frost',
    text: 'A spell: freeze every enemy ally with 4 health or less and deal 4 shadow damage to each of them.',
    cost: 4,
    spell: true,
    ai: { tags: ['removal'] },
    activate(ctx) {
      for (const unit of alliesOf(ctx, ctx.opponent).filter((candidate) => candidate.health <= 4)) {
        const ref = slotOf(ctx, unit)

        if (ref) {
          freeze(ctx, ref)
          damageAlly(ctx, unit, 4)
        }
      }
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

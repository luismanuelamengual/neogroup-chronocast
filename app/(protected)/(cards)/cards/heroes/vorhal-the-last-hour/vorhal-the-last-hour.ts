import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damage, damageAllAllies } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'vorhal-the-last-hour',
  type: 'hero',
  boss: true,
  name: 'Vorhal, the Last Hour',
  text: 'Toll of the Last Hour (3): deal 4 damage to every enemy ally. At the start of each phase, deal 2 damage to the enemy hero.',
  flavor: 'When the last clock stops, he is what is left.',
  faction: 'void',
  heroClass: 'mage',
  restriction: { kind: 'hero', heroId: 'vorhal-the-last-hour' },
  rarity: 'legendary',
  cost: 0,
  health: 58,
  ability: {
    name: 'Toll of the Last Hour',
    text: 'Deal 4 damage to every enemy ally.',
    cost: 3,
    activate(ctx) {
      damageAllAllies(ctx, ctx.opponent, 4)
    }
  },
  onPhaseStart(ctx) {
    damage(ctx, { player: ctx.opponent, slot: 'hero' }, 2)
  },
  ai: { value: 0 },
  art: {
    subject: 'a towering skeletal figure with a giant broken clock for a head, ringing a black bell at the end of time'
  }
})

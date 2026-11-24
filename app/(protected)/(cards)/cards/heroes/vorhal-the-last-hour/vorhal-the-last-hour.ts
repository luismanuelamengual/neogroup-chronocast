import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damage, damageAllAllies, drainEnergy } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'vorhal-the-last-hour',
  type: 'hero',
  name: 'Vorhal, the Last Hour',
  text: 'Toll of the Last Hour (6): deal 6 time damage to every enemy ally and the enemy hero loses 2 energy. At the start of each phase, deal 1 time damage to the enemy hero.',
  flavor: 'When the last clock stops, he is what is left.',
  faction: 'void',
  heroClass: 'mage',
  restriction: { kind: 'hero', heroId: 'vorhal-the-last-hour' },
  rarity: 'legendary',
  element: 'time',
  cost: 0,
  health: 63,
  ability: {
    name: 'Toll of the Last Hour',
    text: 'Deal 6 time damage to every enemy ally and the enemy hero loses 2 energy.',
    cost: 6,
    ai: { tags: ['removal'] },
    activate(ctx) {
      damageAllAllies(ctx, ctx.opponent, 6)
      drainEnergy(ctx, ctx.opponent, 2)
    }
  },
  onPhaseStart(ctx) {
    damage(ctx, { player: ctx.opponent, slot: 'hero' }, 1)
  },
  ai: { value: 0 },
  art: {
    subject: 'a towering skeletal figure with a giant broken clock for a head, ringing a black bell at the end of time'
  }
})

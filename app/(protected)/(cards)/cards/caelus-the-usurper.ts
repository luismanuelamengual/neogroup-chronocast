import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { alliesOf, buff, drainChronosCapacity, gainChronosCapacity } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'caelus-the-usurper',
  type: 'hero',
  name: 'Caelus the Usurper',
  text: 'Tribute (5): the rival loses 1 Chronos capacity and you gain it. At the start of each phase, your allies gain +1 attack.',
  flavor: 'He stole a crown from a Rome that never was, and wants the real one.',
  faction: 'bronze',
  side: 'eclipse',
  restriction: { heroes: ['caelus-the-usurper'] },
  rarity: 'legendary',
  element: 'light',
  cost: 0,
  health: 53,
  ability: {
    name: 'Tribute',
    text: 'The rival loses 1 Chronos capacity and you gain it.',
    cost: 5,
    activate(ctx) {
      gainChronosCapacity(ctx, ctx.owner, drainChronosCapacity(ctx, ctx.opponent, 1))
    }
  },
  onPhaseStart(ctx) {
    for (const unit of alliesOf(ctx, ctx.owner)) {
      buff(ctx, unit, 1, 0)
    }
  },
  ai: { value: 0 },
  art: {
    subject:
      'a cruel Roman emperor with a cracked golden laurel crown and a purple cloak, sitting on a bronze throne surrounded by shattered clocks'
  }
})

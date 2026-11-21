import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { alliesOf, buff, damageAllAllies } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'caelus-the-usurper',
  type: 'hero',
  boss: true,
  name: 'Caelus the Usurper',
  text: 'Decimate (4): deal 2 damage to every enemy ally. At the start of each phase, your allies gain +1 attack.',
  flavor: 'He stole a crown from a Rome that never was, and wants the real one.',
  faction: 'bronze',
  heroClass: 'warrior',
  restriction: { kind: 'hero', heroId: 'caelus-the-usurper' },
  rarity: 'legendary',
  cost: 0,
  health: 48,
  ability: {
    name: 'Decimate',
    text: 'Deal 2 damage to every enemy ally.',
    cost: 4,
    activate(ctx) {
      damageAllAllies(ctx, ctx.opponent, 2)
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

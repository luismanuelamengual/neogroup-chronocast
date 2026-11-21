import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damage, damageRandomAlly } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'archmage-of-the-spire',
  type: 'ally',
  name: 'Archmage of the Spire',
  text: 'On enter: deal 10 damage to a random enemy ally. At the start of each phase, deal 3 damage to the enemy hero.',
  flavor: 'From the top of the spire, he rules the weather and the war.',
  faction: 'arcane',
  restriction: { kind: 'faction', faction: 'arcane' },
  rarity: 'epic',
  price: 2000,
  cost: 6,
  attack: 18,
  health: 20,
  keywords: ['ranged'],
  onEnter(ctx) {
    damageRandomAlly(ctx, ctx.opponent, 10)
  },
  onPhaseStart(ctx) {
    damage(ctx, { player: ctx.opponent, slot: 'hero' }, 3)
  },
  ai: { value: 7, tags: ['removal', 'burn'] },
  art: {
    subject: 'an ancient archmage with a long silver beard standing on top of a crystal spire, commanding the storm'
  }
})

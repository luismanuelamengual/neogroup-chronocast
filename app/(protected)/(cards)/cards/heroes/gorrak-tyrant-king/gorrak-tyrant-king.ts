import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damage, heal } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'gorrak-tyrant-king',
  type: 'hero',
  boss: true,
  name: 'Gorrak, Tyrant King',
  text: 'Devour (2): deal 8 damage to an enemy slot and your hero heals 8. At the start of each phase, your hero heals 3.',
  flavor: 'The jungle has one king. He eats the others.',
  faction: 'primal',
  heroClass: 'hunter',
  restriction: { kind: 'hero', heroId: 'gorrak-tyrant-king' },
  rarity: 'legendary',
  cost: 0,
  health: 120,
  ability: {
    name: 'Devour',
    text: 'Deal 8 damage to an enemy slot and your hero heals 8.',
    cost: 2,
    targets: ['enemySlot'],
    activate(ctx) {
      damage(ctx, ctx.targets[0], 8)
      heal(ctx, { player: ctx.owner, slot: 'hero' }, 8)
    }
  },
  onPhaseStart(ctx) {
    heal(ctx, { player: ctx.owner, slot: 'hero' }, 3)
  },
  ai: { value: 0 },
  art: {
    subject:
      'a huge tribal warlord with a crown of teeth riding a roaring tyrannosaurus through a burning prehistoric jungle'
  }
})

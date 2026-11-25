import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damage, heal, healHero } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'gorrak-tyrant-king',
  type: 'hero',
  name: 'Gorrak, Tyrant King',
  text: 'Devour (4): deal 10 earth damage to an enemy slot and your hero heals 6. At the start of each phase, your hero heals 3.',
  flavor: 'The jungle has one king. He eats the others.',
  faction: 'primal',
  heroClass: 'hunter',
  side: 'dawn',
  restriction: { kind: 'hero', heroId: 'gorrak-tyrant-king' },
  rarity: 'legendary',
  element: 'earth',
  cost: 0,
  health: 65,
  ability: {
    name: 'Devour',
    text: 'Deal 10 earth damage to an enemy slot and your hero heals 6.',
    cost: 4,
    targets: ['enemySlot'],
    activate(ctx) {
      damage(ctx, ctx.targets[0], 10)
      healHero(ctx, 6)
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

import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { healHero, isCursed, weakenAllAllies } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'nyx-hollowsong',
  type: 'hero',
  name: 'Nyx Hollowsong',
  text: 'Total Weakening (5): every enemy ally gets -2 attack. When an enemy ally with a curse dies, your hero heals 3.',
  flavor: 'Her song reaches the dead. They always come back to listen.',
  faction: 'void',
  side: 'dawn',
  restriction: { heroes: ['nyx-hollowsong'] },
  rarity: 'epic',
  cost: 0,
  health: 55,
  ability: {
    name: 'Total Weakening',
    text: 'Every enemy ally gets -2 attack.',
    cost: 5,
    ai: { tags: ['removal'] },
    activate(ctx) {
      weakenAllAllies(ctx, ctx.opponent, 2)
    }
  },
  onEnemyAllyDeath(ctx, unit) {
    if (isCursed(unit)) {
      healHero(ctx, 3)
    }
  },
  ai: { value: 0 },
  art: {
    subject:
      'a pale singer with long black hair and a dress of night, singing as ghostly green souls rise around her in a floating graveyard'
  }
})

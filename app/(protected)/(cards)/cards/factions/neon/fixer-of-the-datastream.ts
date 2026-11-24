import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damageEnemyHero } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'fixer-of-the-datastream',
  type: 'ally',
  name: 'Fixer of the Datastream',
  text: 'When it attacks: deal 3 sonic damage to the enemy hero.',
  faction: 'neon',
  restriction: { kind: 'faction', faction: 'neon' },
  rarity: 'uncommon',
  element: 'sonic',
  price: 205,
  cost: 5,
  tribe: 'enforcer',
  keywords: ['stealth'],
  attack: 5,
  health: 10,
  onAttack(ctx) {
    damageEnemyHero(ctx, 3)
  },
  ai: { value: 5, tags: ['aggro'] },
  art: {
    subject:
      'Fixer of the Datastream: a muscular elderly man with freckled fair skin, snow-white hair in a single long braid, a thin mustache and sharp cheekbones, wearing a street hood, dressed in a leather duster with LED fringe, holding a strange relic, standing tall with arms crossed, with a sly grin, emerald accents, neon cyberpunk future style'
  }
})

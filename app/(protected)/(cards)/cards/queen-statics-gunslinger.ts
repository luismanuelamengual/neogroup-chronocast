import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { buffTribe, damageEnemyHero } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'queen-statics-gunslinger',
  type: 'ally',
  name: "Queen Static's Gunslinger",
  text: 'When it dies: your Enforcers gain +1 attack and +1 health. At the end of each phase: deal 1 lightning damage to the enemy hero.',
  faction: 'neon',
  restriction: { heroes: ['queen-static'] },
  rarity: 'legendary',
  element: 'lightning',
  price: 2320,
  cost: 5,
  tribe: 'enforcer',
  keywords: ['unique'],
  attack: 6,
  health: 14,
  onDeath(ctx) {
    buffTribe(ctx, ctx.owner, 'enforcer', 1, 1)
  },
  onPhaseEnd(ctx) {
    damageEnemyHero(ctx, 1)
  },
  ai: { value: 7, tags: ['aggro', 'buff', 'tribe'] },
  art: {
    subject:
      "Queen Static's Gunslinger: a wiry young android man with a smooth metal scalp, mutton chops and heterochromatic eyes, wearing a street hood, dressed in a long armored trench coat, holding a small caged light, walking calmly, with a mischievous wink, emerald accents, neon cyberpunk future style"
  }
})

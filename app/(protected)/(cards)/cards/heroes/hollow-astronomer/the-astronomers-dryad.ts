import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { buffTribe, damageEnemyHero } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'the-astronomers-dryad',
  type: 'ally',
  name: "The Astronomer's Dryad",
  text: 'When it enters: your other Fae gain +2 attack and +2 health. At the start of each phase: deal 1 arcane damage to the enemy hero.',
  faction: 'arcane',
  restriction: { kind: 'hero', heroId: 'hollow-astronomer' },
  rarity: 'legendary',
  element: 'arcane',
  resist: ['arcane'],
  weak: ['shadow'],
  price: 5600,
  cost: 5,
  tribe: 'fae',
  keywords: ['shield', 'unique'],
  attack: 5,
  health: 10,
  onEnter(ctx) {
    buffTribe(ctx, ctx.owner, 'fae', 2, 2, true)
  },
  onPhaseStart(ctx) {
    damageEnemyHero(ctx, 1)
  },
  ai: { value: 7, tags: ['aggro', 'buff', 'tribe'] },
  art: {
    subject:
      "The Astronomer's Dryad: a dryad with dappled grey coat and gold mane and feathered wings, standing proud on a rock, cobalt blue accents, medieval magic order style"
  }
})

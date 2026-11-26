import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damageEnemyHero, freeze } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'scholarly-stasis',
  type: 'ability',
  subtype: 'gadget',
  name: 'Scholarly Stasis',
  text: 'Freeze an enemy ally and deal 2 time damage to the enemy hero.',
  faction: 'clockwork',
  restriction: { factions: ['clockwork'] },
  rarity: 'rare',
  element: 'time',
  price: 360,
  cost: 2,
  targets: ['enemyAlly'],
  onPlay(ctx) {
    freeze(ctx, ctx.targets[0])
    damageEnemyHero(ctx, 2)
  },
  ai: { value: 3, tags: ['aggro', 'removal'] },
  art: {
    subject:
      'Scholarly Stasis: a clock frozen inside a floating crystal, its hands stopped, surrounded by floating clock hands and glowing sand, in a dark forest clearing, swirling around the center, scarlet accents, mage style'
  }
})

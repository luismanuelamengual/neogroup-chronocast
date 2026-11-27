import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { artifactCount, damageEnemyHero, destroyArtifact, draw } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'overclock-gadget',
  type: 'ability',
  subtype: 'gadget',
  name: 'Total Overclock',
  text: 'Destroy every artifact of yours: for each one, deal 2 damage to the enemy hero and draw a card (up to 3 cards).',
  faction: 'clockwork',
  restriction: { factions: ['clockwork'] },
  rarity: 'rare',
  price: 420,
  cost: 2,
  onPlay(ctx) {
    let destroyed = 0

    while (artifactCount(ctx) > 0 && destroyArtifact(ctx, ctx.owner, 'random')) {
      destroyed++
    }

    damageEnemyHero(ctx, 2 * destroyed)
    draw(ctx, ctx.owner, Math.min(3, destroyed))
  },
  ai: { value: 3 },
  art: {
    subject:
      'Total Overclock: a row of brass machines overheating and exploding in a chain of steam and sparks, steampunk clockwork era style'
  }
})

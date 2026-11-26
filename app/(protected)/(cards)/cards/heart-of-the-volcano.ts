import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damageAllAllies, damageEnemyHero } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'heart-of-the-volcano',
  type: 'item',
  reward: true,
  name: 'Heart of the Volcano',
  text: 'Deal 3 fire damage to every enemy ally and 5 fire damage to the enemy hero.',
  flavor: 'It still beats, once every hundred years.',
  faction: 'primal',
  restriction: { heroes: ['kazhul-mother-of-ash'] },
  rarity: 'exotic',
  element: 'fire',
  cost: 5,
  keywords: ['unique'],
  onPlay(ctx) {
    damageAllAllies(ctx, ctx.opponent, 3)
    damageEnemyHero(ctx, 5)
  },
  ai: { value: 6, tags: ['removal'] },
  art: {
    subject:
      'Heart of the Volcano: a glowing heart-shaped chunk of molten obsidian pulsing with lava veins, resting in a crater of black rock, rising embers, orange accents'
  }
})

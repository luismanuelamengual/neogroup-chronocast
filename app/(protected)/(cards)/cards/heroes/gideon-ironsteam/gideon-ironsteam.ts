import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damage, healHero } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'gideon-ironsteam',
  type: 'hero',
  name: 'Gideon Ironsteam',
  text: 'Piston Punch (3): deal 9 fire damage to an enemy slot and your hero heals 4.',
  flavor: 'Half man, half engine, all stubbornness.',
  faction: 'clockwork',
  heroClass: 'warrior',
  restriction: { kind: 'hero', heroId: 'gideon-ironsteam' },
  rarity: 'rare',
  element: 'fire',
  cost: 0,
  health: 63,
  ability: {
    name: 'Piston Punch',
    text: 'Deal 9 fire damage to an enemy slot and your hero heals 4.',
    cost: 3,
    targets: ['enemySlot'],
    activate(ctx) {
      damage(ctx, ctx.targets[0], 9)
      healHero(ctx, 4)
    }
  },
  ai: { value: 0 },
  art: {
    subject:
      'a burly Victorian brawler with a huge steam-powered mechanical arm and a top hat, steam bursting from his shoulder in a factory'
  }
})

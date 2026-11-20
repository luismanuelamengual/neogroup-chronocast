import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damage, gainArmor } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'gideon-ironsteam',
  type: 'hero',
  name: 'Gideon Ironsteam',
  text: 'Piston Punch (2): deal 10 damage to an enemy slot and your hero gains 4 armor.',
  flavor: 'Half man, half engine, all stubbornness.',
  faction: 'clockwork',
  heroClass: 'warrior',
  restriction: { kind: 'hero', heroId: 'gideon-ironsteam' },
  rarity: 'rare',
  cost: 0,
  health: 115,
  ability: {
    name: 'Piston Punch',
    text: 'Deal 10 damage to an enemy slot and your hero gains 4 armor.',
    cost: 2,
    targets: ['enemySlot'],
    activate(ctx) {
      damage(ctx, ctx.targets[0], 10)
      gainArmor(ctx, ctx.owner, 4)
    }
  },
  ai: { value: 0 },
  art: {
    subject:
      'a burly Victorian brawler with a huge steam-powered mechanical arm and a top hat, steam bursting from his shoulder in a factory'
  }
})

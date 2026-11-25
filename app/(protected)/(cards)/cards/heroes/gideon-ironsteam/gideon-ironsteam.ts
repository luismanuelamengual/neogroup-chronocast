import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { burn, slotsNextTo, unitAt } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'gideon-ironsteam',
  type: 'hero',
  name: 'Gideon Ironsteam',
  text: 'Overheat (4): burn an enemy ally (4) and the allies next to it (2).',
  flavor: 'Half man, half engine, all stubbornness.',
  faction: 'clockwork',
  heroClass: 'warrior',
  restriction: { kind: 'hero', heroId: 'gideon-ironsteam' },
  rarity: 'rare',
  element: 'fire',
  cost: 0,
  health: 63,
  ability: {
    name: 'Overheat',
    text: 'Burn an enemy ally (4) and the allies next to it (2).',
    cost: 4,
    targets: ['enemyAlly'],
    activate(ctx) {
      burn(ctx, ctx.targets[0], 4)

      for (const ref of slotsNextTo(ctx, ctx.targets[0])) {
        if (unitAt(ctx, ref)) {
          burn(ctx, ref, 2)
        }
      }
    }
  },
  ai: { value: 0 },
  art: {
    subject:
      'a burly Victorian brawler with a huge steam-powered mechanical arm and a top hat, steam bursting from his shoulder in a factory'
  }
})

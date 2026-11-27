import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { buffSelf, cardOf, destroyAt, self, unitAt } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'abyssal-glutton',
  type: 'ally',
  name: 'Abyssal Glutton',
  text: 'When any other ally dies: it gains +1 attack and +1 health. Its ability is paid with energy (⚡).',
  flavor: 'It is always hungry. Always.',
  faction: 'void',
  restriction: { factions: ['void'], sides: ['eclipse'] },
  rarity: 'legendary',
  price: 2200,
  cost: 6,
  tribe: 'horror',
  keywords: ['unique'],
  attack: 6,
  health: 12,
  ability: {
    name: 'Devour',
    text: 'Destroy an enemy ally whose cost is less than half its attack.',
    cost: 3,
    resource: 'energy',
    targets: ['enemyAlly'],
    ai: { tags: ['removal'] },
    activate(ctx) {
      const victim = unitAt(ctx, ctx.targets[0])
      const unit = self(ctx)

      if (victim && unit && cardOf(victim).cost * 2 < ctx.engine.attackOf(unit)) {
        destroyAt(ctx, ctx.targets[0])
      }
    }
  },
  onEnemyAllyDeath(ctx) {
    buffSelf(ctx, 1, 1)
  },
  onOwnAllyDeath(ctx) {
    buffSelf(ctx, 1, 1)
  },
  ai: { value: 7, tags: ['ability', 'energy', 'removal'] },
  art: {
    subject:
      'Abyssal Glutton: a bloated abyssal horror with a gaping maw full of teeth and many grasping tentacles, sitting on a pile of bones, full body, rot green accents, dark end-of-time void style'
  }
})

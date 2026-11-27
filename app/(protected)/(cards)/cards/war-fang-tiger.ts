import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { destroyAt, doom, self } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'war-fang-tiger',
  type: 'ally',
  name: 'War Fang Tiger',
  text: 'Its ability is paid with energy (⚡).',
  flavor: 'It spends its whole life on one leap.',
  faction: 'primal',
  restriction: { factions: ['primal'] },
  rarity: 'epic',
  price: 1100,
  cost: 5,
  tribe: 'beast',
  attack: 6,
  health: 10,
  ability: {
    name: 'Last Leap',
    text: 'Destroy an enemy ally. At the end of this phase, this ally dies.',
    cost: 3,
    resource: 'energy',
    targets: ['enemyAlly'],
    ai: { tags: ['removal'] },
    activate(ctx) {
      destroyAt(ctx, ctx.targets[0])

      const unit = self(ctx)

      if (unit) {
        doom(ctx, unit)
      }
    }
  },
  ai: { value: 6, tags: ['ability', 'energy', 'removal'] },
  art: {
    subject:
      'War Fang Tiger: a striped tiger-wolf hybrid with sabre fangs leaping through the air, war paint on its fur, full body, amber accents, prehistoric jungle era style'
  }
})

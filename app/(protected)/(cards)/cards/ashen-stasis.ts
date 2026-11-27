import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { destroyAt, unitAt } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'ashen-stasis',
  type: 'ability',
  subtype: 'ritual',
  name: 'Ashen Stasis',
  text: 'Destroy an enemy ally with 4 health or less. Fast.',
  flavor: 'Frozen in ash, like the cities of old.',
  faction: 'void',
  restriction: { factions: ['void'] },
  rarity: 'common',
  price: 50,
  cost: 2,
  speed: 'fast',
  targets: ['enemyAlly'],
  onPlay(ctx) {
    const unit = unitAt(ctx, ctx.targets[0])

    if (unit && unit.health <= 4) {
      destroyAt(ctx, ctx.targets[0])
    }
  },
  ai: { value: 2, tags: ['removal'] },
  art: {
    subject:
      'Ashen Stasis: a clock frozen inside a floating crystal, its hands stopped, against a starry sky, close-up filling the frame, scarlet accents, dark end-of-time void style'
  }
})

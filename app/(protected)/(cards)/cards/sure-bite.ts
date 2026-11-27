import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { cardOf, destroyAt, unitAt } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'sure-bite',
  type: 'ability',
  subtype: 'instinct',
  name: 'Sure Bite',
  text: 'Destroy an enemy ally that costs 3 or less. Fast.',
  flavor: 'Small prey, one bite.',
  faction: 'primal',
  restriction: { factions: ['primal'] },
  rarity: 'uncommon',
  price: 160,
  cost: 2,
  speed: 'fast',
  targets: ['enemyAlly'],
  onPlay(ctx) {
    const victim = unitAt(ctx, ctx.targets[0])

    if (victim && cardOf(victim).cost <= 3) {
      destroyAt(ctx, ctx.targets[0])
    }
  },
  ai: { value: 3, tags: ['removal'] },
  art: {
    subject:
      'Sure Bite: the jaws of a sabertooth snapping shut in a blur of motion, close-up filling the frame, blood orange accents, prehistoric jungle era style'
  }
})

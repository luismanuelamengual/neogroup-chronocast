import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { disarmAt, grantKeyword, isTribe } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'disruptor-field',
  type: 'artifact',
  name: 'Disruptor Field',
  text: "When an Automaton of yours enters: it gains Charge. Jam (1⚡): an enemy ally can't attack this phase.",
  flavor: 'A hum, a spark, and nothing moves.',
  faction: 'clockwork',
  restriction: { factions: ['clockwork'] },
  rarity: 'rare',
  price: 420,
  cost: 4,
  ability: {
    name: 'Jam',
    text: "An enemy ally can't attack this phase.",
    cost: 1,
    resource: 'energy',
    targets: ['enemyAlly'],
    ai: { tags: ['control'] },
    activate(ctx) {
      disarmAt(ctx, ctx.targets[0], 0)
    }
  },
  onAllyEnter(ctx, ally) {
    if (isTribe(ally, 'automaton')) {
      grantKeyword(ctx, ally, 'charge')
    }
  },
  ai: { value: 4, tags: ['control'] },
  art: {
    subject:
      'Disruptor Field: a brass pylon projecting a crackling dome of blue energy rings, small sparks jumping, close-up filling the frame, electric blue accents, steampunk steam era style'
  }
})

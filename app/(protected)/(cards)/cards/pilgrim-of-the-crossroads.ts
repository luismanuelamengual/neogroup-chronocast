import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { buffAt, gainChronos, summonCard } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'pilgrim-of-the-crossroads',
  type: 'ally',
  name: 'Pilgrim of the Crossroads',
  text: 'When it enters: you gain 1 Chronos this phase. When it dies: summon a Rift Spark. Its ability is paid with energy (⚡).',
  faction: 'neutral',
  restriction: {},
  rarity: 'epic',
  price: 1300,
  cost: 5,
  tribe: 'drifter',
  keywords: ['ranged'],
  attack: 6,
  health: 8,
  ability: {
    name: 'Inspire',
    text: 'An ally of yours gains +1 attack and +2 health.',
    cost: 2,
    resource: 'energy',
    targets: ['friendlyAlly'],
    activate(ctx) {
      buffAt(ctx, ctx.targets[0], 1, 2)
    }
  },
  onEnter(ctx) {
    gainChronos(ctx, ctx.owner, 1)
  },
  onDeath(ctx) {
    summonCard(ctx, ctx.owner, 'rift-spark')
  },
  ai: { value: 6, tags: ['ability', 'energy', 'ramp', 'summon'] },
  art: {
    subject:
      'Pilgrim of the Crossroads: a hunched adult owlfolk man with honey blond feathers, a thin mustache and a monocle, wearing a deep hood, dressed in a medieval tabard over a space suit liner, holding prayer beads and a staff, with a fierce scowl, crimson accents, time rift wanderer style'
  }
})

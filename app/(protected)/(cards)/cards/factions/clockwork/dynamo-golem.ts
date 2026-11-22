import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { draw, gainChronos } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'dynamo-golem',
  type: 'ally',
  name: 'Dynamo Golem',
  text: 'Its ability is paid with energy (⚡).',
  flavor: 'It runs on stored lightning and stubbornness.',
  faction: 'clockwork',
  restriction: { kind: 'faction', faction: 'clockwork' },
  rarity: 'rare',
  price: 550,
  cost: 4,
  attack: 7,
  health: 14,
  ability: {
    name: 'Discharge',
    text: 'Gain 2 Chronos and draw a card.',
    cost: 3,
    resource: 'energy',
    activate(ctx) {
      gainChronos(ctx, ctx.owner, 2)
      draw(ctx, ctx.owner, 1)
    }
  },
  ai: { value: 4, tags: ['ability', 'energy', 'draw'] },
  art: {
    subject: 'a huge brass golem with a glowing dynamo in its chest, electric arcs jumping between its fists'
  }
})

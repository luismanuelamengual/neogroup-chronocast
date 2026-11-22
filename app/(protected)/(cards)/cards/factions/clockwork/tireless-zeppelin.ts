import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { buffAt, seekTribe } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'tireless-zeppelin',
  type: 'ally',
  name: 'Tireless Zeppelin',
  text: 'When it enters: draw the first Skyship of your deck. Its ability is paid with energy (⚡).',
  faction: 'clockwork',
  restriction: { kind: 'faction', faction: 'clockwork' },
  rarity: 'rare',
  weak: ['wind'],
  price: 510,
  cost: 2,
  tribe: 'skyship',
  keywords: ['thorns'],
  thorns: 3,
  attack: 3,
  health: 5,
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
    seekTribe(ctx, ctx.owner, 'skyship')
  },
  ai: { value: 3, tags: ['ability', 'draw', 'energy', 'tribe'] },
  art: {
    subject: 'a steampunk flying machine, the tireless zeppelin, mid-leap, steampunk steam era style'
  }
})

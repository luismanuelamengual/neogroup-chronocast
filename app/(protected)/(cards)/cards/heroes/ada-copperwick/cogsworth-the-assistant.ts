import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { draw, gainChronos, heal, summonCard } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'cogsworth-the-assistant',
  type: 'ally',
  name: 'Cogsworth, the Assistant',
  text: 'On enter: gain 1 Chronos and draw a card. When it dies: summon a Gear Drone.',
  flavor: 'Lab assistant, butler and occasional fire extinguisher.',
  faction: 'clockwork',
  restriction: { kind: 'hero', heroId: 'ada-copperwick' },
  rarity: 'epic',
  price: 1700,
  cost: 3,
  attack: 7,
  health: 20,
  ability: {
    name: 'Quick Fix',
    text: 'An ally of yours heals 8.',
    cost: 1,
    targets: ['friendlyAlly'],
    activate(ctx) {
      heal(ctx, ctx.targets[0], 8)
    }
  },
  onEnter(ctx) {
    gainChronos(ctx, ctx.owner, 1)
    draw(ctx, ctx.owner, 1)
  },
  onDeath(ctx) {
    summonCard(ctx, ctx.owner, 'gear-drone')
  },
  ai: { value: 4, tags: ['ability', 'ramp', 'draw', 'summon'] },
  art: {
    subject: 'a polite brass robot butler with a monocle and bow tie holding a tray of tools'
  }
})

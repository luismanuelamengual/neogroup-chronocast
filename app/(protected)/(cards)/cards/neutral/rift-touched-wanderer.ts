import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { draw, stunAt } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'rift-touched-wanderer',
  type: 'ally',
  name: 'Rift-Touched Wanderer',
  text: 'When it enters: draw a card. Its ability is paid with energy (⚡).',
  faction: 'neutral',
  restriction: { kind: 'any' },
  rarity: 'uncommon',
  element: 'time',
  price: 170,
  cost: 3,
  tribe: 'drifter',
  attack: 4,
  health: 8,
  ability: {
    name: 'Daze',
    text: 'Stun an enemy ally.',
    cost: 2,
    resource: 'energy',
    targets: ['enemyAlly'],
    activate(ctx) {
      stunAt(ctx, ctx.targets[0])
    }
  },
  onEnter(ctx) {
    draw(ctx, ctx.owner, 1)
  },
  ai: { value: 3, tags: ['ability', 'draw', 'energy'] },
  art: {
    subject:
      'Rift-Touched Wanderer: an athletic young foxfolk man with blue-black hair in a tall mohawk, heavy stubble and heavy golden earrings, wearing a fur hat, dressed in a Roman toga under a leather bomber jacket, leaning on a carved walking staff, with a sly grin, scarlet accents, time rift wanderer style'
  }
})

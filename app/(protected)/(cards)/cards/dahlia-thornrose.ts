import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { disarmAt } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'dahlia-thornrose',
  type: 'ally',
  name: 'Dahlia Thornrose',
  text: 'Its ability is paid with energy (⚡).',
  flavor: 'Every vine in the valley answers to her.',
  faction: 'primal',
  restriction: { factions: ['primal'], sides: ['dawn'] },
  rarity: 'uncommon',
  price: 160,
  cost: 3,
  tribe: 'caveborn',
  attack: 4,
  health: 8,
  ability: {
    name: 'Thorn Bind',
    text: "An enemy ally can't attack until the end of the next phase.",
    cost: 1,
    resource: 'energy',
    targets: ['enemyAlly'],
    ai: { tags: ['control'] },
    activate(ctx) {
      disarmAt(ctx, ctx.targets[0], 1)
    }
  },
  ai: { value: 4, tags: ['ability', 'energy', 'control'] },
  art: {
    subject:
      'Dahlia Thornrose: a cave woman with a crown of red thorny roses, vines coiling from her hands to bind a beast, full body, crimson accents, prehistoric jungle era style'
  }
})

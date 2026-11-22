import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { heal, seekTribe } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'runic-pyromancer',
  type: 'ally',
  name: 'Runic Pyromancer',
  text: 'When it enters: draw the first Magus of your deck. Its ability is paid with energy (⚡).',
  faction: 'arcane',
  restriction: { kind: 'faction', faction: 'arcane' },
  rarity: 'rare',
  element: 'fire',
  resist: ['arcane'],
  price: 510,
  cost: 2,
  tribe: 'magus',
  attack: 4,
  health: 4,
  ability: {
    name: 'Mend',
    text: 'An ally of yours heals 5.',
    cost: 2,
    resource: 'energy',
    targets: ['friendlyAlly'],
    activate(ctx) {
      heal(ctx, ctx.targets[0], 5)
    }
  },
  onEnter(ctx) {
    seekTribe(ctx, ctx.owner, 'magus')
  },
  ai: { value: 3, tags: ['ability', 'aggro', 'draw', 'energy', 'tribe'] },
  art: {
    subject: 'a medieval spellcaster, the runic pyromancer, roaring, medieval magic order style'
  }
})

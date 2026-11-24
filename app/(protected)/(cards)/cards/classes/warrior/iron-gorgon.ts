import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { buffAt, seek } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'iron-gorgon',
  type: 'ally',
  name: 'Iron Gorgon',
  text: 'When it enters: draw the first weapon of your deck. Its ability is paid with energy (⚡).',
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'warrior' },
  rarity: 'uncommon',
  resist: ['earth'],
  weak: ['acid'],
  price: 205,
  cost: 5,
  tribe: 'colossus',
  attack: 6,
  health: 11,
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
    seek(ctx, ctx.owner, (card) => card.type === 'weapon')
  },
  ai: { value: 5, tags: ['ability', 'draw', 'energy'] },
  art: {
    subject:
      'Iron Gorgon: a gorgon with bronze-tinted skin and a cracked marble crown, charging head-on, indigo accents, warrior style'
  }
})

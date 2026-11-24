import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { buffSelf, seekTribe } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'griffin-of-the-last-stand',
  type: 'ally',
  name: 'Griffin of the Last Stand',
  text: 'When it enters: draw the first Colossus of your deck. When it attacks: it gains +1 attack.',
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'warrior' },
  rarity: 'epic',
  resist: ['earth'],
  weak: ['acid'],
  price: 1880,
  cost: 4,
  tribe: 'colossus',
  keywords: ['retaliate'],
  attack: 5,
  health: 10,
  onEnter(ctx) {
    seekTribe(ctx, ctx.owner, 'colossus')
  },
  onAttack(ctx) {
    buffSelf(ctx, 1, 0)
  },
  ai: { value: 5, tags: ['buff', 'draw', 'tribe'] },
  art: {
    subject:
      'Griffin of the Last Stand: a griffin with sea-green scales and a red war banner tied to it, rearing up, gold accents, warrior style'
  }
})

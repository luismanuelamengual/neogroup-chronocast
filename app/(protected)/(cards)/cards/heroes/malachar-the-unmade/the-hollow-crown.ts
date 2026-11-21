import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damageAllAllies, draw, sacrificeAlly } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'the-hollow-crown',
  type: 'ally',
  name: 'The Hollow Crown',
  text: 'On enter: destroy your weakest other ally: if you do, draw 2 cards and deal 6 damage to every enemy ally.',
  flavor: 'It was his crown. Now it is his only servant.',
  faction: 'void',
  restriction: { kind: 'hero', heroId: 'malachar-the-unmade' },
  rarity: 'exotic',
  price: 12500,
  cost: 5,
  attack: 16,
  health: 20,
  keywords: ['flying', 'unique'],
  onEnter(ctx) {
    if (sacrificeAlly(ctx)) {
      draw(ctx, ctx.owner, 2)
      damageAllAllies(ctx, ctx.opponent, 6)
    }
  },
  ai: { value: 7, tags: ['draw', 'removal'] },
  art: {
    subject: 'a floating hollow black crown with a single green eye in its center, shadows dripping from its points'
  }
})

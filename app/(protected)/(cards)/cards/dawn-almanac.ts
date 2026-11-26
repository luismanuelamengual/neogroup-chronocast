import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { draw } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'dawn-almanac',
  type: 'artifact',
  name: 'Dawn Almanac',
  text: 'Study (2): draw a card.',
  flavor: 'Every sunrise adds a page.',
  faction: 'neutral',
  restriction: { sides: ['dawn'] },
  rarity: 'common',
  price: 60,
  cost: 1,
  ability: {
    name: 'Study',
    text: 'Draw a card.',
    cost: 2,
    ai: { tags: ['draw'] },
    activate(ctx) {
      draw(ctx, ctx.owner, 1)
    }
  },
  ai: { value: 2, tags: ['draw'] },
  art: {
    subject:
      'Dawn Almanac: a thick leather-bound almanac lying open on a lectern, golden sunrise light pouring out of its pages, clock numerals drawn in the margins, warm morning glow'
  }
})

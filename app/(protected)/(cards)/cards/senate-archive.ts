import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { draw } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'senate-archive',
  type: 'artifact',
  name: 'Senate Archive',
  text: 'Consult (2⚡): draw a card.',
  flavor: 'The empire remembers everything. For a price.',
  faction: 'bronze',
  restriction: { factions: ['bronze'] },
  rarity: 'common',
  price: 60,
  cost: 1,
  ability: {
    name: 'Consult',
    text: 'Draw a card.',
    cost: 2,
    resource: 'energy',
    ai: { tags: ['draw'] },
    activate(ctx) {
      draw(ctx, ctx.owner, 1)
    }
  },
  ai: { value: 2, tags: ['draw'] },
  art: {
    subject:
      'Senate Archive: tall marble shelves full of scrolls and wax tablets behind bronze gates, a single scroll unrolling and glowing gold, red and gold accents, ancient bronze-age empire style'
  }
})

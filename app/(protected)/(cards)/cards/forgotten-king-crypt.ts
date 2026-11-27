import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { alliesToDeck } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'forgotten-king-crypt',
  type: 'artifact',
  name: "Forgotten King's Crypt",
  text: 'Exhume (3⚡): the last ally of your discard pile goes on top of your deck.',
  flavor: 'The king sleeps. His guards do not.',
  faction: 'void',
  restriction: { factions: ['void'], sides: ['eclipse'] },
  rarity: 'uncommon',
  price: 160,
  cost: 2,
  ability: {
    name: 'Exhume',
    text: 'The last ally of your discard pile goes on top of your deck.',
    cost: 3,
    resource: 'energy',
    ai: { tags: ['revive'] },
    activate(ctx) {
      alliesToDeck(ctx, ctx.owner, 1, 'top')
    }
  },
  ai: { value: 3, tags: ['revive'] },
  art: {
    subject:
      "Forgotten King's Crypt: a moss-covered stone crypt with a crowned skull carved above its sealed door, green fog seeping out, close-up filling the frame, green accents, dark end-of-time void style"
  }
})

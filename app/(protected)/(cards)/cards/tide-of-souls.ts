import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { alliesToDeck } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'tide-of-souls',
  type: 'ability',
  subtype: 'ritual',
  name: 'Tide of Souls',
  text: 'Every ally of your discard pile goes back on top of your deck.',
  flavor: 'The dead are not gone. They are waiting in line.',
  faction: 'void',
  restriction: { factions: ['void'] },
  rarity: 'rare',
  price: 420,
  cost: 3,
  onPlay(ctx) {
    alliesToDeck(ctx, ctx.owner, 'all', 'top')
  },
  ai: { value: 3, tags: ['revive'] },
  art: {
    subject:
      'Tide of Souls: a tide of ghostly souls rising from a graveyard like a wave, pale faces in the foam, teal accents, dark end-of-time void style'
  }
})

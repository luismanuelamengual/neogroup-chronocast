import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { drawFromRivalDeck } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'data-transfer',
  type: 'ability',
  subtype: 'program',
  name: 'Data Transfer',
  text: "Draw the top card of the rival's deck.",
  flavor: 'Your files, my drive.',
  faction: 'neon',
  restriction: { factions: ['neon'] },
  rarity: 'common',
  price: 60,
  cost: 1,
  onPlay(ctx) {
    drawFromRivalDeck(ctx)
  },
  ai: { value: 2, tags: ['draw'] },
  art: {
    subject:
      'Data Transfer: a stream of glowing data cubes flowing between two terminals through a cable, close-up filling the frame, cyan accents, neon cyberpunk future style'
  }
})

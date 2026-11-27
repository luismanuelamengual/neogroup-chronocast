import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { disarmEveryAlly } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'clockwork-deluge',
  type: 'ability',
  subtype: 'tactic',
  name: 'Clockwork Deluge',
  text: "No ally, yours or the rival's, can attack until the end of the next phase.",
  flavor: 'When it pours in the Rift, everyone waits.',
  faction: 'neutral',
  restriction: {},
  rarity: 'rare',
  price: 420,
  cost: 2,
  onPlay(ctx) {
    disarmEveryAlly(ctx, 1)
  },
  ai: { value: 2, tags: ['control'] },
  art: {
    subject:
      'Clockwork Deluge: a torrential rain of tiny brass gears and clock hands pouring from a swirling rift sky over an empty battlefield, turquoise accents, time rift wanderer style'
  }
})

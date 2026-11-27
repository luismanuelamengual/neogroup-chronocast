import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { draw } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'dreaming-seer',
  type: 'ally',
  name: 'Dreaming Seer',
  text: 'At the start of each phase: draw a card if you have fewer cards in hand than the enemy.',
  faction: 'neutral',
  restriction: { sides: ['dawn'] },
  rarity: 'uncommon',
  resist: ['light'],
  price: 160,
  cost: 3,
  tribe: 'oracle',
  keywords: ['shield'],
  attack: 5,
  health: 6,
  onPhaseStart(ctx) {
    if (ctx.engine.player(ctx.owner).hand.length < ctx.engine.player(ctx.opponent).hand.length) {
      draw(ctx, ctx.owner, 1)
    }
  },
  ai: { value: 3, tags: ['heal'] },
  art: {
    subject:
      'Dreaming Seer: a broad-shouldered elderly man with pale skin, silver hair in a sharp bob, heavy stubble and a dusting of freckles, wearing a laurel wreath, dressed in linen robes painted with eye symbols, gazing into a bowl of water, with a fierce scowl, teal accents, mystic healer style'
  }
})

import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { alliesOf, returnToHand } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'snare-of-embers',
  type: 'ability',
  subtype: 'spell',
  name: 'Snare of Embers',
  text: "Return the enemy ally with the most attack to its owner's hand. Slow.",
  flavor: 'Hot coals hide under the leaves.',
  faction: 'arcane',
  restriction: { factions: ['arcane'] },
  rarity: 'common',
  price: 50,
  cost: 2,
  speed: 'slow',
  onPlay(ctx) {
    const [strongest] = alliesOf(ctx, ctx.opponent).sort(
      (one, other) => ctx.engine.attackOf(other) - ctx.engine.attackOf(one)
    )

    if (strongest) {
      returnToHand(ctx, strongest)
    }
  },
  ai: { value: 2, tags: ['removal'] },
  art: {
    subject:
      'Snare of Embers: a looped rope snare snapping shut, over a desert of red dunes, centered and seen from slightly below, violet accents, medieval magic order style'
  }
})

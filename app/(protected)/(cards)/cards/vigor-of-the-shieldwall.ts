import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { buffAllies, draw } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'vigor-of-the-shieldwall',
  type: 'ability',
  subtype: 'instinct',
  name: 'Vigor of the Shieldwall',
  text: 'Your allies gain +1 attack and +2 health. Draw a card for each trap you have set.',
  flavor: 'Lock shields, breathe together, stand together.',
  faction: 'primal',
  restriction: { factions: ['primal'] },
  rarity: 'uncommon',
  price: 180,
  cost: 4,
  onPlay(ctx) {
    buffAllies(ctx, ctx.owner, 1, 2)
    draw(ctx, ctx.owner, ctx.engine.player(ctx.owner).traps.length)
  },
  ai: { value: 4, tags: ['buff'] },
  art: {
    subject:
      'Vigor of the Shieldwall: a glowing heart of green life energy pulsing with veins of light, against a starry sky, centered and seen from slightly below, scarlet accents, warrior style'
  }
})

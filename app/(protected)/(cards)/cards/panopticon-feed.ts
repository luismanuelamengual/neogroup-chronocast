import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { draw, stunRandomAlly } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'panopticon-feed',
  type: 'item',
  name: 'Panopticon Feed',
  text: 'Draw 2 cards and stun a random enemy ally.',
  flavor: 'Smile. You are always on camera.',
  faction: 'neon',
  restriction: { factions: ['neon'], sides: ['eclipse'] },
  rarity: 'legendary',
  price: 2320,
  cost: 2,
  speed: 'fast',
  keywords: ['unique'],
  onPlay(ctx) {
    draw(ctx, ctx.owner, 2)
    stunRandomAlly(ctx, ctx.opponent)
  },
  ai: { value: 5, tags: ['draw'] },
  art: {
    subject:
      'Panopticon Feed: a floating holographic eye made of hundreds of tiny camera screens, glowing in a dark server room, magenta accents'
  }
})

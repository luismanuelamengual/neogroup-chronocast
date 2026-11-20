import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { draw, heal } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'morning-prayer',
  type: 'ability',
  name: 'Morning Prayer',
  text: 'Your hero heals 6 and draw a card.',
  flavor: 'He has said it every morning for three hundred years.',
  faction: 'arcane',
  restriction: { kind: 'hero', heroId: 'aldric-dawnkeeper' },
  rarity: 'common',
  price: 45,
  cost: 1,
  onPlay(ctx) {
    heal(ctx, { player: ctx.owner, slot: 'hero' }, 6)
    draw(ctx, ctx.owner, 1)
  },
  ai: { value: 1, tags: ['heal', 'draw'] },
  art: {
    subject: 'Aldric kneeling in a sunlit chapel, golden light falling through a stained glass window'
  }
})

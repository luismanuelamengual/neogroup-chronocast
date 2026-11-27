import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { draw } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'plate-of-the-last-stand',
  type: 'armor',
  subtype: 'plate',
  name: 'Plate of the Last Stand',
  text: 'When it is equipped: if your hero has a weapon, draw 2 cards.',
  flavor: 'Worn by those who will not take a step back.',
  faction: 'bronze',
  restriction: { factions: ['bronze'] },
  rarity: 'rare',
  price: 540,
  cost: 5,
  armor: 4,
  durability: 4,
  onPlay(ctx) {
    if (ctx.engine.player(ctx.owner).hero.weapon) {
      draw(ctx, ctx.owner, 2)
    }
  },
  ai: { value: 6 },
  art: {
    subject:
      'Plate of the Last Stand: a single plate made of rusted iron and chains, on cracked stone tiles, swirling around the center, turquoise accents, warrior style'
  }
})

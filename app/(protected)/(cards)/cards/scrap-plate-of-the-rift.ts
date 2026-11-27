import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { summonCard } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'scrap-plate-of-the-rift',
  type: 'armor',
  subtype: 'exosuit',
  name: 'Scrap Plate of the Rift',
  text: 'When it is equipped: summon a Cog Drone.',
  flavor: 'Pieces of twelve centuries, held together by hope.',
  faction: 'clockwork',
  restriction: { factions: ['clockwork'] },
  rarity: 'epic',
  price: 900,
  cost: 1,
  armor: 1,
  durability: 4,
  onPlay(ctx) {
    summonCard(ctx, ctx.owner, 'cog-drone')
  },
  ai: { value: 2 },
  art: {
    subject:
      'Scrap Plate of the Rift: a single plate made of dark yew wood and brass fittings, on cracked stone tiles, bursting toward the viewer, indigo accents, steampunk steam era style'
  }
})

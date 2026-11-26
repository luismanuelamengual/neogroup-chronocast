import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'

export default defineCard({
  id: 'scrap-plate-of-the-rift',
  type: 'armor',
  subtype: 'exosuit',
  name: 'Scrap Plate of the Rift',
  text: '',
  flavor: 'Pieces of twelve centuries, held together by hope.',
  faction: 'clockwork',
  restriction: { factions: ['clockwork'] },
  rarity: 'epic',
  price: 900,
  cost: 1,
  armor: 1,
  durability: 4,
  ai: { value: 2 },
  art: {
    subject:
      'Scrap Plate of the Rift: a single plate made of dark yew wood and brass fittings, on cracked stone tiles, bursting toward the viewer, indigo accents, steampunk steam era style'
  }
})

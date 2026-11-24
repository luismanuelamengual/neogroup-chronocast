import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'

export default defineCard({
  id: 'scrap-plate-of-the-rift',
  type: 'armor',
  name: 'Scrap Plate of the Rift',
  text: '',
  faction: 'neutral',
  restriction: { kind: 'any' },
  rarity: 'epic',
  price: 1400,
  cost: 1,
  armor: 4,
  ai: { value: 2 },
  art: {
    subject:
      'Scrap Plate of the Rift: a single plate made of dark yew wood and brass fittings, on cracked stone tiles, bursting toward the viewer, indigo accents, time rift wanderer style'
  }
})

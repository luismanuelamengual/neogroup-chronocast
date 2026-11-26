import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'

export default defineCard({
  id: 'cutlass-of-the-long-road',
  type: 'weapon',
  name: 'Cutlass of the Long Road',
  text: '',
  flavor: 'It has crossed more borders than maps.',
  faction: 'neutral',
  restriction: {},
  rarity: 'rare',
  price: 420,
  cost: 3,
  attack: 4,
  durability: 4,
  ai: { value: 4 },
  art: {
    subject:
      'Cutlass of the Long Road: a single cutlass made of white bone and leather wraps, in a beam of light from above, seen from above, emerald accents, time rift wanderer style'
  }
})

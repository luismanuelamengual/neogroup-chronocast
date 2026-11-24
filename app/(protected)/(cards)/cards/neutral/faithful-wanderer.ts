import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'

export default defineCard({
  id: 'faithful-wanderer',
  type: 'ally',
  name: 'Faithful Wanderer',
  text: '',
  flavor: 'Lost in time, never in purpose.',
  faction: 'neutral',
  restriction: { kind: 'any' },
  rarity: 'common',
  price: 55,
  cost: 3,
  tribe: 'drifter',
  keywords: ['ranged'],
  attack: 4,
  health: 9,
  ai: { value: 3 },
  art: {
    subject:
      'Faithful Wanderer: a stocky elderly owlfolk woman with snow-white feathers and a bandaged forehead, wearing a tricorn hat, dressed in a kimono with brass shoulder plates, leaning on a carved walking staff, with a serene smile, gold accents, time rift wanderer style'
  }
})

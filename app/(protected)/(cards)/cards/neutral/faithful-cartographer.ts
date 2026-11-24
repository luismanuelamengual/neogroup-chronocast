import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'

export default defineCard({
  id: 'faithful-cartographer',
  type: 'ally',
  name: 'Faithful Cartographer',
  text: '',
  faction: 'neutral',
  restriction: { kind: 'any' },
  rarity: 'common',
  price: 70,
  cost: 5,
  keywords: ['ranged'],
  attack: 6,
  health: 11,
  ai: { value: 5 },
  art: {
    subject:
      'Faithful Cartographer: a willowy young dwarf man with freckled fair skin, chestnut hair in a tall mohawk, a thin mustache and bushy eyebrows, wearing a turban, dressed in a long ferryman cloak with tide-worn hems, unrolling a living map of shifting lands, with a sly grin, tangerine accents, time rift wanderer style'
  }
})

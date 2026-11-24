import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { healHero } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'lantern-staff-of-mercy',
  type: 'weapon',
  name: 'Lantern Staff of Mercy',
  text: 'When it is equipped: your hero heals 5.',
  flavor: 'Its light finds the lost and the hurt.',
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'mystic' },
  rarity: 'rare',
  price: 570,
  cost: 3,
  attack: 4,
  durability: 4,
  onPlay(ctx) {
    healHero(ctx, 5)
  },
  ai: { value: 4 },
  art: {
    subject:
      'Lantern Staff of Mercy: a single staff made of blackened iron with gold inlay, half buried in snow, diagonal dynamic composition, tangerine accents, mystic healer style'
  }
})

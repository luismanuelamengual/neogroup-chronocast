import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { buffSelf } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'stegosaur-of-the-first-fire',
  type: 'ally',
  name: 'Stegosaur of the First Fire',
  text: 'When it enters: it gains +1 attack and +2 health.',
  faction: 'primal',
  restriction: { kind: 'faction', faction: 'primal' },
  rarity: 'common',
  element: 'fire',
  weak: ['ice'],
  price: 70,
  cost: 5,
  tribe: 'saurian',
  keywords: ['charge'],
  attack: 4,
  health: 12,
  onEnter(ctx) {
    buffSelf(ctx, 1, 2)
  },
  ai: { value: 5, tags: ['buff'] },
  art: {
    subject:
      'Stegosaur of the First Fire: a stegosaur with an ash grey hide with frosty blue tips and tar-stained legs, charging head-on, tangerine accents, prehistoric jungle era style'
  }
})

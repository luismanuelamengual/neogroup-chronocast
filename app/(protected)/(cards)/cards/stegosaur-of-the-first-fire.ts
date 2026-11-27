import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { buffSelf, isPrey, unitAt } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'stegosaur-of-the-first-fire',
  type: 'ally',
  name: 'Stegosaur of the First Fire',
  text: 'When it attacks a Prey: it gains +2 attack and +2 health.',
  faction: 'primal',
  restriction: { factions: ['primal'], sides: ['dawn'] },
  rarity: 'common',
  element: 'fire',
  weak: ['ice'],
  price: 70,
  cost: 5,
  tribe: 'saurian',
  keywords: ['charge'],
  attack: 4,
  health: 12,
  onAttack(ctx, target) {
    const unit = unitAt(ctx, target)

    if (unit && isPrey(ctx, unit)) {
      buffSelf(ctx, 2, 2)
    }
  },
  ai: { value: 5, tags: ['buff'] },
  art: {
    subject:
      'Stegosaur of the First Fire: a stegosaur with an ash grey hide with frosty blue tips and tar-stained legs, charging head-on, tangerine accents, prehistoric jungle era style'
  }
})

import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { buff, grantKeyword, unitAt } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'vow-of-the-dawn',
  type: 'ability',
  subtype: 'tactic',
  name: 'Vow of the Dawn',
  text: 'An ally of yours gains +2 health and Lifesteal.',
  faction: 'neutral',
  restriction: { sides: ['dawn'] },
  rarity: 'common',
  price: 50,
  cost: 1,
  targets: ['friendlyAlly'],
  onPlay(ctx) {
    const unit = unitAt(ctx, ctx.targets[0])

    if (unit) {
      buff(ctx, unit, 0, 2)
      grantKeyword(ctx, unit, 'lifesteal')
    }
  },
  ai: { value: 3 },
  art: {
    subject:
      'Vow of the Dawn: a kneeling knight touching a sword to their brow, a halo of light forming around the blade, mystic healer style'
  }
})

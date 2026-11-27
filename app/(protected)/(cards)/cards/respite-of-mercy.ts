import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { grantKeyword, heal, unitAt } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'respite-of-mercy',
  type: 'ability',
  subtype: 'instinct',
  name: 'Respite of Mercy',
  text: 'An ally of yours heals 12 and gains Retaliate.',
  flavor: 'A breath between battles is a gift.',
  faction: 'neutral',
  restriction: { sides: ['dawn'] },
  rarity: 'common',
  price: 50,
  cost: 2,
  onPlay(ctx) {
    heal(ctx, ctx.targets[0], 12)

    const unit = unitAt(ctx, ctx.targets[0])

    if (unit) {
      grantKeyword(ctx, unit, 'retaliate')
    }
  },
  targets: ['friendlyAlly'],
  ai: { value: 2, tags: ['heal'] },
  art: {
    subject:
      'Respite of Mercy: a quiet campfire with a steaming kettle and bedroll, in a dark forest clearing, diagonal dynamic composition, magenta accents, mystic healer style'
  }
})

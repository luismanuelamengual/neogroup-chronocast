import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { buff, grantKeyword, unitAt } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'serene-stance',
  type: 'ability',
  subtype: 'instinct',
  name: 'Serene Stance',
  text: 'An ally of yours gains Guardian and +3 health. Instant.',
  flavor: 'Still as a mountain, soft as a breeze.',
  faction: 'neutral',
  restriction: { sides: ['dawn'] },
  rarity: 'common',
  price: 40,
  cost: 1,
  speed: 'instant',
  onPlay(ctx) {
    const unit = unitAt(ctx, ctx.targets[0])

    if (unit) {
      buff(ctx, unit, 0, 3)
      grantKeyword(ctx, unit, 'guardian')
    }
  },
  targets: ['friendlyAlly'],
  ai: { value: 1, tags: ['defense'] },
  art: {
    subject:
      'Serene Stance: a round shield and crossed spear planted firmly on stone, in a ruined temple, bursting toward the viewer, turquoise accents, mystic healer style'
  }
})

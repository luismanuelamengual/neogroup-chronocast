import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { buff, grantKeyword, unitAt } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'might-of-the-tar-pits',
  type: 'ability',
  subtype: 'instinct',
  name: 'Might of the Tar Pits',
  text: 'An ally of yours gains +2 attack and Stealth.',
  flavor: 'Strength from the deep black earth.',
  faction: 'neutral',
  restriction: { sides: ['eclipse'] },
  rarity: 'common',
  price: 50,
  cost: 2,
  targets: ['friendlyAlly'],
  onPlay(ctx) {
    const unit = unitAt(ctx, ctx.targets[0])

    if (unit) {
      buff(ctx, unit, 2, 0)
      grantKeyword(ctx, unit, 'stealth')
    }
  },
  ai: { value: 2, tags: ['buff'] },
  art: {
    subject:
      'Might of the Tar Pits: a huge glowing fist-shaped aura of raw power, against a starry sky, dramatic backlight, emerald accents, prehistoric jungle era style'
  }
})

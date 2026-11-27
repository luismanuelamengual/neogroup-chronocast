import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { buff, grantKeyword, unitAt } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'might-of-the-long-road',
  type: 'ability',
  subtype: 'instinct',
  name: 'Might of the Long Road',
  text: 'An ally of yours gains +3 attack, +4 health and Charge. Instant.',
  flavor: 'Every mile walked makes the arm stronger.',
  faction: 'primal',
  restriction: { factions: ['primal'] },
  rarity: 'epic',
  price: 1000,
  cost: 2,
  speed: 'instant',
  targets: ['friendlyAlly'],
  onPlay(ctx) {
    const unit = unitAt(ctx, ctx.targets[0])

    if (unit) {
      buff(ctx, unit, 3, 4)
      grantKeyword(ctx, unit, 'charge')
    }
  },
  ai: { value: 3, tags: ['buff'] },
  art: {
    subject:
      'Might of the Long Road: a huge glowing fist-shaped aura of raw power, in a snowy pass, centered and seen from slightly below, teal accents, prehistoric jungle era style'
  }
})

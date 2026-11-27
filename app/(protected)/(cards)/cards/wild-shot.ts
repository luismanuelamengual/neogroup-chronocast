import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damage, isPrey, unitAt } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'wild-shot',
  type: 'ability',
  subtype: 'instinct',
  name: 'Wild Shot',
  text: 'Deal 7 damage to an enemy ally, or 14 if it is your Prey. Fast.',
  flavor: 'Aimed? Not really. Lethal? Very.',
  faction: 'primal',
  restriction: { factions: ['primal'] },
  rarity: 'epic',
  price: 1000,
  cost: 2,
  speed: 'fast',
  targets: ['enemyAlly'],
  onPlay(ctx) {
    const unit = unitAt(ctx, ctx.targets[0])

    damage(ctx, ctx.targets[0], unit && isPrey(ctx, unit) ? 14 : 7)
  },
  ai: { value: 3, tags: ['removal'] },
  art: {
    subject:
      'Wild Shot: a single arrow in flight trailing a streak of light, in a misty valley, framed by drifting embers, teal accents, hunter style'
  }
})

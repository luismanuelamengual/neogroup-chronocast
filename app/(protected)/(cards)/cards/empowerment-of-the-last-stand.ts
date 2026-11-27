import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { buffThisPhase, grantKeyword, unitAt } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'empowerment-of-the-last-stand',
  type: 'ability',
  subtype: 'tactic',
  name: 'Empowerment of the Last Stand',
  text: 'An ally of yours gains Cleave, and +2 attack this phase. Instant.',
  flavor: 'When all seems lost, strength arrives.',
  faction: 'bronze',
  restriction: { factions: ['bronze'] },
  rarity: 'epic',
  price: 1200,
  cost: 4,
  speed: 'instant',
  targets: ['friendlyAlly'],
  onPlay(ctx) {
    const unit = unitAt(ctx, ctx.targets[0])

    if (unit) {
      grantKeyword(ctx, unit, 'cleave')
      buffThisPhase(ctx, unit, 2)
    }
  },
  ai: { value: 5, tags: ['buff'] },
  art: {
    subject:
      'Empowerment of the Last Stand: a floating gem overflowing with radiant energy, over a desert of red dunes, bursting toward the viewer, saffron yellow accents, warrior style'
  }
})

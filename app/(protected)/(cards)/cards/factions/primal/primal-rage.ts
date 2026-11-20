import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { buffAt, buffThisPhaseAt } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'primal-rage',
  type: 'ability',
  name: 'Primal Rage',
  text: 'An ally of yours gains +14 attack this phase and it gains +10 health. Instant.',
  flavor: 'Old blood, older anger.',
  faction: 'primal',
  restriction: { kind: 'faction', faction: 'primal' },
  rarity: 'rare',
  price: 560,
  cost: 3,
  speed: 'instant',
  targets: ['friendlyAlly'],
  onPlay(ctx) {
    buffThisPhaseAt(ctx, ctx.targets[0], 14)
    buffAt(ctx, ctx.targets[0], 0, 10)
  },
  ai: { value: 4, tags: ['buff'] },
  art: {
    subject: 'a beast surrounded by a red glowing aura of fury, eyes burning'
  }
})

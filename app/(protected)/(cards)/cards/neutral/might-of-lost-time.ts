import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { buffThisPhaseAt } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'might-of-lost-time',
  type: 'ability',
  name: 'Might of Lost Time',
  text: 'An ally of yours gains +12 attack this phase. Instant.',
  flavor: 'Power borrowed from forgotten heroes.',
  faction: 'neutral',
  restriction: { kind: 'any' },
  rarity: 'common',
  price: 70,
  cost: 5,
  speed: 'instant',
  targets: ['friendlyAlly'],
  onPlay(ctx) {
    buffThisPhaseAt(ctx, ctx.targets[0], 12)
  },
  ai: { value: 5, tags: ['buff'] },
  art: {
    subject:
      'Might of Lost Time: a huge glowing fist-shaped aura of raw power, in a dark forest clearing, diagonal dynamic composition, emerald accents, time rift wanderer style'
  }
})

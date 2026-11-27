import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { buffThisPhaseAt, damage } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'might-of-the-warlord',
  type: 'ability',
  subtype: 'tactic',
  name: 'Might of the Warlord',
  text: 'An ally of yours gains +5 attack this phase and takes 2 shadow damage. Instant.',
  flavor: 'His strength flows into every soldier.',
  faction: 'neutral',
  restriction: { sides: ['eclipse'] },
  rarity: 'common',
  price: 40,
  cost: 1,
  speed: 'instant',
  targets: ['friendlyAlly'],
  onPlay(ctx) {
    buffThisPhaseAt(ctx, ctx.targets[0], 5)
    damage(ctx, ctx.targets[0], 2, 'shadow')
  },
  ai: { value: 1, tags: ['buff'] },
  art: {
    subject:
      'Might of the Warlord: a huge glowing fist-shaped aura of raw power, in a misty valley, bursting toward the viewer, scarlet accents, warrior style'
  }
})

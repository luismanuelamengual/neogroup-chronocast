import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { buffThisPhaseAt } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'might-of-the-warlord',
  type: 'ability',
  name: 'Might of the Warlord',
  text: 'An ally of yours gains +4 attack this phase. Instant.',
  flavor: 'His strength flows into every soldier.',
  faction: 'neutral',
  restriction: { classes: ['warrior'] },
  rarity: 'common',
  price: 40,
  cost: 1,
  speed: 'instant',
  targets: ['friendlyAlly'],
  onPlay(ctx) {
    buffThisPhaseAt(ctx, ctx.targets[0], 4)
  },
  ai: { value: 1, tags: ['buff'] },
  art: {
    subject:
      'Might of the Warlord: a huge glowing fist-shaped aura of raw power, in a misty valley, bursting toward the viewer, scarlet accents, warrior style'
  }
})

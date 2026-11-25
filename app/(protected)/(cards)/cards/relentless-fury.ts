import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { buffThisPhaseAt } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'relentless-fury',
  type: 'ability',
  name: 'Relentless Fury',
  text: 'An ally of yours gains +4 attack this phase. Instant.',
  flavor: 'It does not stop. It does not tire.',
  faction: 'neutral',
  restriction: { classes: ['warrior'] },
  rarity: 'rare',
  price: 450,
  cost: 1,
  speed: 'instant',
  targets: ['friendlyAlly'],
  onPlay(ctx) {
    buffThisPhaseAt(ctx, ctx.targets[0], 4)
  },
  ai: { value: 2, tags: ['buff'] },
  art: {
    subject:
      'Relentless Fury: a roaring red storm of rage swirling around a cracked war axe, in a sunlit meadow, bursting toward the viewer, rose pink accents, warrior style'
  }
})

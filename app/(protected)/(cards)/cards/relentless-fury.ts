import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { alliesOf, buffThisPhaseAt } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'relentless-fury',
  type: 'ability',
  subtype: 'tactic',
  name: 'Relentless Fury',
  text: 'An ally of yours gains +3 attack this phase, or +6 if it is your only ally. Instant.',
  flavor: 'It does not stop. It does not tire.',
  faction: 'bronze',
  restriction: { factions: ['bronze'] },
  rarity: 'rare',
  price: 300,
  cost: 1,
  speed: 'instant',
  targets: ['friendlyAlly'],
  onPlay(ctx) {
    buffThisPhaseAt(ctx, ctx.targets[0], alliesOf(ctx, ctx.owner).length === 1 ? 6 : 3)
  },
  ai: { value: 2, tags: ['buff'] },
  art: {
    subject:
      'Relentless Fury: a roaring red storm of rage swirling around a cracked war axe, in a sunlit meadow, bursting toward the viewer, rose pink accents, warrior style'
  }
})

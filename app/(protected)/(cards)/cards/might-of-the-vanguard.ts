import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { buffThisPhaseAt, slotsNextTo } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'might-of-the-vanguard',
  type: 'ability',
  subtype: 'tactic',
  name: 'Might of the Vanguard',
  text: 'The allies next to an ally of yours gain +3 attack this phase. Instant.',
  flavor: 'The front line is where legends start.',
  faction: 'bronze',
  restriction: { factions: ['bronze'] },
  rarity: 'common',
  price: 50,
  cost: 2,
  speed: 'instant',
  targets: ['friendlyAlly'],
  onPlay(ctx) {
    for (const ref of slotsNextTo(ctx, ctx.targets[0])) {
      buffThisPhaseAt(ctx, ref, 3)
    }
  },
  ai: { value: 2, tags: ['buff'] },
  art: {
    subject:
      'Might of the Vanguard: a huge glowing fist-shaped aura of raw power, in a sunlit meadow, centered and seen from slightly below, saffron yellow accents, warrior style'
  }
})

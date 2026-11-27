import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { alliesOf, buffThisPhase, markPreyAlly, tribeAllies } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'koras-hunting-call',
  type: 'ability',
  subtype: 'instinct',
  name: "Kora's Hunting Call",
  text: 'Every enemy ally becomes your Prey. Your Beasts gain +2 attack this phase. Instant.',
  faction: 'primal',
  restriction: { heroes: ['kora-wildfang'] },
  rarity: 'epic',
  price: 900,
  cost: 3,
  speed: 'instant',
  onPlay(ctx) {
    for (const unit of alliesOf(ctx, ctx.opponent)) {
      markPreyAlly(ctx, unit)
    }

    for (const unit of tribeAllies(ctx, ctx.owner, 'beast')) {
      buffThisPhase(ctx, unit, 2)
    }
  },
  ai: { value: 5, tags: ['prey'] },
  art: {
    subject:
      "Kora's Hunting Call: a wild huntress blowing a bone horn on a jungle cliff while sabertooth cats leap out of the ferns, lime green accents, prehistoric jungle era style"
  }
})

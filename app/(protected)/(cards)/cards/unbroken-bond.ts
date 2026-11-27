import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { alliesToHand, buffThisPhase, tribeAllies } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'unbroken-bond',
  type: 'ability',
  subtype: 'ritual',
  name: 'Unbroken Bond',
  text: 'The last 2 allies of your discard pile return to your hand. Your Undead gain +2 attack this phase.',
  flavor: 'Death is a door that swings both ways.',
  faction: 'void',
  restriction: { factions: ['void'] },
  rarity: 'uncommon',
  price: 160,
  cost: 3,
  onPlay(ctx) {
    alliesToHand(ctx, ctx.owner, 2)

    for (const unit of tribeAllies(ctx, ctx.owner, 'undead')) {
      buffThisPhase(ctx, unit, 2)
    }
  },
  ai: { value: 3, tags: ['revive'] },
  art: {
    subject:
      'Unbroken Bond: two skeletal hands clasped together bound by a glowing violet chain rising out of a grave, close-up filling the frame, violet accents, dark end-of-time void style'
  }
})

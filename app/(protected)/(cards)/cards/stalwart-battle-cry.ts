import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { buffThisPhase, tribeAllies } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'stalwart-battle-cry',
  type: 'ability',
  subtype: 'tactic',
  name: 'Stalwart Battle Cry',
  text: 'Your Colossi gain +3 attack this phase. Instant.',
  flavor: 'A shout that steadies a hundred hands.',
  faction: 'bronze',
  restriction: { factions: ['bronze'] },
  rarity: 'uncommon',
  price: 160,
  cost: 3,
  speed: 'instant',
  onPlay(ctx) {
    for (const unit of tribeAllies(ctx, ctx.owner, 'colossus')) {
      buffThisPhase(ctx, unit, 3)
    }
  },
  ai: { value: 3, tags: ['buff'] },
  art: {
    subject:
      'Stalwart Battle Cry: a visible shockwave of sound blasting across a battlefield, over a desert of red dunes, framed by drifting embers, violet accents, warrior style'
  }
})

import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { buffThisPhase, tribeAllies } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'rally-of-light',
  type: 'ability',
  subtype: 'tactic',
  name: 'Rally of Light',
  text: 'Your Legionnaires gain +3 attack this phase. Instant.',
  flavor: 'Gather, children of the dawn.',
  faction: 'bronze',
  restriction: { factions: ['bronze'] },
  rarity: 'uncommon',
  price: 180,
  cost: 4,
  speed: 'instant',
  onPlay(ctx) {
    for (const unit of tribeAllies(ctx, ctx.owner, 'legionnaire')) {
      buffThisPhase(ctx, unit, 3)
    }
  },
  ai: { value: 4, tags: ['buff'] },
  art: {
    subject:
      'Rally of Light: a tattered war banner planted in the ground, glowing with rallying light, over a stormy battlefield, dramatic backlight, rose pink accents, mystic healer style'
  }
})

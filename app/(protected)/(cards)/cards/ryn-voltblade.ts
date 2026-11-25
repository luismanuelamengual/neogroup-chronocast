import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { alliesOf, buffThisPhase, healHero } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'ryn-voltblade',
  type: 'hero',
  name: 'Ryn Voltblade',
  text: 'Overcharge (3): your allies gain +4 attack this phase. Instant. At the start of each phase, your hero heals 2.',
  flavor: 'The fastest blade in the megacity.',
  faction: 'neon',
  heroClass: 'warrior',
  side: 'dawn',
  restriction: { heroes: ['ryn-voltblade'] },
  rarity: 'epic',
  cost: 0,
  health: 60,
  ability: {
    name: 'Overcharge',
    text: 'Your allies gain +4 attack this phase.',
    cost: 3,
    speed: 'instant',
    ai: { tags: ['buffAll'] },
    activate(ctx) {
      for (const unit of alliesOf(ctx, ctx.owner)) {
        buffThisPhase(ctx, unit, 4)
      }
    }
  },
  onPhaseStart(ctx) {
    healHero(ctx, 2)
  },
  ai: { value: 0 },
  art: {
    subject:
      'a cyberpunk swordswoman with electric blue hair and a crackling plasma katana, lightning running through her armor'
  }
})

import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { buffThisPhaseAt, gainArmor } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'ryn-voltblade',
  type: 'hero',
  name: 'Ryn Voltblade',
  text: 'Overcharge (1): an ally of yours gains +8 attack this phase. Instant. At the start of each phase, your hero gains 2 armor.',
  flavor: 'The fastest blade in the megacity.',
  faction: 'neon',
  heroClass: 'warrior',
  restriction: { kind: 'hero', heroId: 'ryn-voltblade' },
  rarity: 'epic',
  cost: 0,
  health: 110,
  ability: {
    name: 'Overcharge',
    text: 'An ally of yours gains +8 attack this phase.',
    cost: 1,
    speed: 'instant',
    targets: ['friendlyAlly'],
    activate(ctx) {
      buffThisPhaseAt(ctx, ctx.targets[0], 8)
    }
  },
  onPhaseStart(ctx) {
    gainArmor(ctx, ctx.owner, 2)
  },
  ai: { value: 0 },
  art: {
    subject:
      'a cyberpunk swordswoman with electric blue hair and a crackling plasma katana, lightning running through her armor'
  }
})

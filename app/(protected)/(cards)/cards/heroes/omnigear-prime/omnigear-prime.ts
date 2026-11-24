import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { buffAllies, healHero } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'omnigear-prime',
  type: 'hero',
  name: 'Omnigear Prime',
  text: 'Assembly Line (4): your allies gain +3 attack and +3 health. At the start of each phase, your hero heals 2.',
  flavor: 'The machine that builds machines decided it no longer needs builders.',
  faction: 'clockwork',
  heroClass: 'warrior',
  restriction: { kind: 'hero', heroId: 'omnigear-prime' },
  rarity: 'legendary',
  cost: 0,
  health: 65,
  ability: {
    name: 'Assembly Line',
    text: 'Your allies gain +3 attack and +3 health.',
    cost: 4,
    ai: { tags: ['buffAll'] },
    activate(ctx) {
      buffAllies(ctx, ctx.owner, 3, 3)
    }
  },
  onPhaseStart(ctx) {
    healHero(ctx, 2)
  },
  ai: { value: 0 },
  art: {
    subject:
      'a gigantic sentient factory machine with a glowing central eye and dozens of mechanical arms assembling robots'
  }
})

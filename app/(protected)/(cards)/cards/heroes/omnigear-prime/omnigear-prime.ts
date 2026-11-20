import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { buffAllies, gainArmor } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'omnigear-prime',
  type: 'hero',
  boss: true,
  name: 'Omnigear Prime',
  text: 'Assembly Line (3): your allies gain +2 attack and +4 health. At the start of each phase, your hero gains 2 armor.',
  flavor: 'The machine that builds machines decided it no longer needs builders.',
  faction: 'clockwork',
  heroClass: 'warrior',
  restriction: { kind: 'hero', heroId: 'omnigear-prime' },
  rarity: 'legendary',
  cost: 0,
  health: 120,
  ability: {
    name: 'Assembly Line',
    text: 'Your allies gain +2 attack and +4 health.',
    cost: 3,
    activate(ctx) {
      buffAllies(ctx, ctx.owner, 2, 4)
    }
  },
  onPhaseStart(ctx) {
    gainArmor(ctx, ctx.owner, 2)
  },
  ai: { value: 0 },
  art: {
    subject:
      'a gigantic sentient factory machine with a glowing central eye and dozens of mechanical arms assembling robots'
  }
})

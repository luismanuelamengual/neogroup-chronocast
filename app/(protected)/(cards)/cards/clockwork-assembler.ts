import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { artifactCount, buffSelf } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'clockwork-assembler',
  type: 'ally',
  name: 'Clockwork Assembler',
  text: 'When it enters: it gains +1 attack and +1 health for each artifact of yours.',
  faction: 'clockwork',
  restriction: { factions: ['clockwork'] },
  rarity: 'rare',
  price: 420,
  cost: 4,
  tribe: 'automaton',
  attack: 4,
  health: 9,
  onEnter(ctx) {
    const count = artifactCount(ctx)

    buffSelf(ctx, count, count)
  },
  ai: { value: 5 },
  art: {
    subject:
      'Clockwork Assembler: a multi-armed brass automaton building itself bigger from spare gears, full body, steampunk clockwork era style'
  }
})

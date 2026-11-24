import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { gainArmor } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'overclocked-piston-titan',
  type: 'ally',
  name: 'Overclocked Piston Titan',
  text: 'At the start of each phase: your hero gains 2 armor.',
  faction: 'clockwork',
  restriction: { kind: 'faction', faction: 'clockwork' },
  rarity: 'common',
  resist: ['acid'],
  weak: ['lightning'],
  price: 65,
  cost: 4,
  tribe: 'automaton',
  keywords: ['shield'],
  attack: 4,
  health: 9,
  onPhaseStart(ctx) {
    gainArmor(ctx, ctx.owner, 2)
  },
  ai: { value: 4, tags: ['defense'] },
  art: {
    subject:
      'Overclocked Piston Titan: a titan built of riveted copper with green patina, with a single giant lens, standing guard, steampunk steam era style'
  }
})

import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { gainArmor } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'clockwork-hound-of-coal',
  type: 'ally',
  name: 'Clockwork Hound of Coal',
  text: 'At the start of each phase: your hero gains 2 armor.',
  faction: 'clockwork',
  restriction: { kind: 'faction', faction: 'clockwork' },
  rarity: 'common',
  resist: ['acid'],
  weak: ['lightning'],
  price: 50,
  cost: 2,
  tribe: 'automaton',
  keywords: ['shield'],
  attack: 1,
  health: 7,
  onPhaseStart(ctx) {
    gainArmor(ctx, ctx.owner, 2)
  },
  ai: { value: 2, tags: ['defense'] },
  art: {
    subject: 'a steampunk brass automaton, the clockwork hound of coal, raising its weapon, steampunk steam era style'
  }
})

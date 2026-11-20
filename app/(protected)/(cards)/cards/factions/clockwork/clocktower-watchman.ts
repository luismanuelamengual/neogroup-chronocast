import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { gainArmor } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'clocktower-watchman',
  type: 'ally',
  name: 'Clocktower Watchman',
  text: 'At the start of each phase, your hero gains 2 armor.',
  flavor: 'He has rung the hour for two hundred years. Never late.',
  faction: 'clockwork',
  restriction: { kind: 'faction', faction: 'clockwork' },
  rarity: 'common',
  price: 55,
  cost: 3,
  attack: 8,
  health: 26,
  keywords: ['guardian'],
  onPhaseStart(ctx) {
    gainArmor(ctx, ctx.owner, 2)
  },
  ai: { value: 3, tags: ['defense'] },
  art: {
    subject: 'an old watchman automaton with a lantern standing guard on top of a huge clock tower at night'
  }
})

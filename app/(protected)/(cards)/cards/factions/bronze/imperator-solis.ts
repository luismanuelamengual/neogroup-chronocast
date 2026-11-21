import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { buffAllies } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'imperator-solis',
  type: 'ally',
  name: 'Imperator Solis',
  text: 'At the start of each phase, your allies gain +2 attack and +2 health.',
  flavor: 'Under his sun, no legion ever sets.',
  faction: 'bronze',
  restriction: { kind: 'faction', faction: 'bronze' },
  rarity: 'legendary',
  price: 5750,
  cost: 7,
  attack: 26,
  health: 27,
  keywords: ['unique'],
  onPhaseStart(ctx) {
    buffAllies(ctx, ctx.owner, 2, 2)
  },
  ai: { value: 9, tags: ['buff'] },
  art: {
    subject: 'a radiant emperor with a sun crown and golden armor raising his arm before cheering legions'
  }
})

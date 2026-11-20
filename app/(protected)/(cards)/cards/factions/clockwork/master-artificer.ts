import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { gainChronos, summonCard } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'master-artificer',
  type: 'ally',
  name: 'Master Artificer',
  text: 'On enter: summon a Gear Drone and gain 1 Chronos.',
  flavor: 'Give him a spring and a coin, and he will build you a city.',
  faction: 'clockwork',
  restriction: { kind: 'faction', faction: 'clockwork' },
  rarity: 'rare',
  price: 600,
  cost: 4,
  attack: 12,
  health: 26,
  onEnter(ctx) {
    summonCard(ctx, ctx.owner, 'gear-drone')
    gainChronos(ctx, ctx.owner, 1)
  },
  ai: { value: 5, tags: ['summon', 'ramp'] },
  art: {
    subject:
      'a master artificer with a mechanical eye and leather apron assembling a complex brass machine on his workbench'
  }
})

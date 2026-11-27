import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damage, killerOf } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'spiteful-skeleton',
  type: 'ally',
  name: 'Spiteful Skeleton',
  text: 'When it dies: deal 3 shadow damage to whoever killed it.',
  flavor: 'It holds a grudge longer than it held a life.',
  faction: 'void',
  restriction: { factions: ['void'], sides: ['eclipse'] },
  rarity: 'common',
  price: 60,
  cost: 2,
  tribe: 'undead',
  element: 'shadow',
  attack: 3,
  health: 4,
  onDeath(ctx, unit) {
    const killer = killerOf(unit)

    if (!killer || killer.player === ctx.owner) {
      return
    }

    const found = killer.uid != null ? ctx.engine.findUnit(killer.uid) : null

    if (killer.uid == null) {
      damage(ctx, { player: killer.player, slot: 'hero' }, 3)
    } else if (found) {
      damage(ctx, { player: found.player, slot: found.slot }, 3)
    }
  },
  ai: { value: 3 },
  art: {
    subject:
      'Spiteful Skeleton: a grinning skeleton with a cracked skull pointing a bony finger, wisps of shadow around it, full body, violet accents, dark end-of-time void style'
  }
})

import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damageEnemyHero, killerOf } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'lava-jackal',
  type: 'ally',
  name: 'Lava Jackal',
  text: 'When it dies: if an enemy ally killed it, that ally is destroyed; if the enemy hero did, deal 2 fire damage to it.',
  flavor: 'Kill it and it takes you along.',
  faction: 'primal',
  restriction: { factions: ['primal'] },
  rarity: 'uncommon',
  price: 160,
  cost: 4,
  tribe: 'beast',
  element: 'fire',
  attack: 5,
  health: 8,
  onDeath(ctx, unit) {
    const killer = killerOf(unit)

    if (!killer || killer.player !== ctx.opponent) {
      return
    }

    if (killer.uid != null) {
      if (ctx.engine.findUnit(killer.uid)) {
        ctx.engine.destroy(killer.uid)
      }
    } else {
      damageEnemyHero(ctx, 2, 'fire')
    }
  },
  ai: { value: 5 },
  art: {
    subject:
      'Lava Jackal: a jackal made of cooling black rock with molten lava cracks glowing across its body, snarling, full body, red accents, prehistoric jungle era style'
  }
})

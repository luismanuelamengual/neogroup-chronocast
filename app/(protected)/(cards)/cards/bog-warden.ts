import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { unitAt } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'bog-warden',
  type: 'ally',
  name: 'Bog Warden',
  text: 'Its ability is paid with energy (⚡).',
  flavor: 'The marsh keeps what it takes.',
  faction: 'primal',
  restriction: { factions: ['primal'], sides: ['dawn'] },
  rarity: 'uncommon',
  price: 160,
  cost: 4,
  tribe: 'saurian',
  attack: 3,
  health: 9,
  ability: {
    name: 'Sink',
    text: 'An enemy ally loses all its attack.',
    cost: 2,
    resource: 'energy',
    targets: ['enemyAlly'],
    ai: { tags: ['control'] },
    activate(ctx) {
      const victim = unitAt(ctx, ctx.targets[0])

      if (victim && victim.attack > 0) {
        ctx.engine.buff(victim.uid, -victim.attack, 0)
      }
    }
  },
  ai: { value: 4, tags: ['ability', 'energy', 'control'] },
  art: {
    subject:
      'Bog Warden: a moss-covered lizard guardian half submerged in a misty swamp, glowing yellow eyes, full body, olive green accents, prehistoric jungle era style'
  }
})

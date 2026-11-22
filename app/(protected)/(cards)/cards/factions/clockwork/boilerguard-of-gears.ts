import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { gainArmor, stunAt } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'boilerguard-of-gears',
  type: 'ally',
  name: 'Boilerguard of Gears',
  text: 'At the start of each phase: your hero gains 2 armor. Its ability is paid with energy (⚡).',
  faction: 'clockwork',
  restriction: { kind: 'faction', faction: 'clockwork' },
  rarity: 'rare',
  resist: ['acid'],
  weak: ['lightning'],
  price: 750,
  cost: 6,
  tribe: 'automaton',
  keywords: ['shield'],
  attack: 9,
  health: 11,
  ability: {
    name: 'Daze',
    text: 'Stun an enemy ally.',
    cost: 2,
    resource: 'energy',
    targets: ['enemyAlly'],
    activate(ctx) {
      stunAt(ctx, ctx.targets[0])
    }
  },
  onPhaseStart(ctx) {
    gainArmor(ctx, ctx.owner, 2)
  },
  ai: { value: 7, tags: ['ability', 'defense', 'energy'] },
  art: {
    subject: 'a steampunk brass automaton, the boilerguard of gears, charging into battle, steampunk steam era style'
  }
})

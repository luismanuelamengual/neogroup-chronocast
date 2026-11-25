import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { healHero, stunAt } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'boilerguard-of-gears',
  type: 'ally',
  name: 'Boilerguard of Gears',
  text: 'At the start of each phase: your hero heals 2. Its ability is paid with energy (⚡).',
  faction: 'clockwork',
  restriction: { factions: ['clockwork'] },
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
    healHero(ctx, 2)
  },
  ai: { value: 7, tags: ['ability', 'defense', 'energy'] },
  art: {
    subject:
      'Boilerguard of Gears: a boilerguard built of matte olive with yellow eyes, with a glowing furnace heart, skidding into position, steampunk steam era style'
  }
})

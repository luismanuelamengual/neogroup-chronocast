import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { healHero, stunAt } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'timeless-wanderer',
  type: 'ally',
  name: 'Timeless Wanderer',
  text: 'At the start of each phase: your hero heals 2. Its ability is paid with energy (⚡).',
  faction: 'neutral',
  restriction: { kind: 'any' },
  rarity: 'uncommon',
  element: 'time',
  price: 190,
  cost: 4,
  tribe: 'drifter',
  keywords: ['guardian'],
  attack: 4,
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
  ai: { value: 4, tags: ['ability', 'energy', 'heal'] },
  art: {
    subject: 'a time-traveling wanderer, the timeless wanderer, lunging forward, time rift wanderer style'
  }
})

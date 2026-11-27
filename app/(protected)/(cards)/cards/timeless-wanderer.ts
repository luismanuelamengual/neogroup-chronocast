import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { healHero, stunAt } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'timeless-wanderer',
  type: 'ally',
  name: 'Timeless Wanderer',
  text: 'At the start of each phase: your hero heals 2. Its ability is paid with energy (⚡).',
  faction: 'neutral',
  restriction: { sides: ['dawn'] },
  rarity: 'uncommon',
  element: 'time',
  price: 180,
  cost: 4,
  tribe: 'drifter',
  keywords: ['guardian', 'retaliate'],
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
    subject:
      'Timeless Wanderer: a hunched middle-aged halfling man with ruddy skin, chestnut hair in thick dreadlocks, a full beard and a crooked broken nose, wearing a beaded headband, dressed in a pirate greatcoat with clock-face buttons, leaning on a carved walking staff, with a mischievous wink, magenta accents, time rift wanderer style'
  }
})

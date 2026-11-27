import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { suppressKeywordsAt } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'coldgaze-serpent',
  type: 'ally',
  name: 'Coldgaze Serpent',
  text: 'Its ability is paid with energy (⚡).',
  flavor: 'One look, and the bravest guard steps aside.',
  faction: 'void',
  restriction: { factions: ['void'], sides: ['eclipse'] },
  rarity: 'uncommon',
  price: 160,
  cost: 3,
  tribe: 'horror',
  attack: 5,
  health: 8,
  ability: {
    name: 'Cold Gaze',
    text: 'An enemy ally loses Guardian and Retaliate this phase.',
    cost: 1,
    resource: 'energy',
    targets: ['enemyAlly'],
    ai: { tags: ['control'] },
    activate(ctx) {
      suppressKeywordsAt(ctx, ctx.targets[0], ['guardian', 'retaliate'], 0)
    }
  },
  ai: { value: 4, tags: ['ability', 'energy', 'control'] },
  art: {
    subject:
      'Coldgaze Serpent: a serpent woman with snakes for hair and pale glowing eyes rising from black water, full body, ice blue accents, dark end-of-time void style'
  }
})

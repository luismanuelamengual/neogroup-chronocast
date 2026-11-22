import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { seekTribe, stunAt } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'codebreaker-of-the-hawk',
  type: 'ally',
  name: 'Codebreaker of the Hawk',
  text: 'When it enters: draw the first Netrunner of your deck. Its ability is paid with energy (⚡).',
  faction: 'neutral',
  restriction: { kind: 'class', heroClass: 'hunter' },
  rarity: 'uncommon',
  element: 'wind',
  price: 155,
  cost: 2,
  tribe: 'netrunner',
  attack: 4,
  health: 3,
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
  onEnter(ctx) {
    seekTribe(ctx, ctx.owner, 'netrunner')
  },
  ai: { value: 2, tags: ['ability', 'aggro', 'draw', 'energy', 'tribe'] },
  art: {
    subject: 'a cyberpunk hacker with holographic screens, the codebreaker of the hawk, mid-leap, hunter style'
  }
})

import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { seekTribe, stunAt } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'codebreaker-of-the-hawk',
  type: 'ally',
  name: 'Codebreaker of the Hawk',
  text: 'When it enters: draw the first Netrunner of your deck. Its ability is paid with energy (⚡).',
  faction: 'neutral',
  restriction: { sides: ['eclipse'] },
  rarity: 'uncommon',
  element: 'wind',
  price: 140,
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
    subject:
      'Codebreaker of the Hawk: a broad-shouldered young man with sun-weathered bronze skin, charcoal grey hair in a topknot, mutton chops and a beaded chin piercing, dressed in a lab coat with VR rig, twisting a cube of glowing code, with a haunted stare, turquoise accents, hunter style'
  }
})

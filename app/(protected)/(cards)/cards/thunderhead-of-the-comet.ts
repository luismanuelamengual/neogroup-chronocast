import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { buffTribe, heal } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'thunderhead-of-the-comet',
  type: 'ally',
  name: 'Thunderhead of the Comet',
  text: 'When it enters: your other Elementals gain +1 attack and +1 health. Its ability is paid with energy (⚡).',
  faction: 'neutral',
  restriction: { sides: ['dawn'] },
  rarity: 'uncommon',
  element: 'lightning',
  resist: ['lightning'],
  weak: ['earth'],
  price: 140,
  cost: 2,
  tribe: 'elemental',
  keywords: ['shield'],
  attack: 2,
  health: 5,
  ability: {
    name: 'Mend',
    text: 'An ally of yours heals 5.',
    cost: 2,
    resource: 'energy',
    targets: ['friendlyAlly'],
    activate(ctx) {
      heal(ctx, ctx.targets[0], 5)
    }
  },
  onEnter(ctx) {
    buffTribe(ctx, ctx.owner, 'elemental', 1, 1, true)
  },
  ai: { value: 2, tags: ['ability', 'buff', 'energy', 'tribe'] },
  art: {
    subject:
      'Thunderhead of the Comet: an elemental thunderhead with a crouching wolf shape made of swirling sand gold, standing proud on a rock, mage style'
  }
})

import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damage, damageRandomAlly } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'entropy-mage',
  type: 'ally',
  name: 'Entropy Mage',
  text: 'On enter: deal 6 damage to a random enemy ally.',
  flavor: 'Everything falls apart. He just helps.',
  faction: 'void',
  restriction: { kind: 'faction', faction: 'void' },
  rarity: 'uncommon',
  price: 180,
  cost: 4,
  attack: 10,
  health: 20,
  keywords: ['ranged'],
  ability: {
    name: 'Decay',
    text: 'Deal 9 damage to an enemy ally.',
    cost: 2,
    targets: ['enemyAlly'],
    activate(ctx) {
      damage(ctx, ctx.targets[0], 9)
    }
  },
  onEnter(ctx) {
    damageRandomAlly(ctx, ctx.opponent, 6)
  },
  ai: { value: 4, tags: ['ability', 'removal'] },
  art: {
    subject: 'a mage dissolving into floating particles, firing a beam that makes a rock crumble to dust'
  }
})

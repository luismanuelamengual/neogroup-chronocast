import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damage, stunRandomAlly } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'frost-adept',
  type: 'ally',
  name: 'Frost Adept',
  text: 'On enter: stun a random enemy ally.',
  flavor: 'Stay still. It will only hurt a little.',
  faction: 'arcane',
  restriction: { kind: 'faction', faction: 'arcane' },
  rarity: 'uncommon',
  price: 170,
  cost: 3,
  attack: 7,
  health: 16,
  ability: {
    name: 'Frostbolt',
    text: 'Deal 6 damage to an enemy ally.',
    cost: 2,
    targets: ['enemyAlly'],
    activate(ctx) {
      damage(ctx, ctx.targets[0], 6)
    }
  },
  onEnter(ctx) {
    stunRandomAlly(ctx, ctx.opponent)
  },
  ai: { value: 3, tags: ['ability', 'control'] },
  art: {
    subject: 'a pale mage in an icy blue robe freezing a goblin solid with a beam of frost'
  }
})

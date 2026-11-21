import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damage, damageRandomAlly } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'arc-trooper',
  type: 'ally',
  name: 'Arc Trooper',
  text: 'When it attacks: deal 3 damage to a random enemy ally.',
  flavor: 'Every shot jumps to the next target.',
  faction: 'neon',
  restriction: { kind: 'faction', faction: 'neon' },
  rarity: 'rare',
  price: 640,
  cost: 5,
  attack: 15,
  health: 13,
  keywords: ['ranged'],
  ability: {
    name: 'Overcharge',
    text: 'Deal 12 damage to an enemy ally.',
    cost: 2,
    targets: ['enemyAlly'],
    activate(ctx) {
      damage(ctx, ctx.targets[0], 12)
    }
  },
  onAttack(ctx) {
    damageRandomAlly(ctx, ctx.opponent, 3)
  },
  ai: { value: 6, tags: ['ability', 'removal'] },
  art: {
    subject: 'a soldier firing an arc rifle, lightning bolts chaining between several enemies'
  }
})

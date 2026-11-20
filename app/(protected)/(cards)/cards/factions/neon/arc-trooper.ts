import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damageRandomAlly } from '@/app/(protected)/(engine)/effects'

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
  attack: 18,
  health: 30,
  keywords: ['ranged'],
  onAttack(ctx) {
    damageRandomAlly(ctx, ctx.opponent, 3)
  },
  ai: { value: 6, tags: ['removal'] },
  art: {
    subject: 'a soldier firing an arc rifle, lightning bolts chaining between several enemies'
  }
})

import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damageRandomAlly } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'moonlit-basilisk',
  type: 'ally',
  name: 'Moonlit Basilisk',
  text: 'When it dies: deal 4 fire damage to a random enemy ally.',
  faction: 'arcane',
  restriction: { kind: 'faction', faction: 'arcane' },
  rarity: 'common',
  element: 'fire',
  resist: ['fire'],
  weak: ['ice'],
  price: 55,
  cost: 3,
  tribe: 'drake',
  keywords: ['shield'],
  attack: 2,
  health: 9,
  onDeath(ctx) {
    damageRandomAlly(ctx, ctx.opponent, 4)
  },
  ai: { value: 3, tags: ['removal'] },
  art: {
    subject: 'a dragon-kin creature, the moonlit basilisk, raising its weapon, medieval magic order style'
  }
})

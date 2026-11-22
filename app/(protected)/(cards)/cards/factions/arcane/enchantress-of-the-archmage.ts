import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damageRandomAlly } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'enchantress-of-the-archmage',
  type: 'ally',
  name: 'Enchantress of the Archmage',
  text: 'When it dies: deal 4 fire damage to a random enemy ally.',
  faction: 'arcane',
  restriction: { kind: 'faction', faction: 'arcane' },
  rarity: 'common',
  element: 'fire',
  resist: ['arcane'],
  price: 55,
  cost: 3,
  tribe: 'magus',
  keywords: ['flying'],
  attack: 3,
  health: 7,
  onDeath(ctx) {
    damageRandomAlly(ctx, ctx.opponent, 4)
  },
  ai: { value: 3, tags: ['removal'] },
  art: {
    subject: 'a medieval spellcaster, the enchantress of the archmage, charging into battle, medieval magic order style'
  }
})

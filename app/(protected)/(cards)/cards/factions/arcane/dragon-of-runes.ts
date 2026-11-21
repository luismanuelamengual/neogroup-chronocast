import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { damageAllAllies } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'dragon-of-runes',
  type: 'ally',
  name: 'Dragon of Runes',
  text: 'On enter: deal 5 damage to every enemy ally.',
  flavor: 'Every scale is a spell older than the kingdom.',
  faction: 'arcane',
  restriction: { kind: 'faction', faction: 'arcane' },
  rarity: 'epic',
  price: 2000,
  cost: 6,
  attack: 24,
  health: 20,
  keywords: ['flying'],
  onEnter(ctx) {
    damageAllAllies(ctx, ctx.opponent, 5)
  },
  ai: { value: 7, tags: ['removal'] },
  art: {
    subject: 'a majestic sapphire dragon covered in glowing rune scales, breathing blue fire over a castle'
  }
})

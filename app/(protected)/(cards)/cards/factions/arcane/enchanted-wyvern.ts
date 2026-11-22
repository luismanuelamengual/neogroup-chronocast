import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { draw } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'enchanted-wyvern',
  type: 'ally',
  name: 'Enchanted Wyvern',
  text: 'When it enters: draw a card.',
  faction: 'arcane',
  restriction: { kind: 'faction', faction: 'arcane' },
  rarity: 'rare',
  resist: ['fire'],
  weak: ['ice'],
  price: 630,
  cost: 4,
  tribe: 'drake',
  keywords: ['flying'],
  attack: 4,
  health: 9,
  onEnter(ctx) {
    draw(ctx, ctx.owner, 1)
  },
  ai: { value: 5, tags: ['draw'] },
  art: {
    subject: 'a dragon-kin creature, the enchanted wyvern, mid-leap, medieval magic order style'
  }
})

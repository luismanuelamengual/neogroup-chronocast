import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { seekTribe } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'enchanted-wyvern',
  type: 'ally',
  name: 'Enchanted Wyvern',
  text: 'When it enters: draw the first Drake of your deck.',
  faction: 'arcane',
  restriction: { factions: ['arcane'], sides: ['eclipse'] },
  rarity: 'rare',
  resist: ['fire'],
  weak: ['ice'],
  price: 480,
  cost: 4,
  tribe: 'drake',
  keywords: ['flying'],
  attack: 4,
  health: 9,
  onEnter(ctx) {
    seekTribe(ctx, ctx.owner, 'drake')
  },
  ai: { value: 5, tags: ['draw'] },
  art: {
    subject:
      'Enchanted Wyvern: a wyvern with bronze scales and membranous wings spread wide, mid-stride, crimson accents, medieval magic order style'
  }
})

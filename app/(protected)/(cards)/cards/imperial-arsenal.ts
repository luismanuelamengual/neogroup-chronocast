import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { seekType } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'imperial-arsenal',
  type: 'ability',
  subtype: 'tactic',
  name: 'Imperial Arsenal',
  text: 'Draw the first weapon and the first armor of your deck.',
  faction: 'bronze',
  restriction: { factions: ['bronze'] },
  rarity: 'uncommon',
  price: 140,
  cost: 3,
  onPlay(ctx) {
    seekType(ctx, ctx.owner, 'weapon')
    seekType(ctx, ctx.owner, 'armor')
  },
  ai: { value: 2, tags: ['draw'] },
  art: {
    subject:
      'Imperial Arsenal: racks of bronze swords, spears and shields in a torch-lit imperial armory, legion banners on the walls, wide shot, crimson accents, ancient bronze-age empire style'
  }
})

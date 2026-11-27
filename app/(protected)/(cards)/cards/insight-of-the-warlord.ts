import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { seekTribe, seekType } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'insight-of-the-warlord',
  type: 'ability',
  subtype: 'tactic',
  name: 'Insight of the Warlord',
  text: 'Draw the first Colossus and the first weapon of your deck.',
  faction: 'bronze',
  restriction: { factions: ['bronze'], sides: ['eclipse'] },
  rarity: 'uncommon',
  price: 180,
  cost: 4,
  onPlay(ctx) {
    seekTribe(ctx, ctx.owner, 'colossus')
    seekType(ctx, ctx.owner, 'weapon')
  },
  ai: { value: 4, tags: ['draw', 'tribe'] },
  art: {
    subject:
      'Insight of the Warlord: a giant glowing eye opening in the sky, against a starry sky, bursting toward the viewer, tangerine accents, warrior style'
  }
})

import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { alliesOf, freezeAlly } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'enchantress-of-the-archmage',
  type: 'ally',
  name: 'Enchantress of the Archmage',
  text: 'When it dies: freeze every enemy ally.',
  faction: 'arcane',
  restriction: { factions: ['arcane'], sides: ['dawn'] },
  rarity: 'common',
  resist: ['arcane'],
  price: 55,
  cost: 3,
  tribe: 'magus',
  keywords: ['flying'],
  attack: 3,
  health: 7,
  onDeath(ctx) {
    for (const unit of alliesOf(ctx, ctx.opponent)) {
      freezeAlly(ctx, unit)
    }
  },
  ai: { value: 3, tags: ['removal'] },
  art: {
    subject:
      'Enchantress of the Archmage: an athletic adult tiefling man with freckled fair skin, chestnut hair in a sharp bob, a full beard and heterochromatic eyes, wearing a thin silver circlet, dressed in frost-white robes with icicle trim, weaving threads of light between the fingers, with wide-eyed wonder, gold accents, medieval magic order style'
  }
})

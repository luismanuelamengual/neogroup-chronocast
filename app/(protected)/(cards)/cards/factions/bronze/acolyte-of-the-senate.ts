import { defineCard } from '@/app/(protected)/(cards)/utils/defineCard'
import { buffSelf, gainArmor, tribeAllies } from '@/app/(protected)/(engine)/effects'

export default defineCard({
  id: 'acolyte-of-the-senate',
  type: 'ally',
  name: 'Acolyte of the Senate',
  text: 'When it enters: it gains +1 attack and +1 health for each other Oracle of yours. At the start of each phase: your hero gains 2 armor.',
  faction: 'bronze',
  restriction: { kind: 'faction', faction: 'bronze' },
  rarity: 'legendary',
  resist: ['light'],
  price: 4400,
  cost: 2,
  tribe: 'oracle',
  keywords: ['cleave', 'unique'],
  attack: 3,
  health: 5,
  onEnter(ctx) {
    const count = tribeAllies(ctx, ctx.owner, 'oracle', true).length

    buffSelf(ctx, 1 * count, 1 * count)
  },
  onPhaseStart(ctx) {
    gainArmor(ctx, ctx.owner, 2)
  },
  ai: { value: 4, tags: ['buff', 'defense', 'tribe'] },
  art: {
    subject:
      'Acolyte of the Senate: a barrel-chested young man with tan skin, ash brown hair in a high ponytail, a thin mustache and a crooked broken nose, wearing a sheer veil, dressed in a saffron chiton with gold arm bands, carrying a smoking censer, with a serene smile, crimson accents, ancient bronze-age empire style'
  }
})

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
      'an ancient temple seer in white robes, the acolyte of the senate, lunging forward, ancient bronze-age empire style'
  }
})
